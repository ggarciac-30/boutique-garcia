# 🛍️ Boutique Garcia — Sitio Web

Página web de la boutique lista para publicar en **GitHub Pages** (gratis).

---

## 📁 Estructura de archivos

```
boutique-garcia/
├── index.html              ← Página principal
├── css/
│   └── style.css           ← Estilos visuales
├── js/
│   ├── products.js         ← Catálogo de productos (EDITA AQUÍ)
│   └── app.js              ← Lógica de búsqueda y filtros
├── images/                 ← TUS FOTOS DE PRODUCTOS van aquí
│   ├── tote-steve-madden.jpg
│   ├── blusa-tommy-hilfiger.jpg
│   ├── vestido-floral.jpg
│   └── ...
└── README.md
```

> **Regla de nombres:** usa minúsculas, guiones en lugar de espacios, sin acentos.
> ✅ `bolsa-guess-negra.jpg`   ❌ `Bolsa Güess Negra.jpg`

---

## 🚀 Cómo publicar en GitHub Pages

### 1. Crea una cuenta en GitHub
Ve a [github.com](https://github.com) y regístrate gratis.

### 2. Crea un repositorio nuevo
- Clic en **"New repository"**
- Nombre: `boutique-garcia`
- Visibilidad: **Public**
- Clic en **"Create repository"**

### 3. Sube los archivos
En la página del repositorio vacío:
- Clic en **"uploading an existing file"**
- Arrastra **todos los archivos y carpetas** respetando la estructura:
  ```
  index.html
  css/style.css
  js/products.js
  js/app.js
  images/  ← carpeta con todas tus fotos
  ```
- Clic en **"Commit changes"**

### 4. Configura la rama para GitHub Pages
- Ve a **Settings** → **Pages**
- En **Branch** selecciona `main` y carpeta `/ (root)`
- Clic en **Save**

### 5. Tu sitio quedará en:
```
https://TU-USUARIO.github.io/boutique-garcia
```
*(tarda 1–2 minutos en activarse la primera vez)*

---

## 🖼️ Cómo agregar imágenes de productos

### Opción A — Imágenes locales (recomendado)

1. Guarda la foto en la carpeta `images/` con nombre en minúsculas y sin espacios:
   ```
   images/bolsa-guess-negra.jpg
   ```

2. En `js/products.js`, apunta al archivo:
   ```js
   { img: 'images/bolsa-guess-negra.jpg', nombre: 'Bolsa Guess negra', ... }
   ```

3. Sube el archivo a GitHub junto con el proyecto.

---

### Opción B — Imágenes desde Google Drive

1. Sube la imagen a Google Drive
2. Clic derecho → **"Obtener enlace"** → permiso: **"Cualquier persona con el enlace"**
3. Copia el link. Se ve así:
   ```
   https://drive.google.com/file/d/FILE_ID/view
   ```
4. Construye el link directo con el **FILE_ID**:
   ```
   https://drive.google.com/thumbnail?id=FILE_ID&sz=w800
   ```
5. Pégalo en `products.js`:
   ```js
   { img: 'https://drive.google.com/thumbnail?id=FILE_ID&sz=w800', ... }
   ```

> 💡 Usa `sz=w800` para buena calidad sin sacrificar velocidad de carga.

---

## ✏️ Cómo editar un producto

Abre `js/products.js`. Cada producto tiene esta forma:

```js
{
  img:    'images/nombre-del-archivo.jpg',  // ruta local o link de Drive
  nombre: 'Nombre del producto',
  desc:   'Descripción breve de máximo 10 palabras',
  cat:    'Blusas'   // Opciones: Blusas | Vestidos | Conjuntos | Accesorios
},
```

---

## ➕ Agregar un producto nuevo

Al final del array en `js/products.js`, antes del `];`, agrega:

```js
{
  img:    'images/mi-nuevo-producto.jpg',
  nombre: 'Mi nuevo producto',
  desc:   'Descripción breve aquí',
  cat:    'Accesorios',
},
```

---

## 🗑️ Quitar un producto

Borra el bloque `{ ... },` correspondiente en `js/products.js` y elimina la imagen de la carpeta `images/`.

---

## 📞 Cambiar el número de WhatsApp

En `js/app.js`, línea 1:
```js
const WA = 'https://wa.me/5215537949345';
```
Reemplaza el número con el tuyo en formato internacional (52 = México).

---

## 🎨 Ajustar tamaño de imágenes

En `css/style.css`, busca esta variable al inicio:
```css
:root {
  --img-height: 240px;   /* móvil   */
}
@media (min-width: 640px)  { :root { --img-height: 280px; } }  /* tablet  */
@media (min-width: 960px)  { :root { --img-height: 300px; } }  /* desktop */
```
Cambia los valores para hacer las imágenes más altas o más chicas.

---

## 🔧 Rama correcta para GitHub Pages

GitHub Pages debe apuntar a la rama **`main`** (no `master`).

Para verificarlo:
1. Ve a tu repositorio en GitHub
2. **Settings → Pages**
3. Confirma que dice: `Branch: main / (root)`

Si ves `master` en lugar de `main`:
- Ve a **Settings → Branches**
- Renombra `master` → `main`
- Vuelve a **Pages** y selecciona `main`

---

*Boutique Garcia © 2026*
