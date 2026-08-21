// discount-rules.js — Reglas de descuento automáticas
//
// Cada regla es un condicional: si `test(p)` devuelve true para un
// producto, se le aplica ese % de descuento sobre su `price` (que
// siempre es el precio de lista / regular, sin descuento).
//
// El primer producto ya trae ejemplos comentados. Descomenta y
// edita, o agrega los tuyos siguiendo el mismo patrón. El orden
// importa: se usa la PRIMERA regla que haga match.

var DISCOUNT_RULES = [

  // ACTIVA — 15% en artículos por arriba de $2,000. Va PRIMERO porque
  // es más específica: si un producto cuesta $2,500, queremos que
  // gane esta regla (15%) y no la general de abajo (10%).
  { test: function(p) { return parseFloat(p.price.replace(/[^0-9.]/g,'')) > 2000; }, percent: 15 },

  // APAGADA — 10% en TODA la tienda. Se desactivó al agregar el
  // descuento de CONTADO. Para reactivarla, descomenta la línea de
  // abajo (recuerda dejarla AL FINAL: como es la más general,
  // cualquier regla más específica de arriba seguirá funcionando).
  // { test: function(p) { return true; }, percent: 10 },

  // Ejemplo — 20% de descuento en toda una categoría:
  // { test: function(p) { return p.cat === 'Sudadera'; }, percent: 20 },

  // Ejemplo — 15% de descuento en una marca específica
  // (busca el texto dentro del nombre del producto):
  // { test: function(p) { return p.nombre.indexOf('Tommy Hilfiger') > -1; }, percent: 15 },

  // Ejemplo — combinar condiciones con && (Y) / || (O):
  // { test: function(p) { return p.cat === 'Tote' && p.nombre.indexOf('Guess') > -1; }, percent: 10 },

];

// Descuento manual por producto (siempre gana sobre las reglas de arriba).
// Se usa agregando el campo `descuento` directo en products.js:
//     { ..., price: '$2,299.00', descuento: 62 }
// Esto es útil para una oferta puntual de una sola pieza, sin crear
// una regla general para toda una categoría o marca.
function getDiscountPercent(p) {
  if (typeof p.descuento === 'number') return p.descuento;
  for (var i = 0; i < DISCOUNT_RULES.length; i++) {
    if (DISCOUNT_RULES[i].test(p)) return DISCOUNT_RULES[i].percent;
  }
  return 0;
}

// ═══════════════════════════════════════════════════════════════
//  DESCUENTO POR PAGO DE CONTADO
//
//  25% de descuento sobre el precio de LISTA (p.price), disponible
//  para TODO el catálogo, sin importar si el producto ya tiene otro
//  descuento (getDiscountPercent) aplicado o no. Es una etiqueta
//  aparte que se muestra siempre: "de contado, este producto te sale
//  en $X". No se acumula con las reglas de arriba ni con el
//  descuento manual — siempre se calcula sobre p.price.
//
//  Para desactivarla en todo el sitio, pon CONTADO_ACTIVO = false.
// ═══════════════════════════════════════════════════════════════
var CONTADO_ACTIVO = true;
var CONTADO_PERCENT = 25;

function getCashPrice(p) {
  if (!CONTADO_ACTIVO) return null;
  return formatMXN(parsePriceNumber(p.price) * (1 - CONTADO_PERCENT / 100));
}

// ═══════════════════════════════════════════════════════════════
//  MESES CON INTERESES
//
//  Ajusta este número a la tasa MENSUAL real que tú (o tu
//  financiera/tarjeta) cobran — no la anual. Ejemplo: si tu tasa
//  anual es 36%, la mensual aproximada es 36/12 = 3.0, o sea 0.03.
//
//  Con 0.0322 (3.22% mensual) se reproduce el ejemplo de tu
//  captura: $858 a 24 meses ≈ $51.85/mes. Cámbialo por tu tasa real.
// ═══════════════════════════════════════════════════════════════
var TASA_INTERES_MENSUAL = 0.0322;

// Pago mensual con intereses (amortización estándar), NO precio ÷ meses.
// finalPrice = precio ya con descuento aplicado. meses = p.meses.
function calcularMensualidad(finalPrice, meses) {
  if (!meses || meses <= 0) return finalPrice;
  var r = TASA_INTERES_MENSUAL;
  if (!r) return finalPrice / meses; // tasa en 0 = sin intereses
  return finalPrice * r / (1 - Math.pow(1 + r, -meses));
}
