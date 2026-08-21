// app.js — Boutique Garcia

const WA = 'https://wa.me/5215537949345';

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';

const PLACEHOLDER_HTML =
  '<div class="img-placeholder">' +
    '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">' +
      '<rect x="3" y="3" width="18" height="18" rx="2"/>' +
      '<circle cx="8.5" cy="8.5" r="1.5"/>' +
      '<path d="m21 15-5-5L5 21"/>' +
    '</svg>' +
    '<span>Imagen pr\u00f3ximamente</span>' +
  '</div>';

const WA_ICON_HTML =
  '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">' +
    '<path d="' + WA_PATH + '"/>' +
  '</svg>';

function waMsg(p) {
  return encodeURIComponent(
    '\u00a1Hola! Me interesa este art\u00edculo \uD83D\uDECD\uFE0F\n' +
    'Producto: ' + p.nombre + '\n' +
    'Categor\u00eda: ' + p.cat + '\n' +
    'Precio: ' + displayPrice(p) + '\n' +
    '\u00bfEst\u00e1 disponible?'
  );
}

// Una etiqueta cuenta como "lista para publicar" solo si NO contiene
// la palabra PENDIENTE. Así, mientras no captures la talla/medida real,
// el sitio simplemente no muestra la etiqueta (en vez de mostrar
// "Talla: PENDIENTE" a un cliente).
function detailHTML(p) {
  if (!p.detalle) return '';
  if (p.detalle.indexOf('PENDIENTE') > -1) return '';
  return '<span class="card-detail">' + p.detalle + '</span>';
}

