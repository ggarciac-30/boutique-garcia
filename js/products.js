// ═══════════════════════════════════════════════════════════════
//  products.js — Catálogo de Boutique Garcia
//
//  CÓMO AGREGAR TUS IMÁGENES:
//  1. Guarda cada foto en la carpeta /images/ de tu proyecto
//  2. Usa el nombre exacto del archivo en el campo img:
//       img: 'images/nombre-del-archivo.jpg'
//  3. Sube el archivo a GitHub junto con el proyecto
//
//  Mientras no tengas imagen usa: img: 'PENDIENTE'
//
//  CÓMO COMPLETAR EL CAMPO detalle (talla / medidas):
//  Cada producto trae detalle: 'Talla: PENDIENTE' o
//  detalle: 'Medidas: PENDIENTE' según su categoría. Reemplaza
//  PENDIENTE por el dato real cuando lo tengas a la mano:
//       detalle: 'Talla: M'
//       detalle: 'Medidas: 32 x 25 x 14 cm'
//  Mientras diga PENDIENTE, la etiqueta NO se muestra en el sitio
//  (así evitas publicar una talla o medida que aún no revisaste).
//  Accesorios (joyería) no lleva este campo, no aplica.
//
//  CÓMO COMPLETAR EL CAMPO genero (filtro Dama / Caballero):
//  Cada producto trae genero: 'PENDIENTE' por defecto. Cámbialo por
//  el valor real cuando sepas para quién es la prenda:
//       genero: 'Dama'
//       genero: 'Caballero'
//       genero: 'Unisex'      (si aplica igual para ambos)
//  Mientras diga PENDIENTE, el producto se sigue mostrando tanto en
//  la vista Dama como en la vista Caballero — así ningún producto
//  desaparece del sitio solo por no haberlo clasificado todavía.
//  En cuanto le pongas 'Dama' o 'Caballero', aparecerá SOLO en esa
//  vista; 'Unisex' lo deja visible en ambas de forma permanente.
//
//  CÓMO QUITAR UN PRODUCTO SIN EXISTENCIA:
//  Opción recomendada — agrega la línea  activo: false,  dentro
//  del producto. El sitio deja de mostrarlo pero conservas toda
//  su información por si vuelve a haber stock:
//       {
//           img:    'images/ejemplo.jpg',
//           nombre: 'Ejemplo',
//           ...
//           activo: false,
//       },
//  Opción alterna — borra el bloque completo del producto (desde
//  su { hasta su } incluyendo la coma final). Ojo: si borras el
//  último producto de una categoría, revisa que no quede una coma
//  sobrante después del bloque anterior, o el archivo truena.
//  Evita "comentar" el bloque con /* */ dejándolo a la mitad: si
//  el bloque siguiente também queda comentado por error, desaparecen
//  productos que sí querías conservar. activo: false es más seguro.
// ═══════════════════════════════════════════════════════════════

