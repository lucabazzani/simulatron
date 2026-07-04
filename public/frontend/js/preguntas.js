/**
 * BASE DE DATOS DE PREGUNTAS - SIMULACRO ISPC
 * Estructura: 240 preguntas totales
 * Niveles: 1 (Junior), 2 (Mid), 3 (Senior)
 * Temas: 'html', 'css', 'bootstrap', 'mix'
 */

export const bancoPreguntas = [
  // ==========================================
  // NIVEL 1 - HTML (Junior)
  // ==========================================
  {
    nivel: 1,
    tema: "html",
    pregunta: "¿Quién creó y puso a prueba el lenguaje HTML originalmente?",
    opciones: [
      "Håkon Wium Lie",
      "Tim Berners-Lee",
      "Bert Bos",
      "Ivana Soledad Rojas",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta: "¿Qué significa HTML según la documentación?",
    opciones: [
      "Hypertext Manual Language",
      "High Text Markup Language",
      "HyperText Markup Language",
      "Hyperlinks and Text Management",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "Según el apunte, ¿en qué año comenzó a utilizarse el HTML como lenguaje de marcado?",
    opciones: ["1989", "1996", "1991", "2011"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "Según las reglas gramaticales, ¿cuál es la extensión que debe tener un archivo web?",
    opciones: [".web", ".xml", ".txt", ".html"],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Qué etiqueta indica al navegador que el archivo es efectivamente una página HTML5?",
    opciones: ["<html>", "<!DOCTYPE html>", "<body>", "<head>"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta: "¿Cuál es la función principal de la etiqueta <head>?",
    opciones: [
      "Mostrar el contenido visual en pantalla",
      "Contener la información lógica de la página (título, codificación)",
      "Crear encabezados de nivel 1",
      "Insertar imágenes",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Qué etiqueta de meta-información define los caracteres especiales (acentos, tildes)?",
    opciones: [
      "<meta charset='utf-8'>",
      "<meta name='viewport'>",
      "<meta keywords>",
      "<title>",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Cuál es la forma correcta de insertar un comentario en HTML según el material?",
    opciones: [
      "/* Comentario */",
      "// Comentario",
      "<!-- Comentario -->",
      "# Comentario",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta: "¿Cuántos niveles de títulos (headers) ofrece HTML?",
    opciones: ["3 niveles", "12 niveles", "10 niveles", "6 niveles"],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Cuál es la etiqueta recomendada para un 'título muy importante'?",
    opciones: ["<important>", "<h1>", "<h6>", "<header>"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta: "¿Cómo se definen los elementos en una lista NO ordenada?",
    opciones: ["<ul> y <li>", "<ol> y <li>", "<list> y <item>", "<u> y <l>"],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Qué etiqueta permite resaltar visualmente una parte del texto sin considerar necesariamente su importancia?",
    opciones: ["<strong>", "<em>", "<mark>", "<b>"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Qué atributo obligatorio de <img> describe la imagen para personas con discapacidad visual?",
    opciones: ["src", "title", "alt", "link"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta: "¿Qué etiqueta define el comienzo de una fila en una tabla?",
    opciones: ["<td>", "<th>", "<tr>", "<table>"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Qué atributo de formulario especifica a qué página se envían los datos para ser procesados?",
    opciones: ["method", "name", "action", "submit"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "En un formulario, ¿qué valor de 'method' envía los datos de forma oculta y permite mucha información?",
    opciones: ["get", "post", "send", "hidden"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Qué elemento HTML5 semántico define contenido autónomo e independiente (como un post de blog)?",
    opciones: ["<section>", "<article>", "<aside>", "<header>"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta: "¿Cuál es la etiqueta correcta para insertar un pie de página?",
    opciones: ["<bottom>", "<end>", "<footer>", "<nav>"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta: "¿Qué etiqueta agrupa un gráfico/imagen y su leyenda?",
    opciones: ["<image-box>", "<figcaption>", "<aside>", "<figure>"],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "html",
    pregunta:
      "¿Cuál es la principal ventaja del HTML semántico según el material?",
    opciones: [
      "Poner colores",
      "Ayuda a que motores de búsqueda identifiquen contenido",
      "Hacer la página más rápida",
      "Aceptar comandos de JavaScript",
    ],
    correcta: 1,
  },

  // ==========================================
  // NIVEL 1 - CSS (Junior)
  // ==========================================
  {
    nivel: 1,
    tema: "css",
    pregunta: "¿Qué propuso el W3C a mediados de los 90 para HTML?",
    opciones: [
      "Un nuevo navegador",
      "Lenguaje de hojas de estilo específico",
      "Un buscador web",
      "Servidores Apache",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Cuáles fueron las dos propuestas que se unieron para formar el CSS actual?",
    opciones: ["HTML y XML", "CHSS y SSP", "Bootstrap y SASS", "JS y CSS"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿En qué año se publicó la primera recomendación oficial 'CSS Nivel 1'?",
    opciones: ["1991", "1995", "1996", "2012"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Qué nombre recibe el elemento de la sintaxis CSS que indica el componente HTML a modificar?",
    opciones: ["Propiedad", "Valor", "Selector", "Declaración"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "En la regla 'h1 { color: black; }', ¿qué representa la palabra 'color'?",
    opciones: ["Selector", "Valor", "Propiedad", "Unidad"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta: "¿Cómo se llama el selector representado por el asterisco (*)?",
    opciones: [
      "Selector de tipo",
      "Selector Universal",
      "Selector Global",
      "Selector Invisible",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Qué carácter se utiliza como prefijo para referenciar un selector de Clase (Class)?",
    opciones: ["# (almohadilla)", ": (dos puntos)", ". (punto)", "/ (barra)"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta: "¿Cuál es el prefijo obligatorio para un selector de ID?",
    opciones: ["# (almohadilla)", ". (punto)", "* (asterisco)", "@ (arroba)"],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Qué símbolo se utiliza para indicar un selector de hijo directo (Selectores avanzados)?",
    opciones: ["Espacio simple", "+ (más)", "> (signo mayor)", "~ (tilde)"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Cómo se llama el concepto donde los descendientes heredan valores de sus padres?",
    opciones: ["Copia", "Cascada", "Herencia", "Importación"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Cuál es el método de inserción de CSS 'menos recomendado' según el apunte?",
    opciones: [
      "Hojas externas",
      "Hojas internas",
      "Hojas en línea (inline)",
      "Mediante @import",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿En qué sección del documento HTML se declaran las hojas de estilo internas con <style>?",
    opciones: ["<body>", "<footer>", "<head>", "<div>"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Qué etiqueta se utiliza para enlazar una hoja de estilo EXTERNA?",
    opciones: ["<href>", "<css>", "<link>", "<style>"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Cuál de los siguientes es el atributo que indica la relación en <link>?",
    opciones: ["href", "type", "rel='stylesheet'", "media"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Cuál de estos métodos de inserción tiene la mayor prioridad según la cascada?",
    opciones: [
      "Defecto navegador",
      "Hojas externas",
      "Estilo en línea (inline)",
      "Hojas internas",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Cuál de estas unidades de medida es RELATIVA respecto de la pantalla del usuario?",
    opciones: ["px", "in", "cm", "mm"],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta: "La unidad de medida 'em' es relativa respecto a:",
    opciones: [
      "Ancho de pantalla",
      "La altura de la letra X",
      "El tamaño de letra empleado",
      "La resolución de pantalla",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿De cuántas columnas se compone la vista de cuadrícula (grid-view) estándar?",
    opciones: ["4 columnas", "8 columnas", "12 columnas", "24 columnas"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Qué técnica permite aplicar estilos según condiciones como el ancho de ventana?",
    opciones: [
      "Cascada avanzada",
      "Responsive Script",
      "@media (Media Query)",
      "Bootstrap Rules",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "css",
    pregunta:
      "¿Cómo se llama la zona visible para el usuario que varía según el dispositivo?",
    opciones: ["Window view", "Canvas", "Screen box", "Viewport"],
    correcta: 3,
  },

  // ==========================================
  // NIVEL 1 - BOOTSTRAP (Junior)
  // ==========================================
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Quiénes desarrollaron originalmente Bootstrap dentro de Twitter?",
    opciones: [
      "Tim Berners-Lee y Bert Bos",
      "Mark Otto y Jacob Thornton",
      "Ivana Rojas y Jeremías Lopez",
      "Håkon Wium Lie",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Qué nombre de versión sigue el esquema 'Principal.Menor.Parche'?",
    opciones: [
      "Versionado Lógico",
      "Estructura Web",
      "Versionado Semántico",
      "Evolución de Software",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta: "En la versión v5.0.1, ¿qué representa el número final (1)?",
    opciones: [
      "Un cambio mayor incompatible",
      "Nueva funcionalidad compatible",
      "Corrección de errores (Parche)",
      "El nivel de diseño",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿En qué etiqueta HTML debe incluirse preferentemente el archivo CSS de Bootstrap?",
    opciones: [
      "Al final del <body>",
      "Dentro de <head>",
      "Dentro de <nav>",
      "Al final de la página",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "Según el apunte, ¿dónde deben incluirse preferentemente los archivos JS de Bootstrap?",
    opciones: [
      "En el <head>",
      "Al inicio del <body>",
      "Al final del <body>",
      "Dentro de un <footer>",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta: "¿Qué significa CDN en el contexto de instalación de Bootstrap?",
    opciones: [
      "Content Development Node",
      "Code Delivery Net",
      "Red de Distribución de Contenido (Content Delivery Network)",
      "Common Data Network",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Cuál es el contenedor que ocupa el 100% de la anchura en todos los puntos de interrupción?",
    opciones: [
      ".container-all",
      ".container",
      ".container-fluid",
      ".full-width",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿En cuántas columnas se divide el sistema de grilla (Grid) de Bootstrap?",
    opciones: ["6 columnas", "10 columnas", "12 columnas", "24 columnas"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "Para crear columnas de ancho automático en una fila, ¿qué clase se debe utilizar?",
    opciones: [".column", ".col", ".row-auto", ".grid-item"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Cuál es el prefijo de clase para el punto de interrupción 'Grande' (≥992px)?",
    opciones: [".col-sm-", ".col-md-", ".col-lg-", ".col-xl-"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Qué clase hace que una imagen sea responsiva, limitando su ancho al 100%?",
    opciones: [".img-responsive", ".responsive-img", ".img-fluid", ".img-fit"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Qué etiqueta HTML5 es recomendada al usar imágenes con texto relacionado en Bootstrap?",
    opciones: ["<div>", "<figure>", "<image-text>", "<box>"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "Para que una tabla tenga el estilo base de Bootstrap, ¿qué clase es imprescindible añadir?",
    opciones: [
      ".table-styled",
      ".table-bootstrap",
      ".table",
      ".tab-responsive",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "En los controles de formulario, ¿cuál es la clase base para etiquetas <label>?",
    opciones: [".label-form", ".form-label", ".text-label", ".input-label"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Qué clase se usa para crear el botón principal (color azul por defecto) en Bootstrap?",
    opciones: [".btn-blue", ".btn-primary", ".btn-first", ".btn-main"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Cuál es el nombre de la clase para mostrar mensajes de retroalimentación de tipo 'Peligro' (Rojo)?",
    opciones: [".alert-red", ".alert-error", ".alert-danger", ".alert-warning"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "La clase base obligatoria para comenzar una barra de navegación es:",
    opciones: [".nav", ".menu", ".navbar", ".navigation"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "¿Qué clase de utilidad se utiliza para agregar un margen inferior en el eje Y?",
    opciones: [".margen-b-", ".mb-", ".p-bottom-", ".m-bottom-"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "En las utilidades de color, ¿cuál corresponde al color semántico del éxito (verde)?",
    opciones: [".text-green", ".text-positive", ".text-success", ".text-ok"],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "bootstrap",
    pregunta:
      "Para ocultar un elemento en todos los tamaños de pantalla, ¿qué clase se usa?",
    opciones: [".invisible", ".d-none", ".hide-all", ".display-none"],
    correcta: 1,
  },

  // ==========================================
  // NIVEL 1 - MIX (HTML + CSS + Bootstrap Junior)
  // ==========================================
  {
    nivel: 1,
    tema: "mix",
    pregunta:
      "¿Qué combinación permite un mejor SEO y accesibilidad en un sitio con Bootstrap?",
    opciones: [
      "Usar solo divs con clases",
      "Usar etiquetas semánticas HTML5 con clases de Bootstrap",
      "Ignorar las etiquetas HTML y usar IDs CSS",
      "No usar contenedores",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "mix",
    pregunta:
      "Si en HTML defino <nav> y en CSS aplico color rojo al elemento, pero luego aplico la clase .bg-primary de Bootstrap, ¿qué domina?",
    opciones: [
      "El color rojo del CSS",
      "El azul de la clase .bg-primary (Bootstrap)",
      "Se mezclan y dan púrpura",
      "La etiqueta <nav>",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "mix",
    pregunta:
      "¿Cuál es el flujo de trabajo estándar propuesto por los apuntes?",
    opciones: [
      "Escribir lógica JS y luego CSS",
      "Maquetar con HTML5, dar estilo con CSS base y usar Bootstrap para componentes y respuesta",
      "Empezar por el Bootstrap y al final el HTML",
      "CSS interno domina siempre al externo",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "mix",
    pregunta:
      "¿Qué sucede si no incluimos el meta tag 'viewport' al usar Bootstrap?",
    opciones: [
      "La página no carga",
      "Bootstrap se bloquea",
      "El diseño responsivo no funcionará correctamente en dispositivos móviles",
      "El texto desaparece",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "mix",
    pregunta:
      "¿Cuál de estas opciones representa la herencia en un formulario Bootstrap?",
    opciones: [
      "El <input> hereda el ancho de su contenedor .row o .col",
      "El <button> hereda el título de la página",
      "Las clases heredan de las etiquetas ID",
      "El label se copia solo",
    ],
    correcta: 0,
  },

  // ==========================================
  // NIVEL 2 - HTML (Semi-Senior)
  // ==========================================
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "En una tabla compleja, si queremos que una celda ocupe 3 columnas de ancho, ¿qué atributo aplicamos a <td>?",
    opciones: ["rowspan='3'", "cols='3'", "colspan='3'", "grid-column='3'"],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "Según el orden recomendado para tablas estructuradas, ¿cuál es la secuencia correcta de etiquetas?",
    opciones: [
      "thead, tbody, tfoot",
      "thead, tfoot, tbody",
      "caption, head, body, foot",
      "header, main, footer",
    ],
    correcta: 1, // Nota: El PDF menciona que es recomendable thead, tfoot y al final tbody (Pág 26, PDF 01)
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "¿Qué sucede si aplicamos el atributo 'required' a un input de un formulario?",
    opciones: [
      "El campo se rellena solo",
      "El navegador impide enviar el formulario si el campo está vacío",
      "El campo solo acepta números",
      "El campo cambia de color a rojo automáticamente",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "¿Cuál es el objetivo del atributo 'autofocus' en un campo de entrada?",
    opciones: [
      "Hacer que el texto se vea más grande",
      "Poner el cursor automáticamente en ese campo al cargar la página",
      "Verificar que el email sea válido",
      "Zoom automático en móviles",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "Si usamos <input type='number' min='0' max='10' step='2'>, ¿cuál de estos valores sería INVÁLIDO según el step?",
    opciones: ["0", "2", "3", "4"],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "Para agrupar varias etiquetas <option> dentro de una lista desplegable y organizarlas por categorías, ¿qué etiqueta usamos?",
    opciones: ["<group>", "<optgroup>", "<selection>", "<category>"],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "¿Qué etiqueta de HTML5 representa una sección que solo está indirectamente relacionada con el contenido principal (ej. barras laterales)?",
    opciones: ["<section>", "<article>", "<aside>", "<nav>"],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "¿Qué diferencia existe entre <article> y <section> según el material?",
    opciones: [
      "No hay diferencia",
      "Article es para contenido autónomo/independiente, Section es una agrupación temática",
      "Section siempre va dentro de Article",
      "Article solo sirve para periódicos",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "Dentro de una etiqueta <footer>, ¿qué elementos se recomienda incluir según la documentación?",
    opciones: [
      "Videos y Audios",
      "Información de autoría, contacto y mapas del sitio",
      "Solo el logo de la empresa",
      "Menús desplegables principales",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "¿Es válido tener más de un elemento <header> en un mismo documento HTML5?",
    opciones: [
      "No, solo uno por página",
      "Sí, pero no pueden estar anidados dentro de otro footer o address",
      "Sí, uno para cada etiqueta <div>",
      "No, HTML5 solo permite uno en el body",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "En un formulario, ¿cuál es la principal diferencia técnica entre el método 'get' y 'post'?",
    opciones: [
      "Get permite enviar archivos pesados y Post no",
      "Get muestra los datos en la URL y Post los envía de forma invisible",
      "Post es más rápido que Get en todos los navegadores",
      "Get se usa solo para contraseñas y Post para búsquedas",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "Según el material, ¿qué ventaja técnica ofrece colocar el <tfoot> antes del <tbody> en el código de una tabla?",
    opciones: [
      "Hace que la tabla sea automáticamente responsiva",
      "Permite que el navegador renderice el pie de página antes de procesar miles de filas de datos",
      "Es obligatorio para que funcionen las uniones de celdas con colspan",
      "Ninguna, es solo una preferencia estética del programador",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "Para vincular correctamente una etiqueta <label> con su respectivo <input> por accesibilidad, se debe usar:",
    opciones: [
      "El atributo 'name' en ambos elementos",
      "El atributo 'id' en el input coincidiendo con el atributo 'for' en la label",
      "Cualquier clase de CSS que sea igual",
      "Un comentario HTML que los mencione a ambos",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "¿Cuál es el concepto correcto de la etiqueta <strong> según la semántica moderna?",
    opciones: [
      "Solo sirve para que el texto se vea en negrita",
      "Indica que el texto tiene una importancia fuerte o urgencia",
      "Se usa exclusivamente para títulos de nivel 1",
      "Es una etiqueta obsoleta que debe reemplazarse por CSS",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "¿Qué sucede con el contenido de una etiqueta <textarea> que se escribe entre la apertura y el cierre?",
    opciones: [
      "Se ignora por completo",
      "Aparece como texto predeterminado dentro del cuadro",
      "Se convierte en el ID del elemento",
      "Solo se puede ver si se usa el método POST",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "En el anidamiento de etiquetas, si abrimos un párrafo y luego un énfasis, ¿cuál es el orden correcto de cierre?",
    opciones: [
      "El primero en abrir debe ser el primero en cerrar",
      "No importa el orden mientras todas tengan su par",
      "El último elemento en abrir debe ser el primero en cerrar",
      "Solo se cierran las etiquetas al final del body",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta: "¿Qué describe mejor el propósito de la etiqueta <figure>?",
    opciones: [
      "Agrupa contenido ilustrativo y permite una leyenda independiente a través de figcaption",
      "Se utiliza para dibujar formas geométricas en la pantalla",
      "Es el contenedor principal de los formularios de contacto",
      "Sustituye a la etiqueta <img> en HTML5",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "Al definir una imagen, ¿por qué es crítico completar el atributo 'alt'?",
    opciones: [
      "Para que la imagen cargue más rápido",
      "Por accesibilidad (lectores de pantalla) y SEO si la imagen no carga",
      "Para definir el tamaño de la imagen en píxeles",
      "Para que el borde sea redondeado",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "Si una entrada de formulario requiere que el usuario solo elija una opción de un grupo de botones circulares, se debe usar:",
    opciones: [
      "checkbox",
      "selection-list",
      "radio (compartiendo el mismo atributo 'name')",
      "text-input con autofocus",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "html",
    pregunta:
      "¿Qué caracteriza al elemento semántico <aside> según la definición de los apuntes?",
    opciones: [
      "Es el pie de página obligatorio de la sección central",
      "Representa contenido relacionado indirectamente con el artículo principal (como barras laterales)",
      "Es la etiqueta para poner música de fondo en la web",
      "Se usa para marcar los enlaces que ya han sido visitados",
    ],
    correcta: 1,
  },
  // ==========================================
  // NIVEL 2 - CSS (Semi-Senior)
  // ==========================================
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "En el Modelo de Cajas, ¿cuál es el orden correcto de capas de afuera hacia adentro?",
    opciones: [
      "Padding, Border, Margin, Content",
      "Margin, Border, Padding, Content",
      "Content, Padding, Border, Margin",
      "Border, Margin, Padding, Content",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "Si una caja tiene width: 300px, padding: 20px y border: 5px, ¿cuál es su ancho TOTAL real en el navegador?",
    opciones: ["300px", "325px", "350px", "345px"],
    correcta: 2, // 300 + 20(izq) + 20(der) + 5(izq) + 5(der) = 350px
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "¿Cuál es la diferencia entre el selector 'p span' y el selector 'p > span'?",
    opciones: [
      "No hay diferencia",
      "El primero selecciona todos los span dentro de p, el segundo solo hijos directos",
      "El segundo selecciona span que estén antes que p",
      "El primero es solo para CSS3",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "¿Qué prioridad (especificidad) tiene el selector '#id .clase' frente a 'header p'?",
    opciones: [
      "El ID con Clase siempre tiene más prioridad",
      "Tienen la misma prioridad",
      "Gana header p por ser etiquetas semánticas",
      "Depende del orden de escritura",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "¿Qué propiedad se usa para resetear el comportamiento de márgenes dobles en tablas?",
    opciones: [
      "margin-collapse",
      "border-collapse",
      "table-reset",
      "padding: 0",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "Las medidas 'pt', 'pc' y 'in' se consideran según la documentación como:",
    opciones: [
      "Unidades relativas",
      "Unidades absolutas",
      "Unidades responsivas",
      "Unidades de pantalla",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "Según el 'Orden de prioridad', ¿qué selector es el que tiene el valor más bajo de la lista?",
    opciones: [
      "Estilo en línea",
      "Selector de ID",
      "Selector Universal (*)",
      "Selector de clase",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta: "¿Para qué sirve el atributo 'initial-scale=1.0' en el Viewport?",
    opciones: [
      "Para que la página cargue más rápido",
      "Establece el nivel de zoom inicial al cargar por primera vez",
      "Fija el ancho a 1000px",
      "No tiene utilidad real",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "Si usamos la propiedad 'margin: 10px 20px 30px 40px;', ¿cuál es el margen izquierdo?",
    opciones: ["10px", "20px", "30px", "40px"],
    correcta: 3, // Top Right Bottom Left (40px es Left)
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "¿Cuál de estos componentes NO admite márgenes verticales (top/bottom) si se trata de elementos en línea?",
    opciones: ["Div", "Imágenes", "H1", "Span (sin display block)"],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "¿Quiénes fueron los dos investigadores que unieron sus propuestas para definir el lenguaje CSS a mediados de los 90?",
    opciones: [
      "Tim Berners-Lee y Mark Otto",
      "Håkon Wium Lie y Bert Bos",
      "Brendan Eich y Winston Royce",
      "John Resig y Barry Boehm",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "Según la documentación, ¿cuál fue el motivo principal de la creación de un estándar para definir los estilos?",
    opciones: [
      "Hacer que el código fuera más colorido",
      "La dificultad de crear documentos con la misma apariencia en diferentes navegadores",
      "Eliminar el uso de etiquetas de texto en HTML",
      "Permitir que las páginas web se impriman en papel",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "¿Qué indica la condición fundamental de un 'Selector Descendente' según el material?",
    opciones: [
      "Un elemento debe ser hijo directo del otro",
      "Un elemento debe estar dentro de otro, sin importar el nivel de profundidad",
      "Los dos elementos deben tener la misma clase",
      "El selector solo funciona si el elemento es una etiqueta de párrafo",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "Si queremos aplicar varios estilos a la vez sobre un mismo elemento HTML mediante el atributo class, la sintaxis correcta es:",
    opciones: [
      "class='estilo1-estilo2'",
      "class='estilo1, estilo2'",
      "class='estilo1 estilo2' (separados por un espacio en blanco)",
      "class='estilo1' class='estilo2'",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "¿A qué se refiere la 'cascada de prioridades' cuando hay conflictos de estilos?",
    opciones: [
      "A que el estilo con el color más oscuro siempre gana",
      "A un orden de jerarquía donde el estilo en línea es el que tiene mayor prioridad",
      "A que el navegador ignora todos los estilos internos",
      "A que las hojas externas anulan los estilos locales del usuario",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta: "La unidad de medida 'ex' es relativa respecto a:",
    opciones: [
      "El tamaño de la ventana del navegador",
      "La altura de la letra 'x' del tipo de letra utilizado",
      "La resolución total de la pantalla",
      "El ancho del elemento padre",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "Dentro del Modelo de Cajas, ¿qué propiedad define el espacio libre OPCIONAL entre el contenido y el borde?",
    opciones: [
      "Margin (Margen)",
      "Outline (Contorno)",
      "Padding (Relleno)",
      "Shadow (Sombra)",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "¿Qué sucede con la anchura (width) de un elemento si el valor asignado es 'auto'?",
    opciones: [
      "El elemento desaparece",
      "El navegador la determina según el tipo de elemento (bloque/línea) y el espacio disponible",
      "La anchura siempre se fija en 100 píxeles",
      "Se hereda el color del fondo del padre automáticamente",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "Según el concepto fundamental de 'Diseño web responsive', las páginas web:",
    opciones: [
      "Deben ocultar información para dispositivos pequeños",
      "No deben omitir información, sino adaptar su contenido al dispositivo",
      "Solo pueden funcionar si el usuario tiene JavaScript activado",
      "Requieren un archivo HTML diferente para cada celular",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "css",
    pregunta:
      "Una 'Vista de Cuadrícula' (grid-view) responsiva se basa habitualmente en un sistema de:",
    opciones: [
      "12 columnas que suman el 100% de la anchura total",
      "4 columnas fijas de 200 píxeles",
      "Tablas HTML con bordes invisibles",
      "Nodos circulares conectados por flechas",
    ],
    correcta: 0,
  },

  // ==========================================
  // NIVEL 2 - BOOTSTRAP (Semi-Senior)
  // ==========================================
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "¿Qué ancho máximo (max-width) tiene un contenedor '.container' en un punto de interrupción 'Medio' (md)?",
    opciones: ["100%", "540px", "720px", "960px"],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "¿Es correcto anidar una fila (.row) directamente dentro de otra fila sin una columna intermedia?",
    opciones: [
      "Sí, es lo habitual",
      "No, las filas solo deben ser hijos de contenedores o columnas",
      "Sí, pero solo en nivel Senior",
      "Solo si usamos Grid externo",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "Si usamos la clase '.col-md-6', ¿cuántas columnas ocupará el elemento en una pantalla Extra Pequeña (xs)?",
    opciones: ["6 columnas", "3 columnas", "12 columnas (100%)", "Se oculta"],
    correcta: 2, // Por herencia hacia arriba, pero hacia abajo es 100%
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "Para que un formulario muestre validación de Bootstrap después del envío, ¿qué clase de JS se debe aplicar al padre <form>?",
    opciones: [
      ".is-validated",
      ".validate-now",
      ".was-validated",
      ".check-form",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "¿Cuál es la sintaxis correcta para ocultar un elemento solo en pantallas de escritorio (lg en adelante)?",
    opciones: [".d-none .d-lg-block", ".d-lg-none", ".d-hidden-lg", ".hide-lg"],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "En una grilla con clases mixtas, si tenemos '.col-sm-4 .col-8', ¿qué sucede en pantallas Medianas (md)?",
    opciones: [
      "Ocupa 4 columnas",
      "Ocupa 8 columnas",
      "Ocupa 12 columnas",
      "Error de renderizado",
    ],
    correcta: 0, // sm se mantiene hacia arriba (md, lg, etc) a menos que md se defina
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "¿Qué clase se usa para añadir bordes redondeados a una imagen de Bootstrap?",
    opciones: [".img-round", ".rounded", ".border-circle", ".circle"],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "Para centrar un elemento de texto dentro de un div contenedor, ¿qué clase usamos?",
    opciones: [".center", ".text-center", ".align-middle", ".mx-auto"],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "¿Cuál es la diferencia de comportamiento entre .container y .container-fluid?",
    opciones: [
      "Container ocupa el 100% siempre; Fluid tiene un ancho máximo variable",
      "Container tiene un ancho máximo en cada punto de corte; Fluid ocupa siempre el 100%",
      "Fluid es exclusivo para dispositivos móviles y Container para computadoras",
      "No hay diferencia, son dos formas de escribir la misma regla",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "¿Qué sucede con los componentes del formulario si no se utiliza la clase contenedora .mb-3?",
    opciones: [
      "Los campos dejan de funcionar",
      "Los controles aparecen pegados verticalmente sin margen inferior",
      "El navegador muestra un error de validación",
      "Las etiquetas label se vuelven invisibles",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "En las utilidades de espaciado, ¿qué dirección indica la letra 's' (ej: .ms-2)?",
    opciones: [
      "Arriba (Top)",
      "Derecha (End)",
      "Izquierda (Start)",
      "Abajo (Bottom)",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "Para convertir una imagen común en una miniatura con borde de 1px y esquinas redondeadas se usa:",
    opciones: [
      ".img-mini",
      ".img-thumbnail",
      ".rounded-border",
      ".photo-small",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "¿Cuántos puntos de interrupción (breakpoints) define Bootstrap 5 oficialmente?",
    opciones: [
      "4 (pequeño, medio, grande, extra)",
      "6 (xs, sm, md, lg, xl, xxl)",
      "3 (móvil, tablet, escritorio)",
      "12 (uno por cada columna)",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "¿Cuál de las siguientes es una clase de color semántico para un mensaje de precaución?",
    opciones: [".btn-blue", ".alert-warning", ".text-danger", ".bg-success"],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "Según el material, para alinear una imagen al final (derecha) de su contenedor usamos:",
    opciones: [
      ".align-right",
      ".rounded float-end",
      ".float-right",
      ".position-end",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "¿Qué componente de Bootstrap se caracteriza por ser una ventana emergente que elimina el acceso al resto del sitio hasta cerrarse?",
    opciones: ["Navbar", "Figure", "Modal", "Toast"],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "Sobre las Barras de Navegación, ¿qué afirma el apunte respecto a su fluidez?",
    opciones: [
      "Son fijas por defecto",
      "Su contenido es fluido de manera predeterminada",
      "No pueden llevar el logo de la empresa",
      "Requieren JS obligatorio para aparecer en pantalla",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "Para que una tabla cambie su color de fondo a oscuro, se le debe agregar la clase:",
    opciones: [".table-black", ".table-dark", ".bg-night", ".style-dark"],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "¿A qué categoría técnica pertenece la clase .text-center o .d-none?",
    opciones: [
      "Componentes primarios",
      "Maquetación central",
      "Utilidades (Utilities)",
      "Reglas de servidor",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "bootstrap",
    pregunta:
      "¿Cómo se llama el archivo comprimido que ya incluye Popper JS y Bootstrap JS integrados?",
    opciones: [
      "bootstrap.css",
      "bootstrap.bundle.min.js",
      "bootstrap.npm.js",
      "popper.package.js",
    ],
    correcta: 1,
  },
  // ==========================================
  // NIVEL 2 - MIX (Análisis de Código Integrado)
  // ==========================================
  {
    nivel: 2,
    tema: "mix",
    pregunta:
      "Analiza: Tenemos una tabla HTML5 con clase '.table-dark'. Si aplicamos un CSS externo 'td { color: red; }', ¿de qué color será el texto?",
    opciones: [
      "Negro por Bootstrap",
      "Blanco por defecto dark",
      "Rojo",
      "Bootstrap lo anula automáticamente",
    ],
    correcta: 2, // CSS externo con etiqueta tiene alta prioridad sobre utilidades generales
  },
  {
    nivel: 2,
    tema: "mix",
    pregunta:
      "Se define: <header class='d-flex mb-3'>. ¿Cuál es el comportamiento de este elemento?",
    opciones: [
      "Es un encabezado con margen abajo y comportamiento Flexbox",
      "Es un header oculto en móviles",
      "Es un error porque header no admite d-flex",
      "Bootstrap 5 no permite mb-3 en tags semánticos",
    ],
    correcta: 0,
  },

  // ==========================================
  // NIVEL 3 - HTML (Senior/Arquitectura)
  // ==========================================
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "Según las 'Reglas Gramaticales' (pág. 3), ¿cuál es el orden correcto de cierre para documentos anidados?",
    opciones: [
      "El primero en abrir es el primero en cerrar",
      "No importa el orden siempre que se cierren todos",
      "El último en abrir debe ser el primero en cerrar",
      "Solo se cierran etiquetas de texto",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "En una tabla estructurada (thead/tfoot/tbody), ¿qué ventaja técnica ofrece tfoot antes que tbody en el código?",
    opciones: [
      "Mejora la velocidad de carga en navegadores modernos",
      "Permite que el navegador renderice el pie antes que los miles de datos del cuerpo (optimización de render)",
      "Solo sirve para que se vea más bonito",
      "Evita el uso de CSS",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "¿Cuál es el valor predeterminado del atributo 'type' en una etiqueta <button> dentro de un formulario?",
    opciones: [
      "type='button'",
      "type='reset'",
      "type='submit'",
      "No tiene valor predeterminado",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "Si queremos limitar la cantidad de caracteres que un usuario escribe en un <input> de contraseña a exactamente 10, ¿qué atributo usamos?",
    opciones: ["size='10'", "maxlength='10'", "length='10'", "min='10'"],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "En el contexto de la 'Web Semántica', ¿cuál es el propósito real según la W3C?",
    opciones: [
      "Hacer que las páginas sean coloridas",
      "Permitir que los datos sean compartidos y reutilizados en todas las aplicaciones, empresas y comunidades",
      "Sustituir al JavaScript",
      "Crear bases de datos en HTML",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "Según la norma de anidamiento, ¿qué etiqueta tiene prohibido contener a una etiqueta <header> según el material?",
    opciones: [
      "No tiene prohibiciones de anidamiento",
      "No puede colocarse dentro de un footer, un address o de otro header",
      "No puede ir dentro de una sección semántica",
      "Solamente puede ser hija directa de la etiqueta body",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "¿Qué regla de oro establece el material sobre los nombres de archivos html para evitar problemas en los servidores?",
    opciones: [
      "Deben contener siempre espacios para mayor claridad",
      "Deben usar caracteres alfanuméricos y guiones (sin eñes ni acentos)",
      "Es obligatorio que el nombre esté todo en mayúsculas",
      "Se debe incluir la fecha de creación en el nombre",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "Si desea agrupar una imagen y su descripción para que la computadora entienda que tienen una relación lógica, la forma correcta es:",
    opciones: [
      "Usar un div con una clase especial",
      "Usar la etiqueta figure conteniendo a la imagen y al figcaption",
      "Colocar un párrafo debajo de la etiqueta img",
      "Escribir la descripción dentro del atributo title de la imagen",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "En la jerarquía de títulos, ¿por qué se recomienda seguir el orden de h1 a h6 sin saltear niveles?",
    opciones: [
      "Para que el tamaño de la letra no cambie",
      "Para garantizar una estructura lógica y accesible (SEO técnico)",
      "Porque los navegadores antiguos no cargan los niveles salteados",
      "Es una regla obligatoria para poder usar Bootstrap después",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "¿Cuál es la utilidad del atributo 'autofocus' en términos de experiencia de usuario avanzado?",
    opciones: [
      "Hace que el navegador complete el campo automáticamente",
      "Sitúa el cursor de entrada directamente en el campo al cargar la página",
      "Verifica si el usuario escribió una dirección de correo válida",
      "Zoom automático sobre el teclado en dispositivos móviles",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "En una tabla técnica compleja, si se aplica el atributo 'rowspan=2', ¿qué efecto estamos logrando?",
    opciones: [
      "Combinar dos columnas de forma horizontal",
      "Combinar dos filas de forma vertical",
      "Hacer que el texto de la celda aparezca en dos idiomas",
      "Crear una celda que es el doble de ancha que el resto",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "Al definir una ruta relativa de una imagen situada en una carpeta superior a nuestro archivo, se utiliza la expresión:",
    opciones: ["//", "home/", "../", "./"],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "En la definición de la web semántica de la W3C, ¿cuál es el objetivo final para los datos?",
    opciones: [
      "Que sean privados y no se puedan copiar",
      "Que puedan ser compartidos y reutilizados entre aplicaciones y comunidades",
      "Que ocupen menos espacio en los discos de los servidores",
      "Que el código HTML5 sea idéntico para todas las empresas",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "¿Qué atributo de entrada permite configurar saltos específicos en un campo numérico (ej: aceptar de 5 en 5)?",
    opciones: ["min-max", "skip", "step", "values"],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "¿Por qué un artículo o noticia debe marcarse con la etiqueta <article> en lugar de una simple <section>?",
    opciones: [
      "Porque es obligatorio que los artículos lleven un borde rojo",
      "Porque el artículo representa contenido autónomo, independiente y reutilizable",
      "Porque la etiqueta section está en desuso en HTML5",
      "No existe diferencia técnica entre ambas etiquetas",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "En el contexto de formularios, si usamos un grupo de opciones 'radio', ¿qué propiedad técnica garantiza que solo se pueda elegir una a la vez?",
    opciones: [
      "Que tengan diferentes valores de id",
      "Que compartan exactamente el mismo valor en el atributo name",
      "Que se encuentren dentro de un mismo contenedor fieldset",
      "Que todos tengan activado el atributo required",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "Si una etiqueta de texto es 'huérfana' como <br /> o <img />, esto significa técnicamente que:",
    opciones: [
      "No puede llevar atributos en su interior",
      "No necesita una etiqueta de cierre separada",
      "No se puede utilizar en la cabecera head",
      "Debe ser reemplazada por una etiqueta par en HTML5",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "El material recomienda utilizar el elemento <nav> exclusivamente para:",
    opciones: [
      "Todos los enlaces que aparezcan en el cuerpo de la página",
      "Los bloques principales de navegación del sitio web",
      "Los botones que envían datos en los formularios",
      "Las referencias bibliográficas al final del documento",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "html",
    pregunta:
      "Para limitar la longitud máxima de caracteres que un usuario puede escribir en un campo de texto corto se usa:",
    opciones: ["length-size", "maxlength", "max-chars", "required-length"],
    correcta: 1,
  },
  // ==========================================
  // NIVEL 3 - CSS (Senior/Lógica)
  // ==========================================
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "¿Por qué se desaconseja el uso de anchos fijos (ej: px) en elementos grandes para móviles según el apunte?",
    opciones: [
      "Porque consumen más batería",
      "Porque obligan al usuario a desplazarse horizontalmente, lo que daña la experiencia (pág 29)",
      "Porque Google los penaliza con multas",
      "Porque los píxeles no existen en celulares",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "En la lista de 'Orden de Prioridad' de selectores, ¿cuál de estos tiene el peso MÁS ALTO antes de llegar al estilo en línea?",
    opciones: [
      "Selector de Atributos",
      "Pseudo-clase",
      "Selector de ID",
      "Selector de Elemento (tipo)",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "¿Qué significa la regla '@media only screen and (max-width: 600px)'?",
    opciones: [
      "Aplica estilos a todas las pantallas de más de 600px",
      "Aplica estilos solo si la ventana mide 600px o MENOS",
      "Indica que la pantalla se romperá a los 600px",
      "Aplica estilos solo a impresoras de 600px",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "Al calcular el espacio de una caja, si aplicamos 'box-sizing: border-box', ¿qué sucede?",
    opciones: [
      "El padding y el border se restan del ancho total definido",
      "La caja explota si tiene mucho contenido",
      "El margen se vuelve invisible",
      "El padding se suma por fuera",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "Según el diagrama de la pág 25 del PDF 02, ¿cuál es el margen que separa una caja de su vecina superior?",
    opciones: ["padding-top", "border-top", "margin-top", "spacing-top"],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "¿En qué año y quién gestionó el desarrollo y la estandarización oficial de CSS antes de su primera recomendación?",
    opciones: [
      "Microsoft en el año 1996",
      "El W3C en el año 1995, añadiéndolo a su grupo de trabajo de HTML",
      "Winston Royce en el año 1970",
      "Ian Sommerville en la década de los 90",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "Sobre el modelo de capas de una caja, ¿qué se visualiza por detrás del contenido y del espacio de relleno según el apunte?",
    opciones: [
      "El margen externo y los bordes",
      "La imagen de fondo y el color de fondo",
      "Únicamente los espacios en blanco del navegador",
      "Las etiquetas HTML adyacentes",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "En los cálculos de unidades absolutas, ¿a cuánto equivale exactamente un punto (pt) según la norma técnica?",
    opciones: [
      "1 milímetro",
      "1/72 de pulgada",
      "10 píxeles de resolución",
      "La mitad de una pica",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "Al usar selectores de clase múltiples como '.error.destacado', el navegador seleccionará los elementos que:",
    opciones: [
      "Tengan al menos una de las dos clases asignadas",
      "Tengan ambas clases aplicadas simultáneamente",
      "Estén anidados uno dentro del otro",
      "Tengan un ID que se llame igual a la clase",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "Según el orden de prioridad en la cascada, ¿cuál de estos estilos se considera el de menor rango y será anulado por los demás?",
    opciones: [
      "Hojas de estilo externas",
      "Hojas de estilo internas en el cabecero",
      "Estilos definidos por defecto por el navegador",
      "Estilos aplicados directamente en la etiqueta",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "Respecto al uso de márgenes, el material aclara que los márgenes verticales (top y bottom) tienen la limitación de:",
    opciones: [
      "Solo poder aplicarse a elementos de bloque y a imágenes",
      "Ser obligatorios en todos los párrafos de texto",
      "No permitir valores negativos bajo ninguna circunstancia",
      "Anular automáticamente al relleno o padding",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "En una cuadrícula responsiva de 12 columnas, ¿qué debe suceder con el ancho total cuando se cambia el tamaño de la ventana?",
    opciones: [
      "Se debe mantener fijo en píxeles para no perder calidad",
      "Debe sumar siempre el 100% y expandirse o encogerse con la ventana",
      "Se debe reducir el número de columnas a solo 3",
      "El contenido debe ocultarse automáticamente en el viewport",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "¿Qué indica el valor 'inherit' aplicado a la propiedad de anchura o altura de un elemento?",
    opciones: [
      "Que el elemento calcula su tamaño según sus propios hijos",
      "Que el elemento hereda el valor exacto de su elemento padre",
      "Que el navegador decide el tamaño de forma automática",
      "Que la propiedad queda desactivada",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "Para una correcta configuración del viewport, el atributo 'width=device-width' se utiliza específicamente para:",
    opciones: [
      "Forzar a que la web se vea como en una computadora de escritorio",
      "Seguir el ancho de la pantalla del dispositivo utilizado (que variará según cada modelo)",
      "Reducir el tamaño de las imágenes para que carguen más rápido",
      "Establecer un límite de 600 píxeles a la página total",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "¿Qué técnica de organización visual divide la página en columnas y es altamente recomendada para facilitar la ubicación de elementos?",
    opciones: [
      "Sistema de cascada interna",
      "Vista de cuadrícula",
      "Flujo de nodos descendentes",
      "Anidamiento secuencial",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "Al definir una medida en porcentajes, el navegador toma como referencia principal para el cálculo a:",
    opciones: [
      "La resolución de la pantalla del usuario",
      "La medida de su elemento padre",
      "El tamaño de la fuente configurado en el body",
      "El valor predeterminado del estándar CSS3",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "Dentro del lenguaje CSS, ¿cómo se denomina formalmente al bloque de contenido situado entre las llaves que define el diseño?",
    opciones: [
      "Instrucción",
      "Selector primario",
      "Declaración",
      "Atributo técnico",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "¿Cuál de estas afirmaciones sobre los selectores de ID es correcta según el material de estudio?",
    opciones: [
      "Se pueden repetir varias veces en la misma página",
      "Solo pueden aplicarse a elementos de tipo párrafo",
      "Son más eficientes que los selectores de clase en casos de un solo elemento",
      "Tienen menor prioridad que los selectores de etiqueta",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "¿Qué propiedad se utiliza en los documentos técnicos para aplicar estilos solo si la ventana mide un máximo determinado de píxeles?",
    opciones: [
      "cascade-limit",
      "viewport-size",
      "@media con el parámetro max-width",
      "responsive-breakpoint",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "css",
    pregunta:
      "La ventaja fundamental de centralizar los estilos en un archivo CSS externo mediante la etiqueta link es:",
    opciones: [
      "Aumentar la seguridad de la página web",
      "Lograr un mantenimiento sencillo y cambios instantáneos en todo el sitio",
      "Que el código HTML se vuelva más difícil de leer para extraños",
      "Eliminar la necesidad de utilizar etiquetas semánticas en el código",
    ],
    correcta: 1,
  },
  // ==========================================
  // NIVEL 3 - BOOTSTRAP (Senior/Ingeniería)
  // ==========================================
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Qué librería externa es requerida obligatoriamente por Bootstrap 5 para el funcionamiento de Menús Desplegables y Modales?",
    opciones: ["jQuery", "Popper JS", "React JS", "Modernizr"],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Cuál es el comando de Node.js para instalar Bootstrap en un proyecto profesional?",
    opciones: [
      "get bootstrap",
      "install-bootstrap",
      "npm install bootstrap",
      "php composer bootstrap",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Cuál es el rango de píxeles para el punto de interrupción Extra-Extra Grande (xxl)?",
    opciones: ["≥992px", "≥1200px", "≥1400px", "≥2000px"],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Qué sucede con un modal si el usuario hace clic fuera de la ventana emergente (en el fondo)?",
    opciones: [
      "El modal se queda fijo",
      "El modal se cierra automáticamente (pág 29)",
      "Se recarga la página",
      "Aparece un mensaje de error",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Qué técnica recomienda el apunte para mostrar un elemento solo en pantallas medianas (md) y grandes, pero ocultarlo en pequeñas y extra-grandes?",
    opciones: [
      ".d-md-only",
      ".d-none .d-md-block .d-xl-none",
      ".d-visible",
      ".hidden-xs-xl",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Cómo se llama la propiedad de CSS que la grilla de Bootstrap utiliza internamente para su diseño de cuadrícula?",
    opciones: ["Float layout", "Table layout", "Flexbox", "Frame-grid"],
    correcta: 2,
  },
  // --- Continuación NIVEL 3 - Bootstrap ---
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Cuál es el propósito exacto de un servidor CDN en el uso de este framework?",
    opciones: [
      "Modificar el código de Bootstrap para personalizarlo",
      "Reemplazar la necesidad de descargar archivos localmente y servirlos desde una red de distribución rápida",
      "Aumentar la seguridad de las bases de datos SQL",
      "Traducir las clases al idioma local del usuario",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "En el sistema de grillas, para crear un diseño equilibrado se establece que el contenido siempre debe ir:",
    opciones: [
      "Directamente dentro de la clase .container",
      "Dentro de elementos de columna (.col)",
      "Pegado a las clases .row",
      "Antes de las etiquetas semánticas de HTML5",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Qué tecnología interna de CSS utiliza Bootstrap 5 para el funcionamiento de sus columnas y grilla?",
    opciones: [
      "Table layout",
      "Float inheritance",
      "Flexbox",
      "Canvas layering",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "Sobre el versionado semántico v5.0.1, si realizamos una actualización de tipo 'Menor' (cambiando el 0), esto significa que:",
    opciones: [
      "Se corrigieron solo errores visuales leves",
      "Se agregó funcionalidad nueva de manera compatible con lo anterior",
      "El sistema dejó de ser compatible con los navegadores anteriores",
      "Se cambió el color predeterminado del primary-blue",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Por qué el material recomienda incluir los scripts (JS) al final de la etiqueta body?",
    opciones: [
      "Para que el código sea más difícil de hackear",
      "Para asegurar una carga visual más rápida de la página antes de ejecutar la interactividad",
      "Porque los scripts no funcionan dentro de la etiqueta head",
      "Es un requerimiento exclusivo para que el CSS funcione",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "Para forzar que un elemento de tipo 'en línea' se comporte como 'bloque' en Bootstrap usamos:",
    opciones: [".d-inline", ".d-block", ".display-main", ".view-grid"],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Qué afirmación es correcta sobre los Modales anidados en Bootstrap?",
    opciones: [
      "Se pueden abrir hasta 5 a la vez",
      "Bootstrap no admite oficialmente formularios o modales anidados por experiencia de usuario",
      "Es la forma recomendada de navegación móvil",
      "Funcionan únicamente con Popper JS versión 1",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "En una fila con clase .col-lg-6 .col-12, ¿cuál será el ancho del elemento en una tablet de 768 píxeles?",
    opciones: [
      "La mitad de la pantalla (50%)",
      "El total del ancho de la pantalla (100%)",
      "Se mantendrá invisible",
      "Heredará las 6 columnas del LG",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Qué pseudoclases de CSS utiliza internamente el framework para gestionar la validación visual de formularios?",
    opciones: [
      ":active y :hover",
      ":invalid y :valid",
      ":focus y :checked",
      ":target y :link",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Cuál es el valor máximo (en píxeles) hasta el que se considera que un dispositivo es Extra-Pequeño (xs)?",
    opciones: [
      "Hasta los 720 píxeles",
      "Menos de 576 píxeles",
      "Exactamente 1024 píxeles",
      "Cualquier pantalla de más de 1200 píxeles",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Qué herramienta recomiendan los apuntes para instalar Bootstrap si se trabaja con el lenguaje PHP?",
    opciones: ["NPM", "Composer", "Nuget", "Manual ZIP"],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "En una cuadrícula de Bootstrap, ¿cuál es el número total de unidades en las que se divide horizontalmente el espacio?",
    opciones: ["8 unidades", "10 unidades", "12 unidades", "24 unidades"],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Cuál es la clase base que permite añadir las reglas de navegación del elemento nav en Bootstrap?",
    opciones: [".nav-links", ".navbar", ".header-nav", ".navigation-box"],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "bootstrap",
    pregunta:
      "¿Cómo se implementan las muescas o alertas 'toast' de éxito en una tabla Bootstrap?",
    opciones: [
      "Mediante la clase .table-alert",
      "Agregando clases contextuales como .table-success al elemento tr o td",
      "Usando únicamente JS en las celdas th",
      "El framework no permite colores en las tablas",
    ],
    correcta: 1,
  },
  // ==========================================
  // NIVEL 3 - MIX (Experto / Integración Total)
  // ==========================================
  {
    nivel: 3,
    tema: "mix",
    pregunta:
      "Escenario: Un desarrollador usa la clase '.col-12' y además un ID '#miCaja { width: 50% !important; }'. ¿Qué ancho tendrá el elemento?",
    opciones: [
      "100% por ser Bootstrap",
      "50% por la jerarquía del ID e !important",
      "75% (promedio)",
      "Bootstrap desactiva el uso de !important",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mix",
    pregunta:
      "Escenario: Tenemos una <label class='form-label' for='nombre'>. ¿Dónde debería estar situado el ID 'nombre' para cumplir con la accesibilidad de formularios?",
    opciones: [
      "En el botón de envío",
      "En la etiqueta <form>",
      "En la etiqueta <input> correspondiente",
      "Dentro de la hoja de estilo CSS",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "mix",
    pregunta: "¿Qué ocurre si enlazamos el script 'bootstrap.bundle.min.js'?",
    opciones: [
      "Solo se cargan las clases CSS",
      "Se incluye Bootstrap JS y también Popper JS integrados en el mismo archivo",
      "La página solo funcionará en Internet Explorer",
      "El archivo pesa demasiado y no debe usarse",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mix",
    pregunta:
      "¿Cuál es la recomendación final sobre las Media Queries en relación al diseño 'Mobile First' de Bootstrap?",
    opciones: [
      "Hacer el diseño primero para Desktop y achicar",
      "Hacer que el contenido se adapte progresivamente, no omitir información y priorizar que se vea bien en todos los dispositivos",
      "Usar solo JavaScript para detectar el tamaño del celular",
      "No usar imágenes en móviles",
    ],
    correcta: 1,
  },
];