// p.price es siempre el precio de lista. El % de descuento sale de
// getDiscountPercent() (definida en discount-rules.js): campo manual
// `descuento` en el producto, o la primera regla de DISCOUNT_RULES
// que haga match. Si no hay descuento, se muestra solo el precio.
function parsePriceNumber(str) {
  var n = parseFloat(String(str).replace(/[^0-9.]/g, ''));
  return isNaN(n) ? 0 : n;
}
function formatMXN(n) {
  return '$' + n.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
// Precio final ya con descuento aplicado (si lo hay). Es la única
// fuente de verdad: la tarjeta y el mensaje de WhatsApp usan esta
// misma función, así nunca se desincroniza lo que ve el cliente en
// el sitio con lo que dice el mensaje que manda.
function displayPrice(p) {
  var pct = getDiscountPercent(p);
  if (!pct) return p.price;
  return formatMXN(parsePriceNumber(p.price) * (1 - pct / 100));
}
function priceBlockHTML(p) {
  var pct = getDiscountPercent(p);

  if (!pct) {
    return '<div class="price-block"><div class="price-row"><span class="price-current">' + p.price + '</span></div></div>';
  }

  var finalPrice = parsePriceNumber(displayPrice(p));
  var html = '<div class="price-block">';
  html +=   '<div class="price-original">' + p.price + '</div>';
  html +=   '<div class="price-row">';
  html +=     '<span class="price-current">' + displayPrice(p) + '</span>';
  html +=     '<span class="price-badge">' + pct + '% OFF</span>';
  html +=   '</div>';
  if (p.meses) {
    html += '<div class="price-installments">' + p.meses + ' meses de ' + formatMXN(calcularMensualidad(finalPrice, p.meses)) + '</div>';
  }
  html += '</div>';
  return html;
}

// Listón "CONTADO" sobre la esquina de la foto. Se muestra en TODO
// el catálogo (CONTADO_ACTIVO en discount-rules.js) y su precio
// siempre sale de p.price, sin importar el descuento normal del
// producto.
function cashBadgeHTML(p) {
  var cashPrice = getCashPrice(p);
  if (!cashPrice) return '';
  return '<span class="card-cash-badge" title="Precio pagando de contado">' +
         '<span class="card-cash-top">Contado</span>' +
         '<span class="card-cash-price">' + cashPrice + '</span></span>';
}

function cardHTML(p, i) {
  var delay = (Math.min(i, 20) * 0.04) + 's';

  var imgHTML = p.img !== 'PENDIENTE'
    ? '<img src="' + p.img + '" alt="' + p.nombre + '" loading="lazy" decoding="async" ' +
      'onload="this.closest(\'.card-img-wrap\').classList.toggle(\'is-landscape\', this.naturalWidth > this.naturalHeight)">'
    : PLACEHOLDER_HTML;

  var html = '';
  html += '<div class="card" style="animation-delay:' + delay + '">';
  html +=   '<div class="card-img-wrap">';
  html +=     imgHTML;
  html +=     '<span class="card-badge">' + p.cat + '</span>';
  html +=     cashBadgeHTML(p);
  html +=   '</div>';
  html +=   '<div class="card-body">';
  html +=     '<div class="card-name">' + p.nombre + '</div>';
  html +=     '<div class="card-desc">' + p.desc + '</div>';
  html +=     detailHTML(p);
  html +=     priceBlockHTML(p);
  html +=     '<a class="card-btn" href="' + WA + '?text=' + waMsg(p) + '" target="_blank" rel="noopener">';
  html +=       WA_ICON_HTML + ' Pedir por WhatsApp';
  html +=     '</a>';
  html +=   '</div>';
  html += '</div>';

  return html;
}

function renderGrid(list) {
  var grid  = document.getElementById('grid');
  var count = document.getElementById('resultsCount');

  count.textContent = list.length + ' producto' + (list.length !== 1 ? 's' : '');

  if (!list.length) {
    grid.innerHTML =
      '<div class="empty">' +
        '<div class="empty-icon">\uD83D\uDECD\uFE0F</div>' +
        '<p>No encontramos productos con esa b\u00fasqueda.</p>' +
      '</div>';
    return;
  }

  grid.innerHTML = list.map(function(p, i) { return cardHTML(p, i); }).join('');
}

var activeFilter = 'Todos';
var activeGender = 'Dama';   // el interruptor siempre tiene una posición elegida
var searchTerm   = '';

// Catálogo base: se excluyen aquí los productos marcados activo: false
// (sin existencia). Todo lo demás (filtros, búsqueda) parte de esta lista.
var AVAILABLE_PRODUCTS = PRODUCTS.filter(function(p) { return p.activo !== false; });

// Un producto pertenece a la vista de género activa si:
//  - su genero coincide exactamente (Dama/Caballero), o
//  - todavía no se ha clasificado (PENDIENTE) o es Unisex —
//    en ambos casos se muestra en las dos vistas para no ocultarlo
//    por error mientras no se haya revisado o si aplica a ambos.
function matchesGender(p) {
  return p.genero === activeGender ||
         p.genero === 'Unisex' ||
         p.genero === 'PENDIENTE' ||
         !p.genero;
}

function applyFilters() {
  var list = AVAILABLE_PRODUCTS.filter(matchesGender);
  if (activeFilter !== 'Todos') {
    list = list.filter(function(p) { return p.cat === activeFilter; });
  }
  if (searchTerm) {
    var q = searchTerm.toLowerCase();
    list = list.filter(function(p) {
      return p.nombre.toLowerCase().indexOf(q) > -1 ||
             p.desc.toLowerCase().indexOf(q)   > -1 ||
             p.cat.toLowerCase().indexOf(q)    > -1;
    });
  }
  renderGrid(list);
}

document.querySelectorAll('.gender-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.gender-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    activeGender = btn.dataset.gender;
    applyFilters();
  });
});

document.getElementById('categorySelect').addEventListener('change', function(e) {
  activeFilter = e.target.value;
  applyFilters();
});

document.getElementById('searchInput').addEventListener('input', function(e) {
  searchTerm = e.target.value.trim();
  applyFilters();
});

applyFilters();