const PRODUCTS = [

// ── Accesorios ─────────────────────────────────────────────────

{
    img:    'images/set-joyería-aéropostale-mariposas.jpg',
    nombre: 'Set Joyería Aéropostale Mariposas',
    desc:   'Collar y aretes con mariposas en zirconia cúbica.',
    cat:    'Accesorios',
    price:  '$600.00',
    genero: 'Dama',
},
{
    img:    'images/set-pulseras-nautica-bicolor.jpg',
    nombre: 'Set Pulseras Nautica Bicolor',
    desc:   '6 bangles en oro y plata lisos y delgados.',
    cat:    'Caballero',
    price:  '$450.00',
    genero: 'Dama',
},
 
// ── Backpack ─────────────────────────────────────────────────

{
    img:    'images/backpack-samsonite-tectonic-x-negro.jpg',
    nombre: 'Backpack Samsonite Tectonic X Negro',
    desc:   'Mochila profesional para laptop con detalles rojo.',
    cat:    'Backpack',
    price:  '$2,000.00',
    genero: 'Caballero',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/backpack-swiss-gear-azul-laptop.jpg',
    nombre: 'Backpack Swiss Gear Azul Laptop',
    desc:   'Mochila técnica para laptop con múltiples compartimentos.',
    cat:    'Backpack',
    price:  '$1,500.00',
    genero: 'Unisex',
    detalle: 'Medidas: PENDIENTE',
},

// ── Crossbody ─────────────────────────────────────────────────

{
    img:    'images/crossbody-calvin-klein-rosa-monograma.jpg',
    nombre: 'Crossbody Calvin Klein Rosa Monograma',
    desc:   'Bolsa cámara con bolsillo frontal rosa palo.',
    cat:    'Crossbody',
    price:  '$2,300.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/crossbody-guess-azul-cielo.jpg',
    nombre: 'Crossbody Guess Azul Cielo',
    desc:   'Mini cámara lisa en azul pastel con monograma.',
    cat:    'Crossbody',
    price:  '$1,600.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/crossbody-tommy-hilfiger-beige-firma.jpg',
    nombre: 'Crossbody Tommy Hilfiger Beige Firma',
    desc:   'Cámara con franja tricolor y botón dorado.',
    cat:    'Crossbody',
    price:  '$1,400.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/crossbody-tommy-hilfiger-blanco-dome.jpg',
    nombre: 'Crossbody Tommy Hilfiger Blanco Dome',
    desc:   'Forma semicircular lisa con logo TH dorado.',
    cat:    'Crossbody',
    price:  '$1,200.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/crossbody-tommy-hilfiger-negro-y-navy.jpg',
    nombre: 'Crossbody Tommy Hilfiger Negro y Navy',
    desc:   'Dos piezas: solapa con monograma y franja tejida.',
    cat:    'Crossbody',
    price:  '$1,200.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/sling-bag-puma-beige.jpg',
    nombre: 'Sling Bag Puma Beige',
    desc:   'Bolsa sling deportiva en tela técnica nude.',
    cat:    'Crossbody',
    price:  '$950.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/sling-bag-reebok-morado.jpg',
    nombre: 'Sling Bag Reebok Morado',
    desc:   'Sling deportivo en nylon con logo Reebok.',
    cat:    'Crossbody',
    price:  '$950.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},

// ── Handbag ─────────────────────────────────────────────────

{
    img:    'images/hobo-calvin-klein-ivory-monograma.jpg',
    nombre: 'Hobo Calvin Klein Ivory Monograma',
    desc:   'Forma media luna con logo CK y herraje plateado.',
    cat:    'Handbag',
    price:  '$2,500.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/mini-barrel-steve-madden-blanco.jpg',
    nombre: 'Mini Barrel Steve Madden Blanco',
    desc:   'Compacta tipo barril con pañuelo y bandolera.',
    cat:    'Handbag',
    price:  '$1,700.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/mini-barrel-steve-madden-camel-texto.jpg',
    nombre: 'Mini Barrel Steve Madden Camel Texto',
    desc:   'Logo texto repetido en tela con asas camel.',
    cat:    'Handbag',
    price:  '$1,700.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/mini-boston-steve-madden-negro.jpg',
    nombre: 'Mini Boston Steve Madden Negro',
    desc:   'Formato boston estructurado con herrajes dorados.',
    cat:    'Handbag',
    price:  '$1,600.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},

// ── Jeans ─────────────────────────────────────────────────

{
    img:    'images/jeans-gap-denim-soft-wear-verde.jpg',
    nombre: 'Jeans GAP Denim Soft Wear Verde',
    desc:   'Jean slim en denim suave tono verde olivo claro.',
    cat:    'Jeans',
    price:  '$1,000.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/jeans-levi\'s-505-azul-medio.jpg',
    nombre: 'Jeans Levi\'s 505 Azul Medio',
    desc:   'Jean regular fit en lavado medio clásico.',
    cat:    'Jeans',
    price:  '$700.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/jeans-levi\'s-513-azul-claro.jpg',
    nombre: 'Jeans Levi\'s 513 Azul Claro',
    desc:   'Jean slim fit en lavado claro desgastado.',
    cat:    'Jeans',
    price:  '$700.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/pantalón-gap-khaki-slim-olivo.jpg',
    nombre: 'Pantalón GAP Khaki Slim Olivo',
    desc:   'Chino slim fit color olivo oscuro.',
    cat:    'Jeans',
    price:  '$1,200.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},

// ── Playera ─────────────────────────────────────────────────

{
    img:    'images/playera-u.s.-polo-assn.-aqua-v.jpg',
    nombre: 'Playera U.S. Polo Assn. Aqua V',
    desc:   'Camiseta cuello V en azul aqua con ribete blanco.',
    cat:    'Playera',
    price:  '$400.00',
    genero: 'Dama',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/playera-u.s.-polo-assn.-menta.jpg',
    nombre: 'Playera U.S. Polo Assn. Menta',
    desc:   'Camiseta cuello redondo en verde menta con ribete azul.',
    cat:    'Playera',
    price:  '$400.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/playera-u.s.-polo-assn.-mostaza-v.jpg',
    nombre: 'Playera U.S. Polo Assn. Mostaza V',
    desc:   'Camiseta cuello V en mostaza vibrante.',
    cat:    'Playera',
    price:  '$400.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/playera-u.s.-polo-assn.-navy-cuello.jpg',
    nombre: 'Playera U.S. Polo Assn. Navy Cuello',
    desc:   'Camiseta navy cuello redondo con ribete gris.',
    cat:    'Playera',
    price:  '$400.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/playera-u.s.-polo-assn.-negro-gris.jpg',
    nombre: 'Playera U.S. Polo Assn. Negro Gris',
    desc:   'Camiseta negra cuello redondo con ribete gris.',
    cat:    'Playera',
    price:  '$400.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/playera-u.s.-polo-assn.-rojo-v.jpg',
    nombre: 'Playera U.S. Polo Assn. Rojo V',
    desc:   'Camiseta cuello V en rojo intenso.',
    cat:    'Playera',
    price:  '$400.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/playera-u.s.-polo-assn.-rosa.jpg',
    nombre: 'Playera U.S. Polo Assn. Rosa',
    desc:   'Camiseta cuello redondo en rosa con ribete navy.',
    cat:    'Playera',
    price:  '$400.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/polo-u.s.-polo-assn.-azul-performance.jpg',
    nombre: 'Polo U.S. Polo Assn. Azul Performance',
    desc:   'Polo performance piqué en azul medio.',
    cat:    'Playera',
    price:  '$500.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/polo-u.s.-polo-assn.-azul-petróleo.jpg',
    nombre: 'Polo U.S. Polo Assn. Azul Petróleo',
    desc:   'Polo slim fit en azul petróleo con logo small.',
    cat:    'Playera',
    price:  '$500.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/polo-u.s.-polo-assn.-café.jpg',
    nombre: 'Polo U.S. Polo Assn. Café',
    desc:   'Polo clásico en tono café oscuro.',
    cat:    'Playera',
    price:  '$500.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/polo-u.s.-polo-assn.-mostaza.jpg',
    nombre: 'Polo U.S. Polo Assn. Mostaza',
    desc:   'Polo performance piqué en mostaza vibrante.',
    cat:    'Playera',
    price:  '$500.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/polo-u.s.-polo-assn.-navy-slim.jpg',
    nombre: 'Polo U.S. Polo Assn. Navy Slim',
    desc:   'Polo slim fit navy con logo blanco bordado.',
    cat:    'Playera',
    price:  '$500.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/polo-u.s.-polo-assn.-verde-bosque.jpg',
    nombre: 'Polo U.S. Polo Assn. Verde Bosque',
    desc:   'Polo performance piqué en verde cazador.',
    cat:    'Playera',
    price:  '$500.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/polo-u.s.-polo-assn.-vino.jpg',
    nombre: 'Polo U.S. Polo Assn. Vino',
    desc:   'Polo de piqué luxury feel en vino.',
    cat:    'Playera',
    price:  '$500.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},

// ── Satchel ─────────────────────────────────────────────────

{
    img:    'images/mini-satchel-guess-ivory-corazón.jpg',
    nombre: 'Mini Satchel Guess Ivory Corazón',
    desc:   'Bolsa tipo maletín con dije corazón Guess.',
    cat:    'Satchel',
    price:  '$1,900.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/satchel-juicy-couture-ivory.jpg',
    nombre: 'Satchel Juicy Couture Ivory',
    desc:   'Diseño ajedrezado en relieve con dije llave dorado.',
    cat:    'Satchel',
    price:  '$1,600.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},

// ── Shoulder Bag ─────────────────────────────────────────────────

{
    img:    'images/shoulder-bag-tommy-hilfiger-navy-tejido.jpg',
    nombre: 'Shoulder Bag Tommy Hilfiger Navy Tejido',
    desc:   'Tejido monograma blanco/navy con solapa y asa.',
    cat:    'Shoulder Bag',
    price:  '$1,700.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},

// ── Sudadera ─────────────────────────────────────────────────

{
    img:    'images/bomber-weatherproof-azul-acero.jpg',
    nombre: 'Bomber Weatherproof Azul Acero',
    desc:   'Chamarra bomber reversible en azul y verde olivo.',
    cat:    'Sudadera',
    price:  '$700.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/hoodie-adidas-gris-y-rosa.jpg',
    nombre: 'Hoodie Adidas Gris y Rosa',
    desc:   'Sudadera bicolor gris melange con mangas rosas.',
    cat:    'Sudadera',
    price:  '$600.00',
    genero: 'Dama',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/hoodie-nike-sportswear-olivo.jpg',
    nombre: 'Hoodie Nike Sportswear Olivo',
    desc:   'Sudadera con gráfico tipográfico Nike Sportswear.',
    cat:    'Sudadera',
    price:  '$1,100.00',
    genero: 'Dama',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/hoodie-reebok-arena.jpg',
    nombre: 'Hoodie Reebok Arena',
    desc:   'Sudadera regular fit con logo Reebok blanco.',
    cat:    'Sudadera',
    price:  '$800.00',
    genero: 'PENDIENTE',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/hoodie-reebok-negro-outline.jpg',
    nombre: 'Hoodie Reebok Negro Outline',
    desc:   'Sudadera negra con logo Reebok en contorno blanco.',
    cat:    'Sudadera',
    price:  '$800.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/hoodie-tommy-hilfiger-blanco.jpg',
    nombre: 'Hoodie Tommy Hilfiger Blanco',
    desc:   'Sudadera oversized con letras HILFIGER bordadas.',
    cat:    'Sudadera',
    price:  '$1,100.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/hoodie-tommy-hilfiger-gris.jpg',
    nombre: 'Hoodie Tommy Hilfiger Gris',
    desc:   'Sudadera gris melange con logo Tommy Hilfiger.',
    cat:    'Sudadera',
    price:  '$1,100.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/hoodie-under-armour-vino.jpg',
    nombre: 'Hoodie Under Armour Vino',
    desc:   'Sudadera lisa con logo UA bordado en pecho.',
    cat:    'Sudadera',
    price:  '$800.00',
    genero: 'Caballero',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/sweatshirt-gap-negro-logo.jpg',
    nombre: 'Sweatshirt GAP Negro Logo',
    desc:   'Sudadera negra con logo GAP tono a tono oversized.',
    cat:    'Sudadera',
    price:  '$650.00',
    genero: 'Unisex',
    detalle: 'Talla: PENDIENTE',
},
{
    img:    'images/sweatshirt-gap-verde-esmeralda.jpg',
    nombre: 'Sweatshirt GAP Verde Esmeralda',
    desc:   'Sudadera cuello redondo con logo GAP menta.',
    cat:    'Sudadera',
    price:  '$650.00',
    genero: 'Unisex',
    detalle: 'Talla: PENDIENTE',
},

// ── Tennis ─────────────────────────────────────────────────

{
    img:    'images/tenis-gbg-guess-blanco-candado.jpg',
    nombre: 'Tenis GBG Guess Blanco Candado',
    desc:   'Sneaker blanco con candado dorado lateral.',
    cat:    'Tennis',
    price:  '$1,600.00',
    genero: 'Dama',
    detalle: 'Talla: 23',
},
{
    img:    'images/tenis-levi\'s-navy-canvas.jpg',
    nombre: 'Tenis Levi\'s Navy Canvas',
    desc:   'Sneaker de tela en negro con suela blanca.',
    cat:    'Tennis',
    price:  '$1,000.00',
    genero: 'Caballero',
    detalle: 'Talla: 27.5',
},
{
    img:    'images/tenis-levi\'s-negro-total.jpg',
    nombre: 'Tenis Levi\'s Negro Total',
    desc:   'Sneaker negro monocromático con etiqueta roja.',
    cat:    'Tennis',
    price:  '$1,100.00',
    genero: 'PENDIENTE',
    detalle: 'Talla: 26',
},
{
    img:    'images/tenis-tommy-hilfiger-blanco-rosa.jpg',
    nombre: 'Tenis Tommy Hilfiger Blanco Rosa',
    desc:   'Sneaker clásico con franja y logo TH rosado.',
    cat:    'Tennis',
    price:  '$2,000.00',
    genero: 'Dama',
    detalle: 'Talla: 23',
},

// ── Tote Bag ─────────────────────────────────────────────────

{
    img:    'images/tote-guess-ivory-dorado.jpg',
    nombre: 'Tote Guess Ivory Dorado',
    desc:   'Monograma G fino con franja nude y detalles dorados.',
    cat:    'Tote',
    price:  '$2,500.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/tote-guess-la-grafito.jpg',
    nombre: 'Tote Guess LA Grafito',
    desc:   'Clásica Guess con franja central y candado.',
    cat:    'Tote',
    price:  '$2,500.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/tote-guess-nude-plateado.jpg',
    nombre: 'Tote Guess Nude Plateado',
    desc:   'Elegante con letras Guess en herrajes plateados.',
    cat:    'Tote',
    price:  '$2,500.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/tote-guess-rosa-empolvado.jpg',
    nombre: 'Tote Guess Rosa Empolvado',
    desc:   'Monograma en relieve tono a tono, logo triangular.',
    cat:    'Tote',
    price:  '$2,500.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/tote-steve-madden-hueso.jpg',
    nombre: 'Tote Steve Madden Hueso',
    desc:   'Diseño estructurado con cadena decorativa frontal.',
    cat:    'Tote',
    price:  '$2,400.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/tote-steve-madden-negro-mate.jpg',
    nombre: 'Tote Steve Madden Negro Mate',
    desc:   'Set de dos piezas, cuerpo liso y bolso interior.',
    cat:    'Tote',
    price:  '$2,400.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/tote-steve-madden-negro-relieve.jpg',
    nombre: 'Tote Steve Madden Negro Relieve',
    desc:   'Acabado capitonado con cadena y candado plateados.',
    cat:    'Tote',
    price:  '$2,400.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/tote-tommy-hilfiger-camel.jpg',
    nombre: 'Tote Tommy Hilfiger Camel',
    desc:   'Diseño bicolor camel y blanco, logo dorado.',
    cat:    'Tote',
    price:  '$2,200.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/tote-tommy-hilfiger-negro.jpg',
    nombre: 'Tote Tommy Hilfiger Negro',
    desc:   'Amplia con franja signature rojo-blanco-azul.',
    cat:    'Tote',
    price:  '$2,200.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},

// ── Wallet ─────────────────────────────────────────────────

{
    img:    'images/cartera-guess-negro-charol.jpg',
    nombre: 'Cartera Guess Negro Charol',
    desc:   'Cartera larga negra con logo GUESS plateado.',
    cat:    'Wallet',
    price:  '$1,200.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/set-carteras-ck-y-steve-madden.jpg',
    nombre: 'Set Carteras CK y Steve Madden',
    desc:   'Cartera CK negra y cartera SM café, piel RFID. (Vta x Pza)',
    cat:    'Wallet',
    price:  '$1,100.00',
    genero: 'Caballero',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/set-carteras-guess-rosa-y-crema.jpg',
    nombre: 'Carteras Guess Rosa y Crema',
    desc:   'Cartera larga con monograma G. (Vta por Pza)',
    cat:    'Wallet',
    price:  '$1,000.00',
    genero: 'Dama',
    detalle: 'Medidas: PENDIENTE',
},
{
    img:    'images/set-carteras-tommy-hilfiger-piel.jpg',
    nombre: 'Carteras Tommy Hilfiger Piel',
    desc:   'Cartera de piel con protección RFID. (Vta x Pza)',
    cat:    'Wallet',
    price:  '$1,100.00',
    genero: 'Caballero',
    detalle: 'Medidas: PENDIENTE',
},

];
