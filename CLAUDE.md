# Web de Alexandra · alexandranutri.com

## Con quién trabajas

Trabajas con **Alexandra Ivanova**, dietista-nutricionista y dueña de esta web. **No es técnica.**

- Háblale siempre en **español**, con frases cortas y sin jerga. Si tienes que usar un término técnico, explícalo en media frase.
- Hazlo todo tú: no le pidas que edite archivos ni que escriba comandos. Si hace falta algo de su parte (iniciar sesión en el navegador, aceptar un email), guíala paso a paso.
- Antes de actuar, dile en una frase qué vas a hacer. Al terminar, dile qué ha cambiado y cómo comprobarlo.
- **No le pidas nunca contraseñas ni códigos.** Los inicios de sesión se hacen en el navegador (`gh auth login`, paneles web).
- `GUIA_ALEXANDRA.md` es su guía: explica cómo funciona todo y cómo se hizo el traspaso. Si te pregunta por un paso de esa guía, léela y ayúdala con ese paso.

## Cómo funciona

- Es una web **estática** hecha con **Astro 5, Tailwind y Alpine.js**. No tiene servidor propio, base de datos ni variables de entorno.
- **GitHub** guarda el código, en la rama `main`. **Vercel** publica automáticamente cada `push` a `main` y tarda 1 o 2 minutos. Si el build falla, Vercel mantiene la versión anterior.
- El dominio está en **Porkbun**, que también gestiona el DNS. Ese DNS apunta la web a Vercel y el correo a Google Workspace.
- Las reservas y los cobros funcionan con **Google Calendar y Stripe**, fuera del código. Consulta `BOOKING_SETUP.md`.
- La web tiene dos idiomas: el **español** es el idioma por defecto y no lleva prefijo (`/`), y el **inglés** cuelga de `/en/`.

## Al empezar cada sesión

1. Ejecuta `git status`. Si hay cambios sin guardar, explícale qué son antes de seguir.
2. Ejecuta `git pull` para traer la última versión.
3. Si no existe `node_modules`, ejecuta `npm install`.

## Flujo para cualquier cambio

1. **Haz el cambio.** Todo texto visible existe en español y en inglés, así que **cambia los dos**. Si ella solo te da el texto en español, tradúcelo tú y enséñale la traducción.
2. **Enséñaselo.** Arranca `npm run dev` en segundo plano y dile que abra `http://localhost:4321`, indicando la página concreta (y su versión en `/en/` si aplica).
3. **Compruébalo.** Antes de publicar, `npm run build` tiene que terminar sin errores.
4. **Publica solo cuando ella diga que sí.** Haz commit con un mensaje en español que describa el cambio y después `git push` a `main`. Dile que en 1 o 2 minutos estará en www.alexandranutri.com.
5. **Para deshacer** usa `git revert` y publícalo. **Nunca** uses `push --force` ni `reset --hard` en `main`, ni reescribas el historial.

## Dónde está cada cosa

| Qué | Dónde |
| --- | --- |
| Textos de la web (titulares, botones, portada, FAQ…) | `src/i18n/ui.ts`, con un bloque `en` y otro `es` |
| WhatsApp y teléfono | `src/config/contact.ts` |
| Enlace del calendario de reservas y precio de la valoración inicial | `src/config/booking.ts` |
| Precios de los servicios | `src/components/pricing/PricingTable.astro` y algunos textos de `src/i18n/ui.ts` (busca `€`) |
| Artículos del blog | `src/pages/blog/posts/*.md` (español) y `src/pages/en/blog/posts/*.md` (inglés). Copia el frontmatter de un artículo existente. |
| Fotos | `public/assets/`; las del blog van en `public/assets/blog/` |
| Páginas | `src/pages/` (español) y `src/pages/en/` (inglés) |
| Cabecera, pie y botón flotante de contacto | `src/components/layout/` |
| SEO y datos estructurados | `src/layouts/Layout.astro` |

**Fotos:** antes de añadirlas, optimízalas a un ancho máximo de unos 2000 px, en `.webp` si es posible, y procura que pesen menos de 300 KB. Ponles siempre un texto `alt` descriptivo en los dos idiomas.

**Diseño:** para cambios visuales, sigue los principios de `AGENTS.md` y respeta el estilo que ya tiene la web: tipografías, colores y espaciados.

## Cosas delicadas: avisa del riesgo y pide confirmación antes

- **DNS en Porkbun.** Los registros MX y TXT hacen funcionar su correo. No se borran nunca.
- **`vercel.json`.** Contiene las redirecciones de idioma.
- **`astro.config.mjs`.** Contiene la URL del sitio y la configuración de idiomas.
- **Borrar o renombrar páginas.** Rompe los enlaces que ya tiene Google, así que añade una redirección en `vercel.json`.
- **Cambiar precios.** Recuérdale que también tiene que cambiarlos en Google Calendar, que es donde se cobra (ver `BOOKING_SETUP.md`). Si no, la web y el cobro no coincidirán.
- **Cambiar el enlace de reservas** (`src/config/booking.ts`).

## Problemas conocidos

- El formulario de `/contact` (`src/components/contact/ContactForm.astro`) envía a `/api/register`, pero ese endpoint no existe porque la web es estática, así que **los mensajes del formulario no llegan a ningún sitio**. Mientras no se arregle, la vía de contacto real es WhatsApp.

## Si algo falla

- Si el build falla en Vercel, la web anterior sigue publicada. Reproduce el error con `npm run build`, corrígelo y vuelve a publicar.
- Si hace falta volver atrás de inmediato: en Vercel, ve al proyecto → **Deployments**, abre la versión anterior → **⋯** → **Instant Rollback**.
