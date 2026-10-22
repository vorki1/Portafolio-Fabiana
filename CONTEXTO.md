# Contexto del proyecto

## Objetivo
Crear un sitio de presentación breve, minimalista y adaptable para Fabiana Rojas Duarte, psicóloga. El diseño se refina junto al usuario.

## Decisiones confirmadas
- HTML, CSS y JavaScript puro, sin dependencias. Estructura: `index.html`, `styles/styles.css` y `javascript/main.js`.
- Destino previsto: GitHub Pages con rutas relativas. No publicar sin instrucción del usuario.
- Diseño desde cero, sin tomar elementos del portafolio personal del usuario.
- `paleta colores.png` es solo referencia cromática; sus textos y datos no son contenido autorizado.
- Apariencia clara y suave con colores de la paleta. El usuario solicitó reemplazar el fondo completamente blanco por un fondo decorativo global antes de refinar las secciones. Los valores CSS y la tipografía siguen pendientes de aprobación.
- Secciones acordadas, en orden: perfil profesional con fotografía y accesos rápidos; temáticas; público al que se dirige; certificados e informes; reseñas; cierre y contacto.
- Presentación y sobre mí se integran en el perfil.
- La barra de navegación permanece visible al hacer scroll. Se implementó con fondo celeste de la paleta, elegido por el agente para revisión del usuario, y texto oscuro. Los saltos internos compensan su altura real.
- Temáticas responde qué se puede abordar; público responde a quién está dirigida la atención.
- Mostrar por ahora únicamente depresión y ansiedad, según la última indicación del usuario.
- Atención presencial y online, indicada en el formulario consultado.
- El usuario confirma que existen enlaces de WhatsApp, Instagram y una agenda de citas en Google Calendar. Los tres enlaces proporcionados por el usuario están incorporados en el perfil y el cierre; se abren en una nueva pestaña. Se conservó el punto final del usuario de Instagram tal como fue enviado.
- El usuario solicita una plantilla con títulos y textos genéricos, identificando el contenido pendiente.
- Público, certificados e informes, reseñas y cierre definitivo quedan por definir.
- El usuario seleccionó un retrato de Magnific como imagen provisional del perfil. Está guardado en `images/perfil-provisional.jpg`, con recorte 3:4 y aviso visible de que no corresponde a Fabiana. Las imágenes de temáticas e ilustraciones siguen pendientes.

## Fuente consultada
Se leyó la fila 3 de `formulario_servicio_paginas_web`, pestaña `Respuestas de formulario 1`, a petición del usuario. El formulario aporta contexto profesional, preferencias visuales y referencias a recursos. No se han abierto los archivos enlazados. La respuesta «TCC» figura en la pregunta sobre público y «DE TODO» en documentos; ninguna permite completar esas secciones sin aclaración. No copiar datos personales o sensibles a la documentación.

## Forma de trabajo
Implementar incrementos concretos, revisarlos con el usuario en el navegador y mantener actualizada la documentación. El usuario usa Windows y ya abrió la vista previa con Live Server de VS Code; también puede abrir `index.html` directamente. Puede compartir capturas por el chat.

## Pendientes
- Completar la presentación profesional y confirmar los textos definitivos.
- Definir públicos, documentos y sus condiciones, reseñas autorizadas y cierre.
- Recibir el enlace adicional que el usuario dejó para más adelante.
- Comprobar en navegador el acceso a las plataformas externas con los enlaces proporcionados.
- Seleccionar fotografía e imágenes; decidir si usar ilustraciones.
- Revisar visualmente la plantilla en escritorio y celular.
- Configurar GitHub Pages únicamente cuando se solicite.

## Identidad visual
El usuario proporcionó el logo de su clienta y solicitó usar el símbolo sin texto en navbar, perfil e icono de pestaña. El original ya tiene transparencia: se recortó al símbolo visible, se centró en un lienzo cuadrado y se exportó conservando sus colores y trazos. Archivos: images/logo-fabiana.png, images/favicon-32.png, images/favicon.ico y images/apple-touch-icon.png. La fotografía provisional permanece independiente del logo. Se probó una edición con imagegen, pero se descartó para conservar fielmente el original; los recursos finales derivan del archivo original mediante recorte y conversión local.

## Refinamiento visual
El usuario confirmó que el favicon y el logo del navbar ya se ven bien y aprobó la mejora de composición del perfil. El logo del perfil se presenta como sello circular sobre el retrato, sin empujar el título.

La prioridad actual es el fondo de toda la página. Se pudieron visualizar dos referencias de Pinterest (ondas laterales y formas pastel con centro despejado); las referencias de PNGTree y Vecteezy no estuvieron disponibles. Se implementó una propuesta de fondo marfil con transiciones suaves rosa/celeste y ondas laterales mediante un SVG local ligero, sin animación ni dependencias. En celular se acorta la repetición vertical. El usuario valoró positivamente este fondo y pidió conservarlo como candidato A, sin elegirlo aún como definitivo. Se preparó un candidato B con campos de color difuminados rosa, celeste y durazno mediante degradados CSS, sin ondas ni líneas. El usuario pidió una candidata C basada en B con colores más fuertes. C conserva exactamente la composición y adaptación móvil de B, pero intensifica rosa, celeste y durazno mediante variables CSS locales. Se añadió una candidata D (bruma diagonal: bandas amplias rosa/celeste con transiciones suaves), conservada mediante data-fondo="d". A petición del usuario se incorporó un botón flotante provisional para recorrer A, B, C, D y E sin recargar ni cambiar la posición de lectura, con nombre de fondo anunciado de forma accesible. D fue la favorita durante la comparación inicial. Se añadió E (seda pastel), una variación de diagonales paralelas más amplias en rosa y celeste, con luz marfil entre bandas. El usuario eligió mantener E activa por ahora, pendiente de confirmación con su clienta. A, B, C y D y el comparador se conservan sin cambios. Al recargar se vuelve a E. El comparador se oculta si JavaScript no se ejecuta. Retirar la herramienta de revisión cuando se elija el fondo final. La captura del usuario mostró cortes por repetición vertical en E. Se eliminó su repetición y su altura fija tanto en escritorio como en celular: todas sus capas cubren el 100% de la altura del documento en una sola pieza y se adaptan al contenido. La elección final sigue pendiente de la clienta; falta revisar visualmente la corrección en navegador por el agente.

Se retiraron las líneas horizontales superiores de las secciones y del pie tras el comentario del usuario sobre ruido visual. Se mantiene la separación mediante espacio y títulos para integrar el contenido con el fondo continuo. No eran etiquetas br: eran bordes CSS. La barra de navegación conserva su borde inferior.

## Estado actual
La plantilla incluye las seis secciones acordadas, con perfil y presentación unificados. Depresión y ansiedad tienen descripciones provisionales. Los datos pendientes están identificados; los canales de contacto y la agenda tienen los enlaces reales proporcionados por el usuario, con indicación de nueva pestaña. El perfil muestra el retrato provisional seleccionado por el usuario mediante una ruta local relativa; se reemplazará por la fotografía definitiva. No hay reseñas inventadas. JavaScript actualiza el año del pie. El agente no ha realizado revisión visual en navegador.
