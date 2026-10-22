# Portafolio de Fabiana Rojas Duarte

Sitio de presentación para Fabiana Rojas Duarte, psicóloga. Desarrollado con HTML, CSS y JavaScript puro, con un diseño minimalista y adaptable a distintos tamaños de pantalla.

## Estado
Plantilla con seis secciones: perfil profesional y presentación, temáticas (depresión y ansiedad), público, certificados e informes, reseñas y cierre con contacto. Los textos y el diseño son provisionales. El público, los documentos, las reseñas y el cierre definitivo están por definir. El perfil y el cierre incluyen enlaces a WhatsApp, Instagram y la agenda de Google Calendar, que se abren en una nueva pestaña. La navegación permanece visible al desplazarse y tiene fondo celeste de la paleta. El perfil usa una fotografía de ejemplo identificada como provisional; las imágenes de temáticas siguen pendientes. Las secciones y el pie se separan mediante espacio, sin líneas horizontales sobre el fondo. No requiere instalación ni dependencias externas.

## Archivos actuales
- `index.html`: estructura y contenido de la página.
- `images/icon-calendar.svg`, `images/icon-whatsapp.svg` e `images/icon-instagram.svg`: iconos locales de los enlaces de agenda y redes, en perfil y contacto.
- `images/logo-fabiana.png`: símbolo de la marca sin texto, cuadrado y transparente; se usa en el navbar y como sello sobre el retrato del perfil.
- `images/favicon.ico`, `images/favicon-32.png` y `images/apple-touch-icon.png`: iconos de pestaña y acceso directo.
- `images/perfil-provisional.jpg`: retrato de ejemplo seleccionado por el usuario, pendiente de reemplazar por la fotografía de Fabiana.
- `styles/styles.css`: paleta, fondo global con degradados, estilos y adaptación a celulares.
- `images/fondo-organico.svg`: ondas laterales pastel del fondo; se repiten verticalmente y mantienen despejado el centro.
- `javascript/main.js`: actualización del año, ajuste del desplazamiento según la barra de navegación y comparador provisional de fondos.
- `AGENTS.md`: instrucciones de colaboración, desarrollo y mantenimiento de documentación.
- `CONTEXTO.md`: objetivo, decisiones confirmadas, propuestas y pendientes.
- `README.md`: orientación e instrucciones de uso del proyecto.
- `paleta colores.png`: referencia visual de colores; su contenido no se usará como información del sitio.

## Desarrollo y vista previa
Abre `index.html` directamente en tu navegador. Después de guardar cambios en los archivos, actualiza la página para verlos. La plantilla usa rutas relativas y no necesita un servidor para sus funciones actuales.

Para recarga automática, abrir la carpeta en VS Code y usar **Open with Live Server** sobre `index.html` con la extensión Live Server de Ritwick Dey. El usuario ya abrió la vista previa siguiendo este flujo.

El flujo previsto es revisar cambios en el navegador y compartir comentarios o capturas en la conversación con Codex. Las imágenes también pueden guardarse en la carpeta del proyecto indicando su nombre al agente.

## Continuar el trabajo
El destino previsto de publicación es GitHub Pages. `index.html` está en la raíz y los recursos usan rutas relativas. El despliegue todavía no está configurado.

Al iniciar una nueva conversación en este proyecto, pedir al agente que revise `AGENTS.md` y `CONTEXTO.md` para retomar el estado documentado. La documentación se actualizará junto con las decisiones y cambios relevantes.




Para cambiar el retrato, reemplaza la imagen en images/ y actualiza en index.html su ruta, dimensiones y texto alternativo. Retira el aviso provisional cuando se incorpore la fotografía definitiva.





## Fondos candidatos
El botón flotante «Cambiar fondo» recorre A (ondas pastel), B (nubes suaves), C (nubes intensas), D (bruma diagonal) y E (seda pastel, elegida provisionalmente por el usuario). El nombre aparece sobre el botón. Se puede activar con teclado, sin recargar ni perder la posición de lectura. Al recargar se vuelve a E, indicada por `data-fondo="e"` en `body`. E cubre toda la altura del documento sin repetirse, tanto en escritorio como en celular, para evitar cortes entre bloques. Las cinco propuestas se conservan en CSS. El comparador es una herramienta provisional de revisión y debe retirarse cuando se elija el fondo definitivo. Sin JavaScript se muestra E y el comparador permanece oculto.
