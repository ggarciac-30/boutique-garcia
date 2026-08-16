# Boutique Garcia

Catálogo digital de ropa y accesorios importados, publicado como sitio
estático (GitHub Pages). Sin backend, sin build — HTML, CSS y JS puros.

## Estructura del proyecto

```
boutique-garcia/
├── index.html              Página única del sitio
├── css/
│   └── style.css           Todos los estilos (paleta, layout, componentes)
├── js/
│   ├── products.js         Catálogo — un objeto por producto
│   ├── discount-rules.js   Reglas de descuento e intereses de meses
│   └── app.js               Render del catálogo, filtros, búsqueda
├── images/                  Fotos de producto + favicon + og-image
└── README.md                 Este archivo
```

## Cómo publicarlo

1. Sube el contenido completo de esta carpeta a la raíz de tu repo de
   GitHub (`ggarciac-30/boutique-garcia`).
2. Activa GitHub Pages en la configuración del repo, apuntando a la
   rama donde subiste esto (normalmente `main`, carpeta raíz `/`).
3. Tu sitio queda en `https://ggarciac-30.github.io/boutique-garcia/`.

Si tu sitio termina viviendo en otra URL, actualiza `og:image` y
`og:url` en el `<head>` de `index.html` — si no coinciden con la URL
real, la miniatura no carga al compartir el link.

## Cómo agregar o editar un producto

Todo vive en `js/products.js`, un objeto por producto:

```js
{
    img:      'images/nombre-del-archivo.jpg',
    nombre:   'Nombre del producto',
    desc:     'Descripción corta.',
    cat:      'Tote',
    price:    '$1,450.00',
    detalle:  'Medidas: 32 x 25 x 14 cm',
    genero:   'Dama',
},
```

| Campo      | Qué hace |
|------------|----------|
| `img`      | Ruta a la foto en `images/`. Usa `'PENDIENTE'` mientras no tengas la imagen — se muestra un placeholder en vez de un ícono roto. |
| `cat`      | Categoría — controla el badge y los filtros. |
| `price`    | Precio de lista (antes de cualquier descuento). Siempre el precio "real" del artículo. |
| `detalle`  | Talla o medidas. Usa `'Talla: PENDIENTE'` o `'Medidas: PENDIENTE'` mientras no lo captures — con `PENDIENTE` la etiqueta no se muestra en el sitio, así nunca publicas un dato a medias. |
| `genero`   | `'Dama'`, `'Caballero'`, `'Unisex'`, o `'PENDIENTE'` (default). Mientras diga `PENDIENTE`, el producto aparece en ambas vistas del interruptor Dama/Caballero — no desaparece por no estar clasificado. |
| `activo`   | Opcional. Agrega `activo: false` para ocultar un producto sin stock, sin borrar su información. Si no lo agregas, se asume activo. |
| `descuento`| Opcional. Número (ej. `62`) para forzar un % de descuento a ESE producto en particular, sin importar las reglas generales. |
| `meses`    | Opcional. Número de meses para mostrar la línea de mensualidades (con intereses, ver abajo). |

## Sistema de precios y descuentos

El precio final que ve el cliente se calcula así, en este orden:

1. Si el producto trae `descuento` (número), se usa ese.
2. Si no, se revisan las reglas de `js/discount-rules.js` en orden —
   se aplica la **primera** que haga match.
3. Si ninguna aplica, se muestra el `price` de lista, sin descuento
   ni badge.

### Reglas activas ahora mismo

```js
// 15% en artículos por arriba de $2,000 (va primero, es más específica)
{ test: function(p) { return parseFloat(p.price.replace(/[^0-9.]/g,'')) > 2000; }, percent: 15 },

// 10% en TODA la tienda (va al final, es la más general)
{ test: function(p) { return true; }, percent: 10 },
```

**El orden importa.** La regla del `return true` siempre hace match,
así que tiene que ir al final — cualquier regla nueva y más
específica que agregues debe ir ANTES de ella, o nunca se va a
alcanzar a evaluar.

### Cómo agregar una regla nueva

Edita el arreglo `DISCOUNT_RULES` en `js/discount-rules.js`:

```js
// Por categoría
{ test: function(p) { return p.cat === 'Sudadera'; }, percent: 20 },

// Por marca (busca texto en el nombre)
{ test: function(p) { return p.nombre.indexOf('Tommy Hilfiger') > -1; }, percent: 15 },

// Combinando condiciones
{ test: function(p) { return p.cat === 'Tote' && p.nombre.indexOf('Guess') > -1; }, percent: 10 },
```

### Mensualidades con intereses

`price-installments` (la línea "X meses de $Y") usa una fórmula real
de amortización, no precio ÷ meses. La tasa mensual que usa está en
la parte de arriba de `js/discount-rules.js`:

```js
var TASA_INTERES_MENSUAL = 0.0322;  // 3.22% mensual ≈ 38.6% anual
```

Cámbiala por tu tasa real (mensual, no anual — si tu tasa anual es
36%, la mensual aproximada es 36/12 = 3.0, es decir `0.03`). Si algún
día quieres ofrecer meses SIN intereses, pon esa variable en `0`.

## Header — marcas destacadas y tagline

En `index.html`, dentro de `<header>`, están:

- `.brand-strip` — la mezcla de 5 marcas de mayor reconocimiento de
  mercado (Nike, Adidas, Levi's, Tommy Hilfiger, Calvin Klein). Es
  texto plano, editable directo en el HTML.
- `.header-tagline` — "Authentic. Stylish. Yours." Mismo trato, texto
  plano.

## Interruptor Dama / Caballero

Es una elección excluyente (siempre hay una posición activa, arranca
en "Dama"). Se combina con el filtro de categoría y la búsqueda. Un
producto aparece en una vista específica solo si su campo `genero`
coincide — mientras esté en `'PENDIENTE'` o `'Unisex'`, aparece en
ambas.

## Imágenes de producto

- Formato de marco: `aspect-ratio: 3/4` con `object-fit: contain` — la
  foto se muestra completa, nunca se recorta.
- Fotos horizontales se detectan solas en tiempo de carga (comparando
  `naturalWidth` vs `naturalHeight`) y usan un marco más corto
  (`4/3`) para no dejar espacio vacío.
- Las 63 fotos en `images/` ya están optimizadas (redimensionadas a
  900px de lado largo, recomprimidas) — de 14.1 MB a 5.8 MB en total.
  Si agregas fotos nuevas, comprímelas de forma similar antes de
  subirlas para no perder esa velocidad de carga.

## WhatsApp

El número de contacto está en dos lugares — cámbialo en ambos si lo
actualizas:
- `js/app.js`, constante `WA` (usado por cada botón "Pedir por
  WhatsApp" de las tarjetas).
- `index.html`, el botón flotante `.wa-float`.
