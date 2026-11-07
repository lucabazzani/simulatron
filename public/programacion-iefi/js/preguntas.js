/**
 * BANCO DE PREGUNTAS - IEFI PROGRAMACIÓN III
 * Eje 1: Frontend Estático (Nivel 1)
 */
export const bancoPreguntas = [
  // =========================================================================
  // NIVEL 1: FÁCIL (Fundamentos y Sintaxis Base)
  // =========================================================================
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "facil",
    pregunta:
      "¿Cuál es la función técnica primordial de la declaración <!DOCTYPE html> al inicio de un archivo?",
    opciones: [
      "Vincular automáticamente las librerías de estilos y scripts del servidor.",
      "Instruir al navegador a procesar el documento bajo los estándares modernos de HTML5, evitando el modo de compatibilidad histórico.",
      "Configurar la codificación de caracteres Unicode para admitir tildes y eñes.",
      "Delimitar el inicio formal del cuerpo visible de la página web.",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "facil",
    pregunta:
      "¿Por qué se desaconseja maquetar una interfaz web utilizando exclusivamente elementos <div> genéricos?",
    opciones: [
      "Porque los navegadores antiguos no pueden interpretar más de diez etiquetas <div> en un documento.",
      "Porque carecen de valor semántico, afectando negativamente la accesibilidad para lectores de pantalla y la indexación en motores de búsqueda.",
      "Porque los contenedores <div> no permiten la aplicación de márgenes ni rellenos en el modelo de cajas.",
      "Porque impiden la ejecución de funciones asíncronas en el código JavaScript del cliente.",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "facil",
    pregunta:
      "En accesibilidad y usabilidad, ¿cuál es el propósito de asociar un <label> con su <input> mediante el atributo 'for'?",
    opciones: [
      "Permitir que el backend identifique el nombre del parámetro enviado en la petición HTTP.",
      "Reemplazar la necesidad de escribir el atributo 'placeholder' dentro del campo de texto.",
      "Vincular programáticamente la etiqueta al identificador del campo, facilitando la lectura a tecnologías asistivas y ampliando el área de clic.",
      "Activar automáticamente la validación de formato mediante expresiones regulares del navegador.",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "facil",
    pregunta:
      "En la resolución de conflictos de estilos CSS sin directiva !important, ¿cuál es la jerarquía de prioridad de menor a mayor peso?",
    opciones: [
      "Estilos en línea < Hojas externas < Hojas internas < Estilos del navegador.",
      "Estilos del navegador < Hojas externas / internas (según orden de aparición) < Estilo en línea (atributo style).",
      "Hojas externas < Selectores de ID < Estilos del navegador < Selectores de clase.",
      "Estilos en línea < Selectores universales < Hojas externas < Hojas internas.",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "facil",
    pregunta:
      "Dentro del modelo de cajas (Box Model), ¿cuál es la diferencia visual entre 'padding' y 'margin'?",
    opciones: [
      "El padding es un espacio externo transparente y el margin es interno y absorbe el fondo del elemento.",
      "El padding se mide exclusivamente en píxeles y el margin en porcentajes.",
      "El padding es el espacio interno entre el contenido y el borde (conservando el fondo del elemento), mientras que el margin es el espacio externo transparente que separa cajas entre sí.",
      "El padding solo afecta a elementos en bloque y el margin a elementos en línea.",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "facil",
    pregunta:
      '¿Qué objetivo técnico cumple la directiva <meta name="viewport" content="width=device-width, initial-scale=1.0">?',
    opciones: [
      "Descargar de forma asíncrona los estilos de Bootstrap adaptados a la tarjeta gráfica del usuario.",
      "Alinear el ancho del lienzo virtual con el ancho físico de la pantalla del dispositivo, impidiendo que el navegador móvil simule una vista de escritorio panorámica.",
      "Imponer un límite máximo de 1200 píxeles a todos los contenedores de la página.",
      "Comprimir las imágenes y fuentes tipográficas para reducir el consumo de datos móviles.",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "facil",
    pregunta:
      "¿Cuál es la jerarquía de ensamblado obligatoria que exige el sistema de grillas de Bootstrap para operar de forma adecuada?",
    opciones: [
      "Columna (.col) > Fila (.row) > Contenedor (.container).",
      "Fila (.row) > Contenedor (.container) > Columna (.col).",
      "Contenedor (.container o .container-fluid) > Fila (.row) > Columna (.col-*).",
      "Contenedor (.container) > Tarjeta (.card) > Rejilla (.grid).",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "facil",
    pregunta:
      "En Bootstrap, ¿cuál es la diferencia conceptual entre una clase de utilidad (utility) y un componente?",
    opciones: [
      "Una utilidad requiere JavaScript para funcionar y un componente solo utiliza CSS puro.",
      "Una utilidad aplica una regla atómica de única responsabilidad (ej. margen o color), mientras que un componente es una estructura compuesta prediseñada (ej. navbar, modal).",
      "Las utilidades solo se aplican en pantallas móviles y los componentes en pantallas de escritorio.",
      "Los componentes se cargan desde el CDN y las utilidades deben compilarse manualmente con Sass.",
    ],
    correcta: 1,
  },

  // =========================================================================
  // NIVEL 1: MEDIO (Arquitectura y Mecánicas de Layout)
  // =========================================================================
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "media",
    pregunta:
      "Al diseñar una estructura HTML5, ¿cuándo corresponde utilizar la etiqueta <article> en lugar de <section>?",
    opciones: [
      "Cuando el bloque representa un fragmento de texto con menos de 100 caracteres.",
      "Cuando el bloque de contenido es autónomo, independiente y tiene sentido por sí mismo si fuera extraído y publicado en otro medio.",
      "Únicamente cuando se incluye una imagen con su correspondiente pie de foto (<figcaption>).",
      "Cuando se requiere que los estilos de Bootstrap asignen un borde redondeado de manera automática.",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "media",
    pregunta:
      '¿Por qué la validación nativa en formularios HTML5 (required, type="email", pattern) no exime de validar los datos en el backend?',
    opciones: [
      "Porque la validación de HTML5 solo se activa en conexiones seguras HTTPS.",
      "Porque los navegadores no muestran mensajes visuales cuando un campo no cumple con el formato solicitado.",
      "Porque las restricciones del navegador operan en el cliente y pueden ser eludidas desactivando JavaScript, manipulando el DOM o enviando peticiones HTTP directas (ej. con Postman).",
      "Porque el estándar HTML5 descarta los valores numéricos negativos de forma silenciosa.",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "media",
    pregunta:
      "Si a un párrafo le aplican las reglas: 'p { color: red; }', '.alerta { color: blue; }' y '#mensaje { color: green; }', ¿qué color adoptará el texto y por qué?",
    opciones: [
      "Rojo, porque la etiqueta 'p' es el selector más específico al apuntar al elemento nativo.",
      "Azul, porque las clases tienen mayor jerarquía que los identificadores en la cascada estándar.",
      "Verde, porque el selector de ID posee mayor especificidad que los selectores de clase y de elemento.",
      "Negro, porque al haber conflicto de tres reglas distintas el navegador anula todas y aplica el estilo por defecto.",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "media",
    pregunta:
      "Bajo el comportamiento por defecto de CSS (box-sizing: content-box), si un elemento tiene width: 300px, padding: 20px, border: 5px y margin: 15px en todos sus lados, ¿cuál es el ancho total que ocupará en el flujo horizontal?",
    opciones: [
      "300 píxeles.",
      "350 píxeles.",
      "380 píxeles (300px contenido + 40px padding lateral + 10px borde lateral + 30px margen lateral).",
      "325 píxeles.",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "media",
    pregunta:
      "En una cuadrícula adaptable de Bootstrap, si un elemento posee las clases 'col-12 col-md-6 col-lg-3', ¿cómo se mostrará en una pantalla con ancho de 800px?",
    opciones: [
      "Ocupará las 12 columnas (100% de la fila) porque no alcanzó el punto de interrupción 'lg'.",
      "Ocupará 6 columnas (50% de la fila) porque 800px supera el breakpoint 'md' (768px) pero no llega al breakpoint 'lg' (992px).",
      "Ocupará 3 columnas (25% de la fila) por herencia anticipada del punto de corte más avanzado.",
      "Se ocultará de forma automática al encontrarse entre dos puntos de corte distintos.",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "media",
    pregunta:
      "¿Qué comportamiento visual produce en Bootstrap la combinación de utilidades 'class=\"d-none d-md-block\"'?",
    opciones: [
      "El elemento se oculta en celulares y pantallas pequeñas (<768px) y se muestra como bloque a partir del breakpoint 'md'.",
      "El elemento se muestra únicamente en dispositivos móviles y se elimina en tabletas y computadoras.",
      "El elemento permanece invisible en todas las resoluciones pero reserva su espacio físico en el flujo.",
      "El elemento cambia de color oscuro a claro cuando la ventana se reduce a menos de 768px.",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "media",
    pregunta:
      "Al diseñar una página web responsive, ¿por qué es una mala práctica técnica utilizar anchos fijos expresados en píxeles (px) para los contenedores principales?",
    opciones: [
      "Porque los navegadores móviles impiden la carga de tipografías dentro de contenedores en píxeles.",
      "Porque impiden que el contenedor reduzca su tamaño en pantallas con resolución menor a dicho valor fijo, forzando un scroll horizontal que rompe la experiencia de usuario.",
      "Porque los píxeles consumen el doble de memoria RAM en el motor de renderizado de los dispositivos.",
      "Porque la directiva @media solo puede operar con unidades relativas como 'rem' o porcentajes.",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "media",
    pregunta:
      "¿Cuál es la diferencia de comportamiento entre las clases de contenedor '.container' y '.container-fluid' en Bootstrap?",
    opciones: [
      "'.container' se utiliza para texto y '.container-fluid' exclusivamente para imágenes y videos.",
      "'.container' tiene un ancho máximo fijo escalonado para cada breakpoint, mientras que '.container-fluid' abarca siempre el 100% del ancho del viewport en cualquier resolución.",
      "'.container' ocupa el 100% en pantallas grandes y se reduce en celulares; '.container-fluid' hace lo opuesto.",
      "No existe diferencia de layout, '.container-fluid' simplemente elimina las canaletas laterales (gutters).",
    ],
    correcta: 1,
  },

  // =========================================================================
  // NIVEL 1: DIFÍCIL (Casos Borde, Mecánicas de Render y Especificidad)
  // =========================================================================
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "dificil",
    pregunta:
      "Dadas las reglas en una misma hoja CSS externa: 'div.card p.desc' frente a 'body #contenido p', ¿cuál gana la colisión de estilos y cuál es el cálculo de especificidad respectivo?",
    opciones: [
      "Gana 'div.card p.desc' porque contiene cuatro selectores contra tres del competidor.",
      "Gana 'body #contenido p' porque posee una especificidad de (0,1,0,1) al incluir un ID, superando a (0,0,2,2) que solo contiene clases y elementos.",
      "Ganan los estilos del elemento que haya sido escrito primero en el código HTML.",
      "Se produce un empate técnico y el navegador resuelve promediando los valores de color asignados.",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "dificil",
    pregunta:
      "Si a un contenedor se le asigna la propiedad 'box-sizing: border-box' manteniendo width: 250px, padding: 25px en todos sus lados y border: 5px solid, ¿qué dimensiones tendrá el área de contenido (content) real interna?",
    opciones: [
      "250 píxeles de ancho para el contenido, sumando padding y bordes por fuera.",
      "310 píxeles de ancho total.",
      "190 píxeles de ancho (250px ancho total menos 50px de padding lateral y 10px de borde lateral).",
      "200 píxeles, porque los bordes quedan excluidos del cálculo en el modelo border-box.",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "dificil",
    pregunta:
      "En una fila '.row' de Bootstrap con tres columnas configuradas como 'class=\"col-md-5\"', ¿qué comportamiento presentará el layout en una pantalla de escritorio (≥992px)?",
    opciones: [
      "Las tres columnas reducirán automáticamente su tamaño proporcional a 4 unidades para no desbordar.",
      "Las dos primeras columnas ocuparán 10 unidades de la fila y la tercera saltará a una nueva línea dentro de la misma fila ocupando 5 unidades, ya que la suma (15) excede el límite de 12.",
      "El navegador arrojará un error de sintaxis en la consola y deshabilitará la grilla flexbox.",
      "La tercera columna se recortará visualmente en el margen derecho sin alterar la altura del contenedor.",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "dificil",
    pregunta:
      "Para implementar la validación visual de formularios en Bootstrap sin recargar la página tras interceptar el evento 'submit' en JavaScript, ¿qué clase se debe inyectar en la etiqueta <form>?",
    opciones: [
      "'.is-invalid', para forzar que todos los campos muestren advertencias rojas.",
      "'.form-control-validated', para delegar la validación al navegador nativo.",
      "'.was-validated', lo que activa las pseudoclases CSS :valid e :invalid sobre los controles hijos para desplegar estilos y textos de feedback.",
      "'.novalidate', para indicar al backend que los datos ya fueron saneados en el cliente.",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "dificil",
    pregunta:
      'Un formulario incluye un campo \'<input type="number" min="10" max="50" step="5" required>\'. Si el usuario escribe manualmente \'22\' y presiona el botón de envío, ¿qué acción ejecuta el navegador?',
    opciones: [
      "Redondea el número automáticamente al múltiplo más cercano (20) y envía la petición sin avisar.",
      "Envía el formulario con normalidad, ya que 22 está dentro del rango entre 10 y 50.",
      "Detiene el envío y despliega un mensaje nativo indicando que el valor no es válido por no ajustarse a los saltos definidos por el atributo 'step'.",
      "Convierte el campo en texto plano y limpia el valor ingresado inmediatamente.",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "dificil",
    pregunta:
      "En el contexto de accesibilidad y SEO, ¿cuál es la razón técnica por la que el elemento <main> debe ser estrictamente único dentro de un documento HTML5?",
    opciones: [
      "Porque los navegadores bloquean la descarga del CSS si encuentran más de un elemento <main>.",
      "Porque define el punto de referencia estructural (landmark) primario del documento, evitando ambigüedad sobre cuál es el contenido central frente a bloques compartidos.",
      "Porque no es compatible con el sistema de grillas de Bootstrap si coexiste con otra etiqueta del mismo tipo.",
      "Porque la especificación exige que los elementos <article> y <section> vivan exclusivamente fuera de él.",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "dificil",
    pregunta:
      "En la metodología de desarrollo 'Mobile First' de Bootstrap y CSS moderno, ¿por qué las media queries estándar se escriben prioritariamente con 'min-width' en lugar de 'max-width'?",
    opciones: [
      "Porque 'max-width' está obsoleto en la especificación de CSS3.",
      "Porque permite que los estilos base escritos fuera de las media queries apliquen a pantallas móviles, agregando capas de complejidad y columnas progresivas a medida que el ancho de pantalla crece.",
      "Porque 'min-width' es el único que puede interpretar las clases '.col-sm-*' de Bootstrap.",
      "Para obligar a los teléfonos celulares a descargar únicamente las hojas de estilo minificadas.",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "frontend",
    dificultad: "dificil",
    pregunta:
      "Si se omite la declaración '<meta charset=\"UTF-8\">' en el <head> y el servidor web tampoco envía la cabecera HTTP 'Content-Type: text/html; charset=UTF-8', ¿cuál es la causa técnica por la que aparecen caracteres corruptos (mojibake) al renderizar?",
    opciones: [
      "El navegador interpreta que el documento es una imagen vectorial en lugar de texto estructurado.",
      "El motor del navegador asume una codificación predeterminada del sistema o regional (como Windows-1252 o ISO-8859-1), interpretando los bytes de secuencias multibyte UTF-8 como caracteres individuales erróneos.",
      "Los scripts de Bootstrap rechazan la ejecución de eventos interactivos en páginas sin codificación declarada.",
      "El parser de HTML5 detiene la construcción del DOM en la primera etiqueta que contenga una letra acentuada.",
    ],
    correcta: 1,
  },

  // =========================================================================
  // EJE 2: BACKEND SPRING BOOT (NIVEL 2 - FÁCIL)
  // =========================================================================
  {
    nivel: 2,
    tema: "spring",
    dificultad: "facil",
    pregunta:
      "¿Cuál es la responsabilidad primordial de la capa @Service en una API Spring Boot?",
    opciones: [
      "Serializar y formatear el cuerpo JSON de la respuesta para el cliente web.",
      "Centralizar las reglas de negocio, transacciones y mapeos entre DTOs y entidades.",
      "Gestionar las conexiones de bajo nivel con el motor de base de datos relacional.",
      "Interceptar solicitudes HTTP y validar encabezados de seguridad de la petición.",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "facil",
    pregunta:
      "¿Qué anotaciones componen internamente la meta-anotación @SpringBootApplication?",
    opciones: [
      "@Configuration, @EnableAutoConfiguration y @ComponentScan.",
      "@Component, @RestController y @EnableWebSecurity.",
      "@EntityScan, @EnableJpaRepositories y @Controller.",
      "@SpringBootConfiguration, @Transactional y @Service.",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "facil",
    pregunta:
      "En JPA, ¿cuál es la diferencia de comportamiento entre FetchType.LAZY y FetchType.EAGER?",
    opciones: [
      "LAZY inicializa la relación siempre en memoria, mientras que EAGER solo persiste atributos primitivos.",
      "LAZY requiere base de datos relacional, mientras que EAGER opera sobre esquemas no relacionales.",
      "LAZY carga la relación bajo demanda al accederla, mientras que EAGER la trae siempre junto a la entidad.",
      "LAZY valida los identificadores foráneos al compilar, mientras que EAGER lo hace en tiempo de ejecución.",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "facil",
    pregunta:
      "¿Qué ventaja operativa provee la interfaz JpaRepository en Spring Data JPA?",
    opciones: [
      "Traduce automáticamente controladores REST en interfaces gráficas dinámicas de usuario.",
      "Provee operaciones CRUD completas y paginación básica sin escribir código de implementación.",
      "Deshabilita de forma automática las transacciones de escritura para evitar bloqueos de tabla.",
      "Convierte las consultas SQL nativas en esquemas documentales compatibles con motores NoSQL.",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "facil",
    pregunta:
      "¿Cuál es el propósito central de utilizar un Request DTO en lugar de recibir la Entidad JPA directamente?",
    opciones: [
      "Delimitar el contrato de entrada, aplicar validaciones y evitar exponer campos de la entidad.",
      "Forzar a que la base de datos ejecute triggers antes de guardar cualquier registro nuevo.",
      "Permitir que el cliente acceda a todas las columnas de la tabla sin filtros de seguridad.",
      "Duplicar el rendimiento de la CPU al serializar los datos recibidos mediante protocolo binario.",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "facil",
    pregunta:
      "Según las buenas prácticas de diseño REST, ¿qué código HTTP debe responderse al crear un recurso con éxito?",
    opciones: ["200 OK.", "202 Accepted.", "204 No Content.", "201 Created."],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "facil",
    pregunta:
      "¿Qué anotación se utiliza en Spring Boot para definir una clase que centraliza el manejo global de excepciones?",
    opciones: [
      "@ControllerAdvice o @RestControllerAdvice.",
      "@GlobalExceptionHandler o @ErrorCatcher.",
      "@ResponseStatus o @ExceptionMapper.",
      "@ErrorHandler o @SecurityInterceptor.",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "facil",
    pregunta:
      "¿Por qué se afirma que la autenticación mediante JSON Web Tokens (JWT) es 'stateless'?",
    opciones: [
      "Porque el servidor almacena las credenciales en una tabla temporal de sesiones activas.",
      "Porque cada petición lleva su propia credencial verificable y el servidor no guarda sesiones.",
      "Porque el token solo es compatible con aplicaciones monolíticas sin separación de backend.",
      "Porque la base de datos invalida los registros del usuario cada vez que la aplicación se reinicia.",
    ],
    correcta: 1,
  },

  // =========================================================================
  // EJE 2: BACKEND SPRING BOOT (NIVEL 2 - MEDIO)
  // =========================================================================
  {
    nivel: 2,
    tema: "spring",
    dificultad: "media",
    pregunta:
      "¿Por qué se considera una mala práctica arquitectónica ubicar lógica de negocio dentro de un @RestController?",
    opciones: [
      "Porque impide el correcto mapeo de códigos de estado HTTP en el objeto ResponseEntity.",
      "Porque imposibilita la inyección de repositorios JPA mediante el uso de constructores.",
      "Porque rompe la separación de capas, dificulta el testeo unitario y anula la reutilización.",
      "Porque Spring Boot bloquea la compilación si un controlador contiene condicionales lógicos.",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "media",
    pregunta:
      "¿Cuál es la principal ventaja técnica de preferir la inyección por constructor sobre la inyección por campo (@Autowired)?",
    opciones: [
      "Asegura la inmutabilidad de dependencias, previene punteros nulos y facilita pruebas unitarias.",
      "Reduce el consumo de memoria en la máquina virtual al evitar la creación de proxies de Spring.",
      "Permite que dos componentes puedan inyectarse mutuamente sin producir dependencias circulares.",
      "Desactiva el contenedor de inversión de control para mejorar la latencia en redes locales.",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "media",
    pregunta:
      "En una relación @OneToMany bidireccional, ¿qué función cumple el atributo 'mappedBy' en el lado inverso?",
    opciones: [
      "Indicar la columna física que alojará la clave foránea dentro de la tabla principal.",
      "Señalar que el otro extremo gestiona la relación, evitando crear tablas intermedias redundantes.",
      "Forzar a que la relación cargue siempre los datos hijos bajo la estrategia FetchType.EAGER.",
      "Crear automáticamente índices compuestos en la base de datos para agilizar búsquedas.",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "media",
    pregunta:
      "Al consultar grandes volúmenes de datos, ¿por qué es mandatorio utilizar Pageable en lugar de findAll()?",
    opciones: [
      "Porque findAll() no permite la aplicación de filtros mediante métodos derivados por nombre.",
      "Porque Pageable garantiza que las entidades se serialicen en formato XML de manera obligatoria.",
      "Porque traer todos los registros sin límite satura la memoria del servidor y colapsa la red.",
      "Porque la especificación JPA prohíbe el uso de listas convencionales en entornos concurrentes.",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "media",
    pregunta:
      "¿Cómo se activa formalmente el procesamiento de validaciones de Jakarta (ej. @NotBlank, @Size) en un controlador?",
    opciones: [
      "Anotando el parámetro del Request DTO con @Valid o @Validated en el método del endpoint.",
      "Declarando la etiqueta @CheckConstraints en la cabecera principal de la clase controladora.",
      "Inyectando manualmente un bean de tipo Validator dentro de cada método de servicio del dominio.",
      "Habilitando el perfil de desarrollo en el archivo application.properties de la aplicación.",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "media",
    pregunta:
      "¿Qué código de estado HTTP y qué verbo corresponden a una eliminación lógica o física exitosa sin cuerpo de retorno?",
    opciones: [
      "Verbo POST con código 201 Created.",
      "Verbo DELETE con código 204 No Content.",
      "Verbo GET con código 200 OK.",
      "Verbo PATCH con código 409 Conflict.",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "media",
    pregunta:
      "Si una validación de un DTO con @Valid falla en un @PostMapping, ¿qué excepción nativa dispara Spring Boot?",
    opciones: [
      "ConstraintViolationException.",
      "IllegalArgumentException.",
      "MethodArgumentNotValidException.",
      "HttpMediaTypeNotSupportedException.",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "media",
    pregunta:
      "En una arquitectura desacoplada (Frontend React y Backend Spring Boot), ¿qué problema resuelve la configuración de CORS?",
    opciones: [
      "Permite que el navegador autorice peticiones HTTP entre orígenes (dominios o puertos) distintos.",
      "Encripta la carga útil del token JWT para que los clientes web no lean su contenido interno.",
      "Habilita el guardado automático de cookies de sesión en el almacenamiento local del servidor.",
      "Reduce el tamaño de los encabezados HTTP comprimiendo los certificados de autenticación TLS.",
    ],
    correcta: 0,
  },

  // =========================================================================
  // EJE 2: BACKEND SPRING BOOT (NIVEL 2 - DIFÍCIL)
  // =========================================================================
  {
    nivel: 2,
    tema: "spring",
    dificultad: "dificil",
    pregunta:
      "¿Cuál es el impacto de marcar un método de servicio con @Transactional al coordinar múltiples operaciones de guardado?",
    opciones: [
      "Fuerza a que cada sentencia SQL se ejecute en un hilo aislado e independiente del sistema operativo.",
      "Asegura atomicidad: si una operación falla, se revierte todo (rollback) manteniendo la consistencia.",
      "Bloquea todas las lecturas concurrentes a nivel de tabla hasta que el servidor finalice el ciclo.",
      "Convierte las excepciones chequeadas en respuestas HTTP 500 sin registrar datos en la bitácora.",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "dificil",
    pregunta:
      "En inyección de dependencias, ¿qué fenómeno adverso ocurre cuando dos beans se inyectan mutuamente en sus constructores?",
    opciones: [
      "Una condición de carrera durante la ejecución de las consultas transaccionales de la base.",
      "Una excepción de dependencia circular (BeanCurrentlyInCreationException) impidiendo iniciar la app.",
      "La duplicación de instancias en memoria sin que Spring Boot reporte ninguna advertencia visible.",
      "La pérdida de la configuración de perfiles activos declarada en el archivo application.yml.",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "dificil",
    pregunta:
      "¿Qué es el problema de las 'N+1 consultas' en JPA y cuál es la estrategia estándar para mitigarlo en consultas complejas?",
    opciones: [
      "Ocurre al insertar registros masivos; se resuelve eliminando la clave foránea en la tabla secundaria.",
      "Ocurre por bucles infinitos en controladores; se mitiga deshabilitando la serialización hacia JSON.",
      "Ocurre al cargar una lista y disparar una consulta por cada hijo; se mitiga usando JOIN FETCH o EntityGraph.",
      "Ocurre al usar paginación manual; se mitiga convirtiendo todas las relaciones foráneas a EAGER.",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "dificil",
    pregunta:
      "¿Qué diferencia semántica y técnica existe entre una consulta con @Query usando JPQL frente a usar nativeQuery = true?",
    opciones: [
      "JPQL opera sobre entidades y atributos Java del modelo; nativeQuery ejecuta código SQL atado al motor.",
      "JPQL solo admite sentencias de lectura (SELECT); nativeQuery se utiliza exclusivamente para modificaciones.",
      "JPQL no requiere conexión activa a la base; nativeQuery exige configurar puertos de red manuales.",
      "JPQL se compila en tiempo de ejecución del cliente; nativeQuery se valida antes de desplegar la imagen.",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "dificil",
    pregunta:
      "Al serializar una Entidad con relación bidireccional a JSON sin usar DTOs, ¿qué falla técnica crítica se produce comúnmente?",
    opciones: [
      "Un bloqueo de lectura por falta de transaccionalidad activa en el hilo del despachador de peticiones.",
      "Una excepción StackOverflowError por recursión infinita al referenciarse mutuamente los objetos.",
      "La conversión automática de todos los identificadores foráneos en valores numéricos negativos.",
      "El descarte silencioso de los atributos declarados bajo el modificador de acceso privado en Java.",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "dificil",
    pregunta:
      "Al diseñar una URI para actualizar parcialmente un atributo de una orden existente, ¿cuál es la estructura REST estándar?",
    opciones: [
      "POST /api/orders/update/{id} enviando en los parámetros de la URL el atributo que se desea modificar.",
      "PATCH /api/orders/{id} enviando en el cuerpo JSON únicamente los campos específicos a actualizar.",
      "PUT /api/orders/action=modify&id={id} reemplazando la totalidad de la entidad en la base de datos.",
      "GET /api/orders/edit/{id} ejecutando la mutación mediante una consulta segura en la cadena de texto.",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "dificil",
    pregunta:
      "¿Por qué es un riesgo de seguridad omitir un @RestControllerAdvice y permitir que Spring muestre el error por defecto?",
    opciones: [
      "Porque el servidor expone trazas de pila (stack traces), nombres de paquetes y versiones de software.",
      "Porque la base de datos desactiva el cifrado de contraseñas ante la primera excepción de sistema.",
      "Porque el navegador web retiene las credenciales del usuario en texto plano dentro de la memoria caché.",
      "Porque los puertos internos de la red Docker quedan automáticamente expuestos a conexiones externas.",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "spring",
    dificultad: "dificil",
    pregunta:
      "En la anatomía de un JWT, ¿por qué razón técnica nunca debe guardarse información sensible como contraseñas en el Payload?",
    opciones: [
      "Porque la firma digital se rompe si el payload contiene cadenas alfanuméricas de longitud variable.",
      "Porque el payload solo está codificado en Base64Url y no cifrado, por lo que cualquiera puede decodificarlo.",
      "Porque Spring Security rechaza tokens que incluyan más de tres declaraciones o claims de usuario.",
      "Porque los filtros de tipo OncePerRequestFilter solo analizan encabezados que contengan números enteros.",
    ],
    correcta: 1,
  },

  // =========================================================================
  // EJE 3: BASES DE DATOS NOSQL - MONGODB (NIVEL 3 - FÁCIL)
  // =========================================================================
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "facil",
    pregunta:
      "¿Cuál es una de las razones principales que motivó el surgimiento de bases de datos NoSQL frente a las relacionales?",
    opciones: [
      "La imposibilidad de ejecutar consultas de lectura concurrentes en servidores basados en Linux.",
      "La necesidad de esquemas flexibles para datos polimórficos y facilidades de escalado horizontal.",
      "El requisito de eliminar por completo el almacenamiento persistente en discos de estado sólido.",
      "La obligación de utilizar exclusivamente el lenguaje JavaScript para modelar lógica de dominio.",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "facil",
    pregunta:
      "¿A qué familia NoSQL pertenece Redis y cuál es su escenario de uso más representativo?",
    opciones: [
      "Documental, especializada en el almacenamiento jerárquico de catálogos y perfiles con subdocumentos.",
      "De grafos, optimizada para traversals de redes sociales y cálculo de rutas mínimas interconectadas.",
      "Clave-valor, utilizada primordialmente para sesiones distribuidas, contadores rápidos y memoria caché.",
      "Columnar, diseñada para agregaciones analíticas masivas sobre series de tiempo y telemetría de sensores.",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "facil",
    pregunta:
      "En la terminología de MongoDB, ¿cuál es la equivalencia conceptual directa respecto a una fila en SQL?",
    opciones: [
      "Un documento BSON.",
      "Una colección.",
      "Un campo indexado.",
      "Un cursor de agregación.",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "facil",
    pregunta:
      "¿Cuál es el tamaño máximo físico permitido para un documento individual en MongoDB según el estándar BSON?",
    opciones: [
      "64 megabytes.",
      "4 gigabytes.",
      "16 megabytes.",
      "512 kilobytes.",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "facil",
    pregunta:
      "En mongosh, ¿qué comando se utiliza para insertar un lote de múltiples documentos en una sola operación?",
    opciones: [
      "db.coleccion.pushMany([ ... ]).",
      "db.coleccion.insertBatch({ ... }).",
      "db.coleccion.addDocuments([ ... ]).",
      "db.coleccion.insertMany([ ... ]).",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "facil",
    pregunta:
      "¿Qué operador de comparación se utiliza en consultas de MongoDB para buscar valores estrictamente mayores a una cifra?",
    opciones: ["$gt.", "$gte.", "$ne.", "$in."],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "facil",
    pregunta:
      "En el modelado documental, ¿cuándo se recomienda aplicar la técnica de embeber documentos (subdocumentos)?",
    opciones: [
      "Cuando los datos secundarios se actualizan de forma independiente con una frecuencia muy elevada.",
      "Cuando existe una relación de 'uno a pocos' acotada que habitualmente se lee junto al documento raíz.",
      "Cuando la lista de elementos relacionados crece de forma continua y descontrolada a lo largo del tiempo.",
      "Cuando se requiere forzar integridad referencial estricta mediante restricciones foráneas del motor.",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "facil",
    pregunta:
      "¿En qué tipo de requerimiento del negocio sigue siendo preferible utilizar una base de datos relacional tradicional?",
    opciones: [
      "Almacenamiento de bitácoras de auditoría de solo inserción con esquemas altamente cambiantes.",
      "Módulos con transacciones complejas entre múltiples tablas que exigen consistencia ACID rígida.",
      "Prototipado ágil de catálogos donde los atributos varían de manera arbitraria según el usuario.",
      "Aplicaciones distribuidas que demandan particionamiento horizontal nativo a escala global.",
    ],
    correcta: 1,
  },

  // =========================================================================
  // EJE 3: BASES DE DATOS NOSQL - MONGODB (NIVEL 3 - MEDIO)
  // =========================================================================
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "media",
    pregunta:
      "¿Qué problema técnico describe el concepto de 'desajuste de impedancia objeto-relacional' en el backend?",
    opciones: [
      "La incompatibilidad entre los tipos de datos primitivos de Java y los esquemas binarios del protocolo TCP.",
      "La diferencia entre modelar objetos con estructuras anidadas y desarmarlos en tablas planas relacionales.",
      "La saturación de la memoria RAM del servidor al ejecutar sentencias de tipo GROUP BY sobre vistas SQL.",
      "La falta de soporte de conexiones asíncronas en los controladores JDBC estándar de las bases de datos.",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "media",
    pregunta:
      "¿Cuál de las siguientes bases de datos está específicamente optimizada para modelar nodos y relaciones dirigidas con propiedades?",
    opciones: ["Apache Cassandra.", "Redis In-Memory.", "Neo4j.", "CouchDB."],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "media",
    pregunta:
      "¿Qué ventaja operativa y técnica aporta el formato BSON frente a una cadena de texto JSON estándar en MongoDB?",
    opciones: [
      "Incorpora tipos de datos adicionales (Date, ObjectId, Decimal128) y optimiza la velocidad de recorrido.",
      "Comprime los datos para que ninguna entidad supere nunca los 500 kilobytes de espacio en el disco.",
      "Permite ejecutar sentencias SQL estándar sobre colecciones no relacionales sin adaptadores externos.",
      "Cifra automáticamente todos los campos del documento utilizando algoritmos de clave asimétrica RSA.",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "media",
    pregunta:
      "¿Cuál es el principal riesgo técnico de operar una base de datos documental con esquema flexible sin gobernanza?",
    opciones: [
      "El bloqueo de transacciones de lectura concurrentes debido al aislamiento estricto de cada documento.",
      "La degradación de datos por incoherencias estructurales, campos mal tipificados o errores de escritura.",
      "La imposibilidad de crear índices secundarios sobre campos que contengan valores numéricos flotantes.",
      "La desfragmentación periódica y obligatoria de los archivos de almacenamiento del motor en el host.",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "media",
    pregunta:
      "En mongosh, ¿qué efecto exacto produce ejecutar db.usuarios.updateOne({ _id: 1 }, { $set: { activo: true } })?",
    opciones: [
      "Reemplaza el documento completo borrando los demás campos y dejando únicamente el atributo activo.",
      "Agrega o modifica el campo activo con valor true sin alterar los restantes atributos del documento.",
      "Crea un nuevo documento duplicado si el usuario con ese identificador ya existía en la colección.",
      "Arroja un error de sintaxis si el campo activo no había sido previamente declarado en un schema.",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "media",
    pregunta:
      "¿Qué operador de arreglo en MongoDB asegura que un campo contenga la totalidad de los valores solicitados en una lista?",
    opciones: ["$in.", "$elemMatch.", "$all.", "$size."],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "media",
    pregunta:
      "Si en un sistema de comercio electrónico un producto cambia de precio, ¿por qué en una orden histórica el precio unitario debe embeberse?",
    opciones: [
      "Para evitar una consulta adicional al catálogo cada vez que se audita el stock disponible de la tienda.",
      "Para congelar el valor histórico que efectivamente se pagó, independientemente de futuros aumentos.",
      "Para reducir el espacio en disco de la base de datos eliminando la clave foránea hacia el catálogo.",
      "Para cumplir con la restricción obligatoria de MongoDB que prohíbe referenciar números decimales.",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "media",
    pregunta:
      "¿En qué consiste una arquitectura de persistencia políglota o solución híbrida según el material docente?",
    opciones: [
      "Migrar la totalidad del código hacia un motor relacional manteniendo únicamente backups en MongoDB.",
      "Combinar una base relacional para el núcleo transaccional y MongoDB para módulos de alta variabilidad.",
      "Utilizar simultáneamente cuatro motores NoSQL distintos para que cada tabla resida en una base diferente.",
      "Almacenar los registros de datos en memoria RAM y respaldar las consultas en archivos planos CSV.",
    ],
    correcta: 1,
  },

  // =========================================================================
  // EJE 3: BASES DE DATOS NOSQL - MONGODB (NIVEL 3 - DIFÍCIL)
  // =========================================================================
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "dificil",
    pregunta:
      "¿Por qué el antipatrón EAV (Entity-Attribute-Value) en bases relacionales resulta ineficiente frente al modelo documental?",
    opciones: [
      "Porque exige deshabilitar las claves primarias numéricas para permitir la indexación de atributos texto.",
      "Porque transforma consultas sencillas en múltiples joins sobre sí misma, degradando fuertemente el rendimiento.",
      "Porque impide almacenar fechas con formato ISO-8601 en motores como PostgreSQL o MySQL estándar.",
      "Porque restringe el número de registros máximos de la tabla a una cantidad fija por partición física.",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "dificil",
    pregunta:
      "En bases NoSQL de familias de columnas (Column-family como Cassandra), ¿cuál es el factor clave de su diseño de almacenamiento?",
    opciones: [
      "Las filas se serializan como objetos JSON anidados con un límite de tamaño de dieciséis megabytes.",
      "Los datos se ordenan físicamente por columnas en nodos distribuidos, optimizando agregaciones masivas.",
      "Cada clave se almacena en memoria volátil sin mecanismos de replicación en discos secundarios.",
      "Las relaciones entre entidades se resuelven mediante índices de adyacencia directa sin cálculo de hash.",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "dificil",
    pregunta:
      "En la generación de un ObjectId de MongoDB (12 bytes), ¿qué información se codifica en los primeros 4 bytes?",
    opciones: [
      "El identificador único de proceso que ejecutó la inserción en el sistema operativo del host.",
      "Una marca de tiempo (timestamp en segundos Unix) que permite deducir la fecha de creación del registro.",
      "El hash criptográfico de la clave primaria configurada en el archivo de validación del esquema.",
      "Un contador secuencial incremental que se reinicia a cero cada vez que el servidor se reconecta.",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "dificil",
    pregunta:
      "Al configurar validación con $jsonSchema en una colección de MongoDB, ¿qué directiva permite restringir un campo a un conjunto cerrado de valores de texto?",
    opciones: [
      "allowedValues: [ ... ].",
      "enum: [ ... ].",
      "bsonOptions: [ ... ].",
      "patternMatch: [ ... ].",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "dificil",
    pregunta:
      "¿Qué riesgo operativo crítico presenta la ejecución de db.coleccion.deleteMany({}) sin argumentos en el filtro en mongosh?",
    opciones: [
      "Arroja una excepción de sintaxis y detiene la ejecución del script antes de alterar cualquier tabla.",
      "Elimina de forma inmediata e irreversible la totalidad de los documentos contenidos en la colección.",
      "Borra únicamente los documentos que no contengan un campo de identificador _id autogenerado.",
      "Invalida los índices secundarios de la base de datos sin alterar los registros almacenados en disco.",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "dificil",
    pregunta:
      "Al auditar una consulta con explain('executionStats'), ¿qué valores evidencian que el índice utilizado es óptimo?",
    opciones: [
      "Que executionStages reporte COLLSCAN y totalDocsExamined sea el doble que el total de registros devueltos.",
      "Que la etapa sea IXSCAN y la cantidad de documentos examinados (totalDocsExamined) iguale a los devueltos.",
      "Que el tiempo de ejecución en milisegundos se mantenga en cero aunque la etapa indique un escaneo completo.",
      "Que la cantidad de claves indexadas evaluadas sea estrictamente mayor que el número total de documentos.",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "dificil",
    pregunta:
      "En una relación de 'uno a muchísimos' (1:squillions), ¿por qué es mandatorio utilizar referencias en lugar de embeber?",
    opciones: [
      "Porque los subdocumentos en arreglos colisionarían contra el límite de 16 MB y degradarían la escritura.",
      "Porque MongoDB prohíbe realizar filtros sobre elementos que residan dentro de un arreglo de documentos.",
      "Porque el motor documental requiere que toda clave referenciada pertenezca a la misma base de datos física.",
      "Porque los índices compuestos no pueden ser creados sobre colecciones que contengan subdocumentos.",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "mongodb",
    dificultad: "dificil",
    pregunta:
      "En una solución híbrida, ¿cuál de los siguientes flujos de datos justifica plenamente su delegación hacia MongoDB?",
    opciones: [
      "El cálculo de balances contables y asientos de partida doble con transacciones sobre múltiples libros.",
      "Un catálogo de productos donde cada categoría tiene especificaciones técnicas y atributos dispares.",
      "La gestión de reservas de pasajes aéreos que exige evitar sobreventas mediante bloqueos pesimistas de fila.",
      "La emisión correlativa de facturas electrónicas que demanda numeración secuencial garantizada sin huecos.",
    ],
    correcta: 1,
  },

  // =========================================================================
  // EJE 4: CONTENEDORES CON DOCKER (NIVEL 4 - FÁCIL)
  // =========================================================================
  {
    nivel: 4,
    tema: "docker",
    dificultad: "facil",
    pregunta:
      "¿Por qué los contenedores Docker son significativamente más livianos y rápidos de iniciar que las máquinas virtuales tradicionales?",
    opciones: [
      "Porque emulan hardware genérico de 32 bits prescindiendo de memoria swap.",
      "Porque comparten el kernel del host anfitrión en lugar de ejecutar un sistema operativo invitado completo.",
      "Porque compilan las aplicaciones directamente a código máquina nativo antes de la ejecución.",
      "Porque deshabilitan el acceso a la red externa durante el proceso de arranque inicial.",
    ],
    correcta: 1,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "facil",
    pregunta:
      "En la arquitectura de Docker, ¿cuál es la diferencia fundamental entre una imagen y un contenedor?",
    opciones: [
      "La imagen es un proceso interactivo activo y el contenedor es un script de configuración.",
      "La imagen solo opera en desarrollo y el contenedor es exclusivo de servidores de producción.",
      "La imagen es una plantilla inmutable de solo lectura y el contenedor es su instancia ejecutable.",
      "La imagen administra el volumen persistente y el contenedor define las reglas de firewall.",
    ],
    correcta: 2,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "facil",
    pregunta:
      "En un Dockerfile multi-etapa para Spring Boot, ¿qué ventaja ofrece descartar la etapa builder en la imagen final?",
    opciones: [
      "Reduce drásticamente el peso de la imagen y evita incluir herramientas innecesarias como el compilador JDK.",
      "Permite que el contenedor ejecute transacciones distribuidas sin conectarse a una base de datos.",
      "Habilita el guardado automático de archivos temporales en el sistema de almacenamiento del host.",
      "Elimina la necesidad de declarar variables de entorno para configurar el puerto del servidor web.",
    ],
    correcta: 0,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "facil",
    pregunta:
      "¿Qué sucede con los datos escritos en la capa superior de un contenedor si este es eliminado con 'docker rm'?",
    opciones: [
      "Se transfieren de forma automática al directorio raíz de la máquina anfitriona.",
      "Quedan almacenados indefinidamente en la memoria caché del daemon de Docker.",
      "Se convierten en una nueva imagen etiquetada con la versión anterior de la app.",
      "Se destruyen irrevocablemente a menos que hayan sido montados sobre un volumen.",
    ],
    correcta: 3,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "facil",
    pregunta:
      "Al conectar una API en un contenedor con su base de datos en Compose, ¿por qué falla usar 'localhost:5432'?",
    opciones: [
      "Porque localhost dentro del contenedor apunta a su propia interfaz aislada y no al servicio de la base.",
      "Porque las bases de datos relacionales rechazan conexiones que no provengan de direcciones IPv6.",
      "Porque Docker Compose bloquea por defecto cualquier tráfico entrante en puertos inferiores a 8000.",
      "Porque la herramienta exige utilizar obligatoriamente nombres de dominio públicos con certificado SSL.",
    ],
    correcta: 0,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "facil",
    pregunta:
      "¿Cuál es el propósito principal de utilizar Docker Compose frente a ejecutar contenedores de forma aislada?",
    opciones: [
      "Reemplazar el código fuente de los controladores web por funciones serverless automáticas.",
      "Definir, vincular y levantar arquitecturas multicontenedor mediante un único archivo YAML declarativo.",
      "Incrementar la velocidad del procesador host asignando núcleos dedicados a cada contenedor.",
      "Impedir que las imágenes de Docker descarguen dependencias desde repositorios en la nube.",
    ],
    correcta: 1,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "facil",
    pregunta:
      "Según las buenas prácticas de desarrollo en Docker, ¿por qué el archivo .env nunca debe subirse al repositorio de código?",
    opciones: [
      "Porque provoca conflictos de merge irreversibles al sincronizar ramas secundarias en Git.",
      "Porque contiene credenciales sensibles y contraseñas reales que quedarían expuestas públicamente.",
      "Porque el motor de Docker impide construir imágenes si detecta archivos ocultos en el proyecto.",
      "Porque desactiva la compresión de capas durante la ejecución de la instrucción docker build.",
    ],
    correcta: 1,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "facil",
    pregunta:
      "En una aplicación SPA (como React) contenerizada, ¿qué componente se utiliza habitualmente para servir los archivos estáticos en producción?",
    opciones: [
      "El motor de base de datos relacional mediante funciones de streaming.",
      "El propio entorno de desarrollo Node.js ejecutando nodemon en vivo.",
      "Una herramienta de monitoreo del sistema operativo anfitrión.",
      "Un servidor web como Nginx que despacha los archivos estáticos compilados.",
    ],
    correcta: 3,
  },

  // =========================================================================
  // EJE 4: CONTENEDORES CON DOCKER (NIVEL 4 - MEDIO)
  // =========================================================================
  {
    nivel: 4,
    tema: "docker",
    dificultad: "media",
    pregunta:
      "¿Qué mecanismos del kernel de Linux utiliza Docker para aislar procesos y limitar el consumo de hardware?",
    opciones: [
      "Hipervisores de tipo 1 combinados con particiones de disco cifradas mediante LUKS.",
      "Namespaces para aislar recursos del sistema y cgroups para restringir memoria y CPU.",
      "Tablas de enrutamiento NAT dinámicas y demonios de emulación de periféricos PCI.",
      "Módulos de compatibilidad binaria que traducen llamadas de sistema en tiempo real.",
    ],
    correcta: 1,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "media",
    pregunta:
      "¿Qué comando se utiliza para abrir una terminal interactiva dentro de un contenedor en ejecución llamado 'backend-app'?",
    opciones: [
      "docker build -t backend-app /bin/sh.",
      "docker logs -f backend-app terminal.",
      "docker exec -it backend-app sh.",
      "docker run -d backend-app --console.",
    ],
    correcta: 2,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "media",
    pregunta:
      "En un Dockerfile, ¿por qué es crítico copiar el archivo 'pom.xml' y descargar dependencias antes de copiar la carpeta 'src'?",
    opciones: [
      "Para aprovechar la caché de capas de Docker y evitar descargar librerías si el código fuente cambia.",
      "Para verificar que la versión de Java del anfitrión coincida exactamente con la del contenedor.",
      "Para impedir que los controladores de Spring Boot accedan a carpetas protegidas del sistema.",
      "Para reducir la cantidad de memoria RAM que el proceso Java solicita durante la compilación.",
    ],
    correcta: 0,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "media",
    pregunta:
      "¿Cuál es la diferencia operativa entre utilizar un volumen nombrado (named volume) y un montaje vinculado (bind mount)?",
    opciones: [
      "El volumen nombrado solo admite archivos de texto y el bind mount admite binarios pesados.",
      "El volumen nombrado se destruye al reiniciar el host y el bind mount es permanente en la nube.",
      "El volumen nombrado lo gestiona Docker en rutas internas y el bind mount mapea una carpeta explícita del host.",
      "El volumen nombrado cifra los datos en reposo y el bind mount desactiva los permisos de usuario.",
    ],
    correcta: 2,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "media",
    pregunta:
      "Si una base de datos corre en Docker con 'ports: [\"5433:5432\"]', ¿cómo debe conectarse DBeaver desde la máquina anfitriona y cómo la API desde la misma red de Compose?",
    opciones: [
      "DBeaver por db:5432 y la API por localhost:5433.",
      "DBeaver por localhost:5433 y la API por db:5432.",
      "Ambos servicios deben conectarse mediante localhost:5432 obligatoriamente.",
      "Ambos servicios deben usar host.docker.internal en el puerto 5433.",
    ],
    correcta: 1,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "media",
    pregunta:
      "En Docker Compose, ¿por qué la directiva 'depends_on' simple resulta insuficiente para garantizar que la API inicie sin errores de conexión?",
    opciones: [
      "Porque depends_on solo espera a que el contenedor de la base inicie, no a que el motor esté listo para recibir peticiones.",
      "Porque depends_on solo opera cuando los contenedores pertenecen a redes virtuales totalmente separadas.",
      "Porque desactiva las variables de entorno inyectadas impidiendo autenticar al usuario de la base.",
      "Porque la instrucción solo es compatible con servicios construidos localmente y no con imágenes descargadas.",
    ],
    correcta: 0,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "media",
    pregunta:
      "¿Qué utilidad tiene el archivo '.env.example' versionado en el repositorio de un proyecto contenerizado?",
    opciones: [
      "Sustituir de manera definitiva al archivo application.properties dentro del ejecutable empaquetado.",
      "Servir como plantilla documentada que especifica qué variables requiere el sistema sin exponer valores confidenciales.",
      "Almacenar los certificados SSL necesarios para establecer conexiones seguras entre contenedores.",
      "Forzar a que Docker Compose asigne direcciones IP estáticas a cada uno de los servicios declarados.",
    ],
    correcta: 1,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "media",
    pregunta:
      "En una arquitectura web contenerizada, ¿por qué la variable de entorno con la URL de la API configurada en React debe apuntar al puerto publicado del host y no al nombre de servicio interno de Docker?",
    opciones: [
      "Porque el código de React se ejecuta en el navegador del cliente externo y no dentro de la red interna de Docker.",
      "Porque el servidor web Nginx bloquea cualquier solicitud que contenga nombres de dominio internos.",
      "Porque los navegadores web modernos no reconocen el protocolo HTTP sobre puertos internos no seguros.",
      "Porque Docker Compose prohíbe que el servicio de frontend comparta la misma red con la API backend.",
    ],
    correcta: 0,
  },

  // =========================================================================
  // EJE 4: CONTENEDORES CON DOCKER (NIVEL 4 - DIFÍCIL)
  // =========================================================================
  {
    nivel: 4,
    tema: "docker",
    dificultad: "dificil",
    pregunta:
      "¿Qué consecuencia técnica tiene el hecho de que los contenedores compartan el kernel del sistema operativo anfitrión?",
    opciones: [
      "Que no es posible ejecutar imágenes nativas basadas en el kernel de Windows sobre un daemon con kernel de Linux.",
      "Que todos los contenedores deben compartir obligatoriamente el mismo espacio de usuarios sin aislamiento.",
      "Que la memoria swap del host queda deshabilitada de forma permanente para todos los procesos anfitriones.",
      "Que el rendimiento de red se degrada en un cincuenta por ciento frente a una máquina virtual clásica.",
    ],
    correcta: 0,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "dificil",
    pregunta:
      "Al detener y reiniciar un contenedor existente mediante los comandos 'docker stop' y 'docker start', ¿qué sucede con los archivos temporales creados en su capa writable?",
    opciones: [
      "Se restablecen a su estado inicial descartando cualquier cambio previo no commiteado.",
      "Se preservan intactos, ya que la capa de escritura solo se destruye cuando el contenedor es eliminado (docker rm).",
      "Se copian automáticamente al registro central de Docker Hub como una nueva versión de respaldo.",
      "Quedan bloqueados en modo solo lectura hasta que se vuelva a ejecutar la instrucción docker build.",
    ],
    correcta: 1,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "dificil",
    pregunta:
      "¿Por qué ejecutar una aplicación Spring Boot dentro de un contenedor utilizando el usuario 'root' representa un riesgo de seguridad crítico?",
    opciones: [
      "Porque impide que el recolector de basura de Java libere memoria en entornos con restricciones de CPU.",
      "Porque si el proceso Java es comprometido por una vulnerabilidad (ej. RCE), el atacante obtiene privilegios de root en el host.",
      "Porque Docker desactiva el firewall interno del contenedor si detecta un identificador de usuario igual a cero.",
      "Porque la máquina virtual de Java requiere permisos especiales de usuario para mapear hilos del sistema operativo.",
    ],
    correcta: 1,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "dificil",
    pregunta:
      "Si un equipo de desarrollo ejecuta 'docker compose down -v' en su entorno de trabajo, ¿cuál es el impacto técnico exacto sobre la base de datos?",
    opciones: [
      "Detiene los servicios y preserva las tablas en los volúmenes para el próximo inicio.",
      "Elimina los contenedores, redes y también los volúmenes nombrados, provocando la pérdida total de los datos almacenados.",
      "Reinicia el motor de base de datos aplicando las migraciones pendientes sin borrar registros.",
      "Desvincula únicamente los montajes de tipo bind mount manteniendo los volúmenes administrados.",
    ],
    correcta: 1,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "dificil",
    pregunta:
      "¿Qué mecanismo técnico permite que dentro de un contenedor el hostname 'host.docker.internal' resuelva la dirección de la máquina física?",
    opciones: [
      "Un túnel SSH inverso establecido automáticamente por la interfaz gráfica de Docker Desktop.",
      "Una entrada DNS especial inyectada en el archivo de hosts que mapea la IP de la interfaz de red del host.",
      "La apertura indiscriminada de todos los puertos del firewall local para tráfico de retorno.",
      "Un proxy inverso que intercepta las peticiones de red y las reenvía por sockets Unix locales.",
    ],
    correcta: 1,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "dificil",
    pregunta:
      "¿Cómo debe estructurarse la directiva 'depends_on' en Compose para que la API espere a que PostgreSQL esté efectivamente listo para aceptar conexiones?",
    opciones: [
      "depends_on: { db: { condition: service_healthy } } en combinación con un healthcheck en el servicio db.",
      "depends_on: [ db ] añadiendo un retardo de sesenta segundos en el comando de inicio de la API.",
      "depends_on: { db: { restart: always } } vinculando los puertos de red mediante el protocolo TCP.",
      "depends_on: [ db_started ] habilitando el modo de inspección continua en el daemon de Compose.",
    ],
    correcta: 0,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "dificil",
    pregunta:
      "Si un token secreto o clave de base de datos fue commiteado accidentalmente en el repositorio Git, ¿cuál es la acción de seguridad correcta?",
    opciones: [
      "Eliminar el archivo del repositorio con un nuevo commit y reiniciar los contenedores locales.",
      "Considerar el secreto comprometido de inmediato, rotarlo en el servicio proveedor y actualizar los archivos .env locales.",
      "Agregar el nombre del archivo al .dockerignore para que la imagen descarte el commit anterior.",
      "Ocultar el historial de commits mediante un rebase interactivo sin modificar la clave en producción.",
    ],
    correcta: 1,
  },
  {
    nivel: 4,
    tema: "docker",
    dificultad: "dificil",
    pregunta:
      "En un archivo .dockerignore para una API Spring Boot, ¿por qué es fundamental incluir las carpetas 'target' y '.git' antes de ejecutar el build?",
    opciones: [
      "Porque evitan transferir gigabytes innecesarios al contexto del daemon y previenen filtrar el historial de control de versiones en la imagen.",
      "Porque el compilador de Maven bloquea el empaquetado del archivo .jar si detecta archivos generados previamente.",
      "Porque los binarios compilados en el host anfitrión son incompatibles con la arquitectura de microprocesador del contenedor.",
      "Porque Docker exige que las imágenes de producción tengan un número impar de capas de solo lectura en su manifiesto.",
    ],
    correcta: 0,
  },

  // =========================================================================
  // EJE 5: ALMACENAMIENTO DE ARCHIVOS (NIVEL 5 - FÁCIL)
  // =========================================================================
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "facil",
    pregunta:
      "¿Por qué los metadatos de un archivo (nombre, tamaño, tipo MIME) deben persistirse en la base de datos independientemente de dónde resida el binario?",
    opciones: [
      "Para permitir búsquedas, paginación y control de permisos sin necesidad de descargar el archivo.",
      "Para evitar que el motor de base de datos desactive los índices B-Tree de las tablas principales.",
      "Para comprimir el flujo binario antes de enviarlo a través de la red local del servidor.",
      "Para cumplir con la restricción obligatoria que exige que toda columna contenga números enteros.",
    ],
    correcta: 0,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "facil",
    pregunta:
      "En plataformas cloud PaaS como Render o Railway, ¿por qué falla almacenar archivos subidos en una carpeta local del disco del servidor?",
    opciones: [
      "Porque los sistemas operativos Linux impiden la creación de carpetas mediante código Java.",
      "Porque los discos son efímeros y borran los archivos en cada despliegue o reinicio del contenedor.",
      "Porque el protocolo HTTP prohíbe la lectura de archivos que no posean formato de texto plano.",
      "Porque las bases de datos relacionales bloquean el acceso al sistema de archivos del anfitrión.",
    ],
    correcta: 1,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "facil",
    pregunta:
      "En Spring Data JPA, ¿qué anotación y tipo de dato Java se emplean para mapear un campo binario de tipo BLOB en una entidad relacional?",
    opciones: [
      "@BinaryData aplicado sobre un atributo de tipo String codificado en formato Base64.",
      "@Column(length = 1000) aplicado sobre una colección de cadenas alfanuméricas.",
      "@Lob aplicado sobre un atributo de tipo byte[] que almacena los bytes en la tabla.",
      "@Transient aplicado sobre un objeto de tipo InputStream vinculado al controlador.",
    ],
    correcta: 2,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "facil",
    pregunta:
      "En MongoDB, ¿cuál es la limitación técnica fundamental del tipo BinData al guardar archivos dentro de un documento?",
    opciones: [
      "Requiere que el archivo se divida obligatoriamente en fragmentos fijos de 255 kilobytes.",
      "Solo permite almacenar imágenes vectoriales y rechaza documentos en formato PDF o ZIP.",
      "Deshabilita la creación de índices compuestos sobre cualquier otro campo de la colección.",
      "El binario sumado a los demás campos del documento no puede superar el límite estricto de 16 MB.",
    ],
    correcta: 3,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "facil",
    pregunta:
      "En un servicio de Object Storage como Amazon S3 o MinIO, ¿cómo se organizan conceptualmente las 'carpetas'?",
    opciones: [
      "No existen carpetas reales en el almacenamiento; son prefijos de texto incluidos en la clave del objeto.",
      "Son subdirectorios físicos creados por el sistema de archivos del servidor en tiempo de ejecución.",
      "Son tablas relacionales auxiliares que registran las claves foráneas de cada usuario del sistema.",
      "Son particiones lógicas en la memoria RAM del bucket asignadas mediante cuotas fijas de disco.",
    ],
    correcta: 0,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "facil",
    pregunta:
      "En el flujo de subida de archivos mediante proxy por backend, ¿cuál es la principal desventaja ante alta concurrencia?",
    opciones: [
      "Impide validar el tamaño máximo y la extensión del archivo antes de transferirlo al almacenamiento.",
      "Satura el ancho de banda del servidor y bloquea hilos de ejecución de la API mientras sube el archivo.",
      "Exige configurar reglas CORS complejas en el bucket de S3 para habilitar peticiones multipart.",
      "Requiere que el cliente web firme criptográficamente cada paquete de red mediante claves privadas.",
    ],
    correcta: 1,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "facil",
    pregunta:
      "En una arquitectura con patrón híbrido, ¿a qué anomalía técnica se denomina 'enlace roto' (broken reference)?",
    opciones: [
      "A un archivo binario que quedó en el bucket sin ningún registro correspondiente en la base de datos.",
      "A una clave de objeto en la base de datos que apunta a un archivo que nunca llegó a subirse al bucket.",
      "A un error de sintaxis en el archivo application.properties que impide iniciar el driver de S3.",
      "A la duplicación de identificadores UUID generada por dos hilos concurrentes del servidor web.",
    ],
    correcta: 1,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "facil",
    pregunta:
      "Al procesar la subida de un archivo, ¿por qué nunca se debe utilizar su nombre original para guardarlo en el almacenamiento?",
    opciones: [
      "Porque los nombres originales impiden que el navegador descargue el binario con compresión gzip.",
      "Porque los buckets de S3 rechazan nombres de archivo que contengan letras en mayúscula o espacios.",
      "Porque el estándar HTTP exige que los archivos almacenados se identifiquen con números secuenciales.",
      "Porque puede provocar colisiones de nombres entre usuarios o ataques de escape de rutas (Path Traversal).",
    ],
    correcta: 3,
  },

  // =========================================================================
  // EJE 5: ALMACENAMIENTO DE ARCHIVOS (NIVEL 5 - MEDIO)
  // =========================================================================
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "media",
    pregunta:
      "¿Cuál es el impacto directo en el rendimiento de un motor de base de datos relacional si se guardan archivos pesados en columnas BLOB?",
    opciones: [
      "Invalida las restricciones de clave primaria y obliga a reiniciar el motor tras cada consulta.",
      "Degrada el uso de la memoria caché, satura el pool de conexiones y ralentiza las consultas generales.",
      "Impide la ejecución de respaldos lógicos mediante utilidades estándar como pg_dump o mysqldump.",
      "Desactiva el aislamiento de transacciones ACID para todas las tablas vinculadas a la entidad.",
    ],
    correcta: 1,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "media",
    pregunta:
      "¿Cuál es la principal ventaja técnica de utilizar MinIO en el entorno de desarrollo local de una aplicación Spring Boot?",
    opciones: [
      "Permite prescindir del cliente AWS SDK ejecutando sentencias SQL directamente sobre los buckets.",
      "Implementa la misma API de Amazon S3, permitiendo usar el mismo código tanto en local como en la nube.",
      "Almacena los archivos en la base de datos relacional sin necesidad de levantar contenedores Docker.",
      "Deshabilita de forma automática las políticas de autenticación y permisos en los endpoints web.",
    ],
    correcta: 1,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "media",
    pregunta:
      "Al implementar una entidad JPA con un campo @Lob byte[], ¿cuál es la buena práctica arquitectónica recomendada para evitar sobrecargar la memoria?",
    opciones: [
      "Mover el campo a una entidad separada vinculada con @OneToOne y configurada con FetchType.LAZY.",
      "Almacenar los bytes en un atributo estático de la clase para compartirlo entre todas las sesiones.",
      "Convertir la columna en un tipo de dato numérico entero que represente el hash MD5 del binario.",
      "Deshabilitar el recolector de basura de Java durante las peticiones que descarguen el archivo.",
    ],
    correcta: 0,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "media",
    pregunta:
      "En la especificación GridFS de MongoDB, ¿cómo se distribuye estructuralmente la información de un archivo que supera los 16 MB?",
    opciones: [
      "El archivo completo se comprime en formato ZIP y se aloja en un único documento de solo lectura.",
      "Se divide en fragmentos de 255 KB en fs.chunks vinculados a un registro de metadatos en fs.files.",
      "Se envía de forma automática a una base de datos relacional secundaria mediante réplicas de red.",
      "Los metadatos se guardan en la memoria RAM y los fragmentos binarios en archivos temporales del host.",
    ],
    correcta: 1,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "media",
    pregunta:
      "¿Por qué la directiva de seguridad estándar exige que los buckets de S3 se configuren con bloqueo total de acceso público?",
    opciones: [
      "Para evitar accesos no autorizados, delegando la descarga privada a URLs prefirmadas con tiempo límite.",
      "Porque los buckets públicos cobran tarifas el triple de caras por cada megabyte transferido al cliente.",
      "Porque el protocolo S3 impide que los navegadores web descarguen archivos desde dominios públicos.",
      "Para obligar a que todos los archivos se descarguen exclusivamente mediante clientes de consola CLI.",
    ],
    correcta: 0,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "media",
    pregunta:
      "¿Cuál es el flujo secuencial correcto al implementar la subida de un archivo mediante URL prefirmada (Presigned URL)?",
    opciones: [
      "El cliente pide autorización a la API, recibe la URL temporal, sube el archivo a S3 y notifica a la API.",
      "El cliente sube el archivo a la API, la API genera la firma digital y el navegador guarda el binario.",
      "El cliente sube el binario a la base de datos, el backend genera la URL y S3 descarga el archivo.",
      "El bucket solicita el archivo al cliente, valida las credenciales en la base y responde con un token.",
    ],
    correcta: 0,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "media",
    pregunta:
      "En el patrón híbrido, ¿qué mecanismo técnico se utiliza para mitigar y depurar los denominados 'objetos huérfanos' en el bucket?",
    opciones: [
      "Configurar triggers de base de datos que cancelen las transacciones de lectura que duren más de un segundo.",
      "Ejecutar tareas programadas (cron jobs) que comparen el bucket contra la base y borren archivos sin registro.",
      "Forzar que el cliente web envíe el archivo dos veces seguidas para confirmar la integridad del binario.",
      "Desactivar el borrado de registros en la base de datos para que ningún enlace quede desvinculado.",
    ],
    correcta: 1,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "media",
    pregunta:
      "Al validar la seguridad de un archivo subido, ¿por qué no es suficiente inspeccionar su extensión (ej. .jpg) o cabecera Content-Type?",
    opciones: [
      "Porque los navegadores web modernos eliminan las extensiones de los archivos antes de enviarlos por red.",
      "Porque tanto la extensión como el Content-Type son enviados por el cliente y pueden ser manipulados fácilmente.",
      "Porque los servidores Linux no reconocen extensiones de archivo que contengan más de tres caracteres.",
      "Porque la especificación de S3 exige que todos los archivos se guarden con tipo de contenido octet-stream.",
    ],
    correcta: 1,
  },

  // =========================================================================
  // EJE 5: ALMACENAMIENTO DE ARCHIVOS (NIVEL 5 - DIFÍCIL)
  // =========================================================================
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "dificil",
    pregunta:
      "Al servir descargas de archivos grandes desde un controlador Spring Boot, ¿por qué debe usarse streaming en lugar de devolver un byte[] completo?",
    opciones: [
      "Porque los arreglos de bytes en Java no son compatibles con el estándar de codificación JSON de las APIs.",
      "Porque cargar el archivo completo en memoria satura la memoria heap de la JVM, provocando errores OutOfMemoryError.",
      "Porque el protocolo HTTP exige que toda transferencia de archivos utilice certificados SSL independientes.",
      "Porque el navegador del usuario bloquea las descargas si el archivo se transfiere en una sola respuesta.",
    ],
    correcta: 1,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "dificil",
    pregunta:
      "En una arquitectura orientada a microservicios con múltiples réplicas escaladas, ¿cuál es el problema de guardar archivos en el disco local del nodo?",
    opciones: [
      "Las distintas instancias no comparten el sistema de archivos local, provocando errores 404 si otro nodo atiende la descarga.",
      "El motor de Docker bloquea la lectura de archivos locales si el número de réplicas en ejecución es impar.",
      "Las consultas de base de datos relacionales quedan bloqueadas hasta que el archivo se sincroniza por red.",
      "El cliente web debe enviar una petición de broadcast a todos los nodos para localizar en cuál quedó el binario.",
    ],
    correcta: 0,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "dificil",
    pregunta:
      "Al descargar un archivo binario almacenado como BLOB en una base de datos relacional, ¿qué técnica evita colapsar la memoria del backend?",
    opciones: [
      "Convertir el arreglo de bytes en una cadena Base64 y enviarla dentro de una cabecera HTTP personalizada.",
      "Utilizar flujos de entrada (InputStream) y transferir los datos al cliente mediante StreamingResponseBody por bloques.",
      "Deshabilitar el pool de conexiones de HikariCP para que cada descarga use una conexión física exclusiva.",
      "Crear una vista temporal en SQL que divida el binario en filas individuales de un solo byte cada una.",
    ],
    correcta: 1,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "dificil",
    pregunta:
      "¿Por qué la lectura de archivos desde GridFS en MongoDB es más eficiente para archivos pesados que recuperarlos desde un campo BinData?",
    opciones: [
      "Porque GridFS permite leer los fragmentos (chunks) por streaming bajo demanda sin cargar el archivo completo en memoria.",
      "Porque GridFS convierte los archivos en colecciones relacionales compatibles con sentencias SQL estándar.",
      "Porque el motor documental deshabilita el cálculo de hashes criptográficos en colecciones de tipo GridFS.",
      "Porque los documentos de la colección fs.chunks quedan almacenados de forma permanente en la memoria RAM del clúster.",
    ],
    correcta: 0,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "dificil",
    pregunta:
      "En una aplicación Spring Boot que utiliza el AWS SDK para interactuar con S3 o MinIO, ¿cómo se verifica la existencia de un objeto sin descargar su contenido?",
    opciones: [
      "Ejecutando el método getObject y descartando el flujo de entrada si el tamaño supera un megabyte.",
      "Ejecutando la operación headObject, que recupera únicamente los metadatos y encabezados HTTP del objeto en el bucket.",
      "Realizando una consulta SQL sobre la tabla interna de índices del servicio de almacenamiento en la nube.",
      "Generando una URL prefirmada de lectura e intentando conectarse mediante un socket TCP de bajo nivel.",
    ],
    correcta: 1,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "dificil",
    pregunta:
      "Al implementar subida directa a un bucket S3 mediante URLs prefirmadas desde una aplicación web frontend (React), ¿qué configuración perimetral es mandatoria en el bucket?",
    opciones: [
      "Configurar políticas de CORS en el bucket para permitir los métodos HTTP (ej. PUT) y el origen del frontend.",
      "Deshabilitar el cifrado de datos en reposo para permitir que el navegador envíe binarios sin firma SSL.",
      "Otorgar permisos de lectura y escritura pública anónima sobre la raíz de todas las carpetas del bucket.",
      "Habilitar el protocolo FTP en los puertos secundarios del servicio de almacenamiento en la nube.",
    ],
    correcta: 0,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "dificil",
    pregunta:
      "Para evitar el problema del enlace roto (broken reference) en el patrón híbrido, ¿cuál es el orden seguro de ejecución de las operaciones?",
    opciones: [
      "Subir primero el binario al Object Storage y solo tras confirmar el código 200 de éxito insertar el registro en la base.",
      "Insertar primero el registro en la base de datos y luego enviar el archivo en segundo plano sin esperar confirmación.",
      "Ejecutar ambas operaciones en una transacción distribuida JTA gestionada por el driver JDBC de la base de datos.",
      "Borrar los metadatos existentes en la base antes de comenzar la transferencia del archivo por la red local.",
    ],
    correcta: 0,
  },
  {
    nivel: 5,
    tema: "archivos",
    dificultad: "dificil",
    pregunta:
      "¿Qué técnica estricta permite validar el tipo de archivo real en el backend antes de persistirlo, neutralizando extensiones falsificadas?",
    opciones: [
      "Comprobar que la extensión del archivo no contenga números ni caracteres en mayúscula en su nombre.",
      "Inspeccionar los números mágicos (magic numbers) en los primeros bytes del binario mediante librerías como Apache Tika.",
      "Enviar el archivo a una cola de mensajería para que un script externo intente abrirlo con un editor de texto.",
      "Verificar que el tamaño en bytes del archivo sea exactamente divisible por el número de bloques del disco.",
    ],
    correcta: 1,
  },
];
