/**
 * BASE DE DATOS DE PREGUNTAS - SIMULACRO ISPC
 * Estructura: 240 preguntas totales
 * Niveles: 1 (Junior), 2 (Mid), 3 (Senior)
 * Temas:
 */

export const bancoPreguntas = [
  // ==========================================
  // NIVEL 1: Conceptos Base (Gestión de Proyectos)
  // ==========================================
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿Qué es un proyecto según la definición general de los apuntes?",
    opciones: [
      "Una actividad rutinaria y repetitiva de la empresa",
      "Una iniciativa para generar un producto, servicio o resultado concreto",
      "Un proceso administrativo sin fecha de finalización",
      "Un conjunto de reglas para contratar personal",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿Cuál es la definición exacta de proyecto según el PMBOK?",
    opciones: [
      "Un conjunto de actividades con un coste determinado",
      "Un desafío temporal para enfrentar la competencia",
      "Una hoja de ruta aprobada por los directivos",
      "Un esfuerzo temporal que se lleva a cabo para crear un resultado único",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "¿Qué elementos enfatiza Pablo Lledó en su definición de proyecto?",
    opciones: [
      "La calidad del código y las pruebas unitarias",
      "La documentación exhaustiva y los informes de avance",
      "Resultado deseado, fecha límite y presupuesto limitado",
      "Liderazgo, negociación y toma de decisiones",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "Según el autor Martín, ¿a qué están dirigidas las actividades de un proyecto?",
    opciones: [
      "A crear un futuro deseado con un coste y plazo determinado",
      "A corregir errores de sistemas informáticos anteriores",
      "A contratar proveedores externos para la organización",
      "A organizar las vacaciones del personal administrativo",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿Qué significa que un proyecto tenga naturaleza temporal?",
    opciones: [
      "Que no tiene un final claro",
      "Que tiene un principio y un final definidos",
      "Que se puede realizar en cualquier momento del año",
      "Que los resultados desaparecen después de un tiempo",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿Cómo se define un proyecto interno según su origen?",
    opciones: [
      "Aquel cuyo objetivo está orientado a la propia organización que lo promueve",
      "Aquel cuyo objetivo se orienta al mercado externo",
      "Aquel que se desarrolla a pedido de un cliente",
      "Aquel que se financia con inversores extranjeros",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "Es un ejemplo de un proyecto externo:",
    opciones: [
      "La implementación de un nuevo sistema de gestión interno",
      "La capacitación obligatoria para el personal de la empresa",
      "El rediseño de la oficina del Director del Proyecto",
      "La construcción de una carretera para un ente gubernamental",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "En la gestión de proyectos, ¿qué permite visualizar la Línea de Base?",
    opciones: [
      "La cantidad de empleados contratados",
      "La lista completa de todos los interesados del proyecto",
      "El desempeño real frente al presupuesto planificado",
      "Los objetivos estratégicos de la empresa a largo plazo",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿A qué tipo de resultado se refiere un Servicio?",
    opciones: [
      "Un componente que forma parte de otro producto",
      "La entrega de una conclusión o documento final",
      "Un software instalado y funcionando sin errores",
      "La capacidad de realizar una tarea o mejorar líneas existentes",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿Cuándo se considera que un proyecto alcanza su final?",
    opciones: [
      "Cuando se logran los objetivos o la necesidad ha desaparecido",
      "Cuando se gasta todo el presupuesto asignado",
      "Cuando el director del proyecto decide renunciar",
      "Cuando pasa un año desde que se inició la planificación",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "La gestión de proyectos comparte las mismas bases que la administración general, que son:",
    opciones: [
      "Venta, compra, logística y marketing",
      "Programación, diseño, testeo y mantenimiento",
      "Planificación, organización, dirección, ejecución y control",
      "Inicio, desarrollo, cierre y evaluación",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "Dentro de los 5 elementos clave de la gestión, ¿qué abarca el Conocimiento?",
    opciones: [
      "Saber usar el software de gestión únicamente",
      "Conocer el nombre de todos los accionistas de la empresa",
      "Saber negociar y resolver conflictos en el equipo",
      "Dominio del área técnica y del marco teórico como el PMBOK",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "Dentro de los 5 elementos clave, ¿a qué se refieren las Habilidades?",
    opciones: [
      "Al manejo de diagramas de Gantt y hojas de cálculo",
      "Al liderazgo, comunicación, negociación y toma de decisiones",
      "A la recopilación de datos sobre eficiencia y desempeño",
      "A las metodologías de estimación y análisis de riesgos",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "Según la documentación, los proyectos son el vehículo a través del cual las organizaciones:",
    opciones: [
      "Ejecutan su estrategia y generan valor",
      "Ahorran dinero en impuestos y regulaciones",
      "Contratan nuevos gerentes de marketing",
      "Escriben manuales de usuario para sus productos",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "Un objetivo que persiguen los proyectos organizacionales es:",
    opciones: [
      "Mantener las mismas operaciones por tiempo indefinido",
      "Evitar los cambios tecnológicos para no gastar recursos",
      "Responder a oportunidades o amenazas del mercado",
      "Reducir la comunicación con el cliente externo",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿Por qué se dice que los recursos de un proyecto son limitados?",
    opciones: [
      "Porque el director del proyecto no sabe cómo pedirlos",
      "Porque el tiempo, el dinero y las personas siempre tienen restricciones",
      "Porque solo se pueden usar recursos internos de la empresa",
      "Porque el PMBOK prohíbe el uso de demasiadas herramientas",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿Cómo se mide hoy el éxito de un proyecto organizacional?",
    opciones: [
      "Por el valor generado para la empresa",
      "Solo por cumplir el cronograma original al pie de la letra",
      "Por la cantidad de documentos que se archivaron al final",
      "Por haber usado la metodología Scrum correctamente",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "¿A qué concepto pertenece la aplicación de conocimientos, habilidades y herramientas para satisfacer requisitos?",
    opciones: [
      "Planificación estratégica",
      "Producción industrial",
      "Metodología ágil",
      "Gestión de proyectos",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta: "¿Qué significa que el resultado de un proyecto sea Único?",
    opciones: [
      "Que solo lo puede ver una persona",
      "Que se hace una sola vez y no funciona nunca más",
      "Que no hay dos proyectos idénticos",
      "Que no requiere mantenimiento futuro",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "intro",
    pregunta:
      "La gestión del desempeño real vs. presupuesto es tarea fundamental de:",
    opciones: [
      "Los proveedores de hardware",
      "El Director del Proyecto",
      "El equipo técnico de desarrollo únicamente",
      "Los competidores externos del mercado",
    ],
    correcta: 1,
  },
  // ==========================================
  // NIVEL 1: Las 4 Variables (Gestión de Proyectos) - REESTRUCTURADO
  // Distribución de respuestas: 0: 5 | 1: 5 | 2: 5 | 3: 5
  // ==========================================
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "¿Quién es el autor que define las 4 variables clave de la gestión permanente?",
    opciones: [
      "Ian Sommerville",
      "Barry Boehm",
      "Pablo Lledó",
      "Winston Royce",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "¿Cuáles son las 4 variables que el director de proyecto debe gestionar?",
    opciones: [
      "Tiempos, Costos, Alcance y Calidad",
      "Planificación, Riesgo, Liderazgo y Cierre",
      "Inicio, Desarrollo, Pruebas y Entrega",
      "Ventas, Compras, Marketing y Recursos",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta: "¿Qué abarca específicamente la variable de Tiempos?",
    opciones: [
      "La velocidad de internet de los servidores",
      "Los plazos y el cronograma del proyecto",
      "La cantidad de horas extras pagadas",
      "El tiempo que el cliente demora en pagar",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta: "¿A qué se refiere la variable de Costos?",
    opciones: [
      "Al precio de venta del producto final",
      "Al salario base de los programadores",
      "A las pérdidas por errores técnicos",
      "Al presupuesto y los recursos disponibles",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta: "La variable de Alcance define principalmente:",
    opciones: [
      "A cuántas personas llegará la publicidad",
      "El tiempo de garantía del software",
      "Los entregables y los límites del proyecto",
      "La cantidad de documentos impresos",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta: "La variable de Calidad se encarga de gestionar:",
    opciones: [
      "La satisfacción personal del director",
      "Los estándares y el resultado esperado",
      "Que no existan competidores en el mercado",
      "La estética y los colores del logotipo",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "Según Lledó, cuando una de las variables cambia, ¿qué sucede con las demás?",
    opciones: [
      "Se mantienen exactamente iguales",
      "Desaparecen automáticamente",
      "El proyecto debe cancelarse de inmediato",
      "Las otras tres variables la restringen",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "¿Cuál es la función principal del director respecto a estas variables?",
    opciones: [
      "Gestionarlas equilibrándolas permanentemente",
      "Elegir solo una y olvidar las otras",
      "Dejar que el cliente decida sobre todas ellas",
      "Eliminar los costos para ganar más tiempo",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "Si el cliente decide aumentar el Alcance de un proyecto, es probable que:",
    opciones: [
      "La Calidad mejore mágicamente",
      "El proyecto termine más rápido",
      "Los Costos o los Tiempos también deban aumentar",
      "No se requiera ninguna planificación extra",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "Si se reduce el presupuesto (Costo), para mantener el equilibrio se debería:",
    opciones: [
      "Aumentar el alcance del proyecto",
      "Reducir el alcance o ajustar la calidad",
      "Acortar los plazos del cronograma",
      "No hacer cambios y trabajar el doble",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "¿Cuál de estos elementos NO es una de las 4 variables clave de Lledó?",
    opciones: ["Calidad", "Costos", "Alcance", "Ubicación geográfica"],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "¿Qué significa 'equilibrar las variables' en gestión de proyectos?",
    opciones: [
      "Ajustar los factores para cumplir los objetivos sin desbordarse",
      "Darle la misma importancia al dinero que al diseño",
      "Hacer que el equipo trabaje la misma cantidad de horas",
      "Que todos los stakeholders cobren lo mismo",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "La definición de los 'límites' de lo que se va a hacer pertenece a:",
    opciones: [
      "Variable de Costo",
      "Variable de Alcance",
      "Variable de Tiempo",
      "Variable de Calidad",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta: "Cuando hablamos de 'cronograma' nos referimos directamente a:",
    opciones: [
      "La variable de Costos",
      "La variable de Calidad",
      "La variable de Tiempos",
      "La gestión de interesados",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "¿Qué sucede si el director intenta manejar las 4 variables al mismo tiempo?",
    opciones: [
      "Es el objetivo, pero gestionar implica equilibrar restricciones",
      "Es imposible y no debe intentarse",
      "Las variables se anulan entre sí",
      "El proyecto se vuelve infinito",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "El cumplimiento de normativas legales dentro de un proyecto suele ser parte de:",
    opciones: [
      "La variable de Tiempos",
      "La variable de Costos",
      "La variable de Liderazgo",
      "La variable de Calidad",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "¿Qué recurso es parte fundamental de la variable Costos según el material?",
    opciones: [
      "Los servidores remotos únicamente",
      "Las personas y el dinero disponible",
      "Las oficinas de la organización",
      "La documentación de lecciones aprendidas",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta: "El 'resultado deseado' es una forma de medir:",
    opciones: [
      "La variable de Costo",
      "La variable de Tiempo",
      "La variable de Calidad",
      "La variable de RRHH",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta:
      "Una reducción agresiva del Tiempo sin cambiar el Alcance suele afectar negativamente:",
    opciones: [
      "A los Costos (requiere más gente) o a la Calidad",
      "A la competencia",
      "Solamente a la variable de Ventas",
      "A la ubicación de los servidores",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "variables",
    pregunta: "¿Por qué se llaman variables permanentes?",
    opciones: [
      "Porque no cambian nunca durante el proyecto",
      "Porque se definen en el acta de cierre únicamente",
      "Porque el PMBOK obliga a memorizarlas",
      "Porque deben estar en la mente del director durante todo el ciclo de vida",
    ],
    correcta: 3,
  },
  // ==========================================
  // NIVEL 1: Equipo e Interesados (Gestión de Proyectos) - REESTRUCTURADO
  // Distribución de respuestas: 0: 5 | 1: 5 | 2: 5 | 3: 5
  // ==========================================
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "¿Quién es el máximo responsable de la gestión integral de un proyecto?",
    opciones: [
      "El Director del proyecto",
      "El cliente externo",
      "El representante del Gobierno",
      "Los vendedores y socios",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "¿Qué rol debe cumplir el director del proyecto en todo equipo, más allá de su autoridad formal?",
    opciones: [
      "Administrador de bases de datos",
      "Proveedor de hardware",
      "Líder",
      "Accionista mayoritario",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "¿De qué se encarga el 'Personal de dirección' dentro del equipo?",
    opciones: [
      "De realizar las pruebas de código",
      "De la atención al público únicamente",
      "De la compra de insumos de oficina",
      "De la planificación y el control del proyecto",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta: "¿Cuál es la función principal de los 'Expertos de apoyo'?",
    opciones: [
      "Brindar conocimiento técnico especializado",
      "Financiar el proyecto con capital propio",
      "Tomar decisiones sobre el presupuesto total",
      "Firmar los contratos legales con el estado",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta: "Los representantes del cliente o usuario tienen la tarea de:",
    opciones: [
      "Desarrollar el software de principio a fin",
      "Trasladar las necesidades del cliente al equipo",
      "Controlar el horario de ingreso de los empleados",
      "Buscar nuevos inversores para la empresa",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "Dentro del equipo de proyecto, ¿quiénes son considerados externos?",
    opciones: [
      "Los analistas de riesgo internos",
      "El Director de proyecto y su personal de dirección",
      "Los expertos de apoyo técnico",
      "Vendedores, socios y organizaciones externas",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "¿Qué significa el término 'Stakeholders' en gestión de proyectos?",
    opciones: [
      "Las herramientas de software utilizadas",
      "Las fases finales del cronograma",
      "Los interesados o personas afectadas por el proyecto",
      "Los tipos de servidores que usa el sistema",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "¿Cuál es una de las responsabilidades centrales del director frente a los interesados?",
    opciones: [
      "Gestionar sus expectativas",
      "Pagarles un sueldo fijo mensual",
      "Aceptarle todas las peticiones sin planificar",
      "Ignorarlos hasta que el proyecto termine",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta: "¿Cómo suelen ser los intereses de los distintos stakeholders?",
    opciones: [
      "Siempre idénticos y cooperativos",
      "Diferentes o incluso contradictorios",
      "Únicamente económicos y financieros",
      "Irrelevantes para el éxito del proyecto",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "¿Qué stakeholder se define como el beneficiario directo del producto o servicio?",
    opciones: ["Inversores", "Gobierno", "Comunidad", "Clientes"],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta: "El 'Gobierno' como interesado se encarga principalmente de:",
    opciones: [
      "Regulaciones, normativas y marcos legales",
      "Elegir el nombre del producto final",
      "Trabajar en el equipo de desarrollo diariamente",
      "Promocionar el proyecto en redes sociales",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "¿A qué interesado le importa el impacto social y ambiental del proyecto?",
    opciones: [
      "Vendedores",
      "Comunidad",
      "Expertos de apoyo",
      "Personal de dirección",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta: "¿Cuál es el rol de los 'Inversores' como stakeholders?",
    opciones: [
      "Definir el diseño visual de la interfaz",
      "Liderar técnicamente al equipo de programadores",
      "Financiar, patrocinar o aportar al proyecto",
      "Firmar el manual de usuario del software",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "La entidad que promueve el proyecto se identifica como el stakeholder:",
    opciones: ["Inversores", "Gobierno", "Comunidad", "Organización"],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta: "Es fundamental que el director sea participativo y consulte a:",
    opciones: [
      "Los expertos involucrados en el proyecto",
      "Los competidores de la empresa",
      "A personas ajenas al rubro de software",
      "Solamente a sus jefes directos",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "Un stakeholder cuya expectativa no sea gestionada correctamente puede:",
    opciones: [
      "Hacer que el código funcione mejor automáticamente",
      "Eliminar el presupuesto del proyecto sin previo aviso",
      "Convertirse en un riesgo para el éxito del proyecto",
      "Ocultar las facturas de gastos a la empresa",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "¿Qué grupo se asegura de trasladar los requerimientos de uso diario al equipo técnico?",
    opciones: [
      "Vendedores externos",
      "La comunidad vecinal",
      "Los inversores de capital",
      "Los usuarios representados en el equipo",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta: "Un equipo de proyecto se caracteriza por ser:",
    opciones: [
      "Un grupo de personas con los mismos títulos habilitantes",
      "Personas con roles y responsabilidades diferenciadas",
      "Solamente gente que vive en el mismo edificio",
      "Personas que no conocen los objetivos del plan",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "En los proyectos externos, los stakeholders principales suelen estar:",
    opciones: [
      "Solamente en la planta baja de la empresa",
      "Dentro de los archivos de lecciones aprendidas",
      "Fuera de la organización",
      "En otros países obligatoriamente",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "equipo",
    pregunta:
      "El liderazgo en la gestión de proyectos es necesario porque ayuda a:",
    opciones: [
      "La toma de decisiones y la gestión efectiva del equipo",
      "Forzar al equipo a trabajar sin descanso",
      "Reducir los impuestos que paga la empresa",
      "Aumentar el precio de venta final",
    ],
    correcta: 0,
  },
  // ==========================================
  // NIVEL 2: Ciclos de Vida (Gestión de Proyectos) - REESTRUCTURADO
  // Distribución de respuestas: 0: 5 | 1: 5 | 2: 5 | 3: 5
  // ==========================================
  {
    nivel: 2,
    tema: "ciclo",
    pregunta: "¿Qué representan las etapas clave en la gestión de un proyecto?",
    opciones: [
      "El organigrama de la empresa promotora",
      "El manual de usuario del software",
      "La lista de precios de los proveedores",
      "El denominado 'ciclo de vida del proyecto'",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "Sobre el ciclo de vida, ¿qué característica menciona el apunte respecto a la linealidad de las etapas?",
    opciones: [
      "Deben ser siempre lineales y sin saltos",
      "No existen etapas, solo existe la ejecución",
      "No siempre son lineales: pueden superponerse o ejecutarse de forma iterativa",
      "Solo son lineales en proyectos de desarrollo de software",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta: "¿Qué comprende específicamente la Etapa 1: Inicio?",
    opciones: [
      "La definición formal del proyecto y la autorización para comenzar",
      "El desarrollo del cronograma detallado",
      "La contratación del personal de limpieza",
      "La entrega formal del resultado al cliente",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta: "¿Cuáles son los documentos clave de la etapa de Inicio?",
    opciones: [
      "Facturas de compra y contratos de alquiler",
      "Acta de constitución y la identificación de stakeholders",
      "Diagramas de Gantt y presupuestos de riesgos",
      "Manuales técnicos y guías de estilos CSS",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "¿Cuál es la etapa más extensa e importante del ciclo según el material?",
    opciones: [
      "Etapa de Inicio",
      "Etapa de Cierre",
      "Etapa de Planificación",
      "Etapa de Comunicación",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "¿Qué debe incluir un Plan de Gestión del Proyecto desarrollado en la planificación?",
    opciones: [
      "Solo el listado de nombres del equipo",
      "Únicamente los requerimientos de hardware",
      "La biografía de los fundadores de la organización",
      "Plan de alcance, cronograma, presupuesto, riesgos, calidad y comunicaciones",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta: "¿Qué ocurre fundamentalmente en la Etapa 3: Ejecución?",
    opciones: [
      "Se realiza el trabajo definido en el plan y se generan los entregables",
      "Se detiene el proyecto para analizar costos",
      "Se decide si el proyecto es viable o no",
      "Se archivan todos los documentos para el cierre",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "Durante la ejecución, el Director del Proyecto debe gestionar activamente:",
    opciones: [
      "La estrategia de marketing externa únicamente",
      "Al equipo, las comunicaciones y los recursos",
      "El servidor de bases de datos personal",
      "La competencia del mercado",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta: "¿En qué consiste la Etapa 4: Seguimiento y Control?",
    opciones: [
      "En esperar a que el proyecto termine para evaluar",
      "En controlar que el cliente pague a tiempo",
      "En monitorear el progreso real, compararlo con el plan e identificar desvíos",
      "En crear un nuevo acta de constitución cada semana",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "¿Cómo se desarrolla temporalmente la etapa de Seguimiento y Control?",
    opciones: [
      "Antes de iniciar la planificación",
      "Únicamente después del cierre",
      "Solo cuando hay problemas graves de presupuesto",
      "En paralelo con la ejecución",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta: "¿Qué tareas comprende la Etapa 5: Cierre?",
    opciones: [
      "Entrega formal al cliente, lecciones aprendidas y liberación del equipo",
      "Reiniciar el ciclo de planificación",
      "Contratación de más personal para nuevos proyectos",
      "Modificar el alcance original del proyecto",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "Respecto a los proyectos que fallan, ¿cuál es la observación principal del material?",
    opciones: [
      "Suelen fallar por falta de esfuerzo físico",
      "Suelen hacerlo por una planificación insuficiente",
      "Fallan siempre por culpa exclusiva del cliente",
      "Nunca fallan si se usa la tecnología más moderna",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "¿Cuál es el rol estratégico de los proyectos en las organizaciones?",
    opciones: [
      "Sustituir a todos los empleados por software",
      "Evitar el contacto con stakeholders externos",
      "Ser el vehículo para ejecutar la estrategia y generar valor",
      "Reducir la calidad para ahorrar presupuesto",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "¿Qué significa el patrocinio directivo (Sponsor) en el ciclo de vida?",
    opciones: [
      "Alguien que compra el producto al final",
      "Un software que automatiza tareas",
      "Un competidor que observa el proyecto",
      "Apoyo institucional para asegurar recursos y respaldo",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "Al alinear un proyecto con la estrategia global de la organización, se busca:",
    opciones: [
      "Generar valor para la empresa",
      "Aumentar la burocracia interna",
      "Ignorar las necesidades del mercado",
      "Eliminar el acta de constitución",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "La identificación de las áreas de mejora y éxitos se registra en el cierre mediante:",
    opciones: [
      "El cronograma real",
      "La documentación de lecciones aprendidas",
      "El plan de riesgos",
      "El contrato con los vendedores",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "¿Qué se busca minimizar en la planificación mediante una inversión de tiempo adecuada?",
    opciones: [
      "La cantidad de entregables",
      "El número de reuniones con el equipo",
      "Los problemas durante la ejecución",
      "La cantidad de clientes externos",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta: "La fase de Operación y Mantenimiento suele caracterizarse por:",
    opciones: [
      "Ser la etapa más corta",
      "No requerir ningún tipo de gestión",
      "Ocurrir antes de la definición de requisitos",
      "Ser generalmente la fase más larga del ciclo",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "¿Qué implica tomar acciones correctivas en Seguimiento y Control?",
    opciones: [
      "Realizar ajustes para corregir desviaciones respecto al plan",
      "Volver a la etapa de inicio obligatoriamente",
      "Despedir a todo el personal involucrado",
      "Ocultar los errores a los directivos",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "ciclo",
    pregunta:
      "El éxito de un proyecto organizacional se mide hoy principalmente por:",
    opciones: [
      "Solo por el bajo costo final",
      "Por el valor generado para la organización",
      "Por no haber tenido cambios en los plazos",
      "Por la cantidad de expertos involucrados",
    ],
    correcta: 1,
  },
  // ==========================================
  // NIVEL 2: Manifiesto Ágil (Gestión de Proyectos) - REESTRUCTURADO
  // Distribución de respuestas: 0: 5 | 1: 5 | 2: 5 | 3: 5
  // ==========================================
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "¿En qué fecha y por cuántos profesionales fue acuñado El Manifiesto Ágil?",
    opciones: [
      "Enero de 1995, por la W3C",
      "Agosto de 2011, por Mark Otto y Jacob Thornton",
      "Mayo de 1986, por Barry Boehm",
      "Febrero de 2001, por diecisiete profesionales",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "Según los 4 valores ágiles, ¿qué se valora más que los procesos y las herramientas?",
    opciones: [
      "A los individuos y las interacciones",
      "La documentación técnica detallada",
      "El seguimiento estricto del plan",
      "La negociación de contratos legales",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "Completar el valor: 'Software en funcionamiento por encima de...'",
    opciones: [
      "El presupuesto del cliente",
      "Una documentación completa",
      "Cualquier tipo de reunión",
      "La velocidad de los servidores",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "¿Qué es más vital que la negociación de un contrato según el manifiesto?",
    opciones: [
      "El diseño de la base de datos",
      "La firma del sponsor del proyecto",
      "La colaboración con el cliente",
      "El análisis de riesgos en cascada",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "Frente a seguir un plan preestablecido, el Manifiesto Ágil prioriza:",
    opciones: [
      "Ignorar las peticiones del usuario",
      "Documentar cada cambio en la arquitectura",
      "Responder a cualquier cambio que se produzca",
      "Finalizar el proyecto lo antes posible",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta: "¿Cuál es la medida principal de progreso en un desarrollo ágil?",
    opciones: [
      "La cantidad de horas de trabajo acumuladas",
      "Un software que funciona",
      "El número de líneas de código escritas",
      "La aprobación parcial del Scrum Master",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "El principio N° 10 de la agilidad dice que la simplicidad es el arte de:",
    opciones: [
      "Escribir código en pocas palabras",
      "Diseñar interfaces con pocos colores",
      "Maximizar la cantidad de trabajo no realizado",
      "Eliminar por completo la documentación",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "¿Cuál es el método más eficiente para transmitir información según los principios ágiles?",
    opciones: [
      "La conversación cara a cara",
      "Correos electrónicos detallados",
      "Manuales de procedimiento impresos",
      "Notificaciones a través del software de gestión",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "Según el Manifiesto, ¿cómo deben actuar los equipos ante los cambios en requisitos?",
    opciones: [
      "Rechazarlos si ocurren después de la planificación",
      "Cobrarlos como extras por fuera del presupuesto",
      "Esperar a la fase de cierre para implementarlos",
      "Acogerlos con beneplácito, incluso en etapas tardías",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "¿Qué promueven los procesos ágiles respecto al desarrollo sostenible?",
    opciones: [
      "Trabajar al máximo antes de cada entrega",
      "Mantener un ritmo constante de forma indefinida",
      "Gastar el presupuesto en servidores ecológicos",
      "Reducir las pruebas de resistencia del software",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "¿De dónde surgen las mejores arquitecturas, requisitos y diseños?",
    opciones: [
      "De equipos auto-organizados",
      "De un plan detallado del director del proyecto",
      "De los vendedores y socios externos únicamente",
      "De las herramientas CASE más avanzadas",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "El principio N° 12 indica que, a intervalos regulares, el equipo debe reflexionar sobre:",
    opciones: [
      "El presupuesto gastado hasta el momento",
      "Quién cometió más errores en el código",
      "Los nuevos proyectos que lanzará la competencia",
      "Cómo ser más eficaz y sintonizar su comportamiento",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "¿Cuál es el tamaño recomendado para grupos ágiles según la descripción?",
    opciones: [
      "Entre 20 y 30 integrantes",
      "Grupos grandes dispersos en varios edificios",
      "Solamente 2 integrantes: cliente y desarrollador",
      "Grupos pequeños, menores a 10 integrantes",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta: "En una metodología ágil, el cliente es considerado:",
    opciones: [
      "Parte activa del equipo de desarrollo",
      "Alguien a quien se ve solo al inicio y al final",
      "La persona encargada de redactar los manuales",
      "Un stakeholder que no puede proponer cambios",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta: "Una característica clave del desarrollo de software ágil es:",
    opciones: [
      "Fuerte énfasis en la arquitectura inicial",
      "Mucha documentación exhaustiva de procesos",
      "Entregas pequeñas con ciclos rápidos y etapas cortas",
      "Contratos tradicionales rígidos e inamovibles",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta: "El enfoque ágil es especialmente útil cuando hay:",
    opciones: [
      "Requisitos fijos que no cambiarán por años",
      "Un alto nivel de incertidumbre o requisitos cambiantes",
      "Un presupuesto ilimitado y mucho tiempo disponible",
      "Personal con poca experiencia técnica",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta: "Los procesos ágiles se basan en heurísticas provenientes de:",
    opciones: [
      "Teorías matemáticas del siglo XIX",
      "Regulaciones gubernamentales internacionales",
      "Sistemas de producción en serie pesados",
      "Prácticas de producción de código",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta: "¿Qué significa que el proceso sea 'cooperativo'?",
    opciones: [
      "Que los socios aportan el dinero a tiempo",
      "Que el equipo técnico trabaja sin intervención del usuario",
      "Que cliente y desarrolladores trabajan juntos constantemente",
      "Que todos los empleados deben ser expertos en gestión",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta: "¿Qué aumenta la agilidad del equipo según el principio N° 9?",
    opciones: [
      "La atención continua a la excelencia técnica y el buen diseño",
      "La compra de nuevos equipos de hardware",
      "El aumento del personal administrativo",
      "Reducir las reuniones semanales",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "agile",
    pregunta:
      "¿Cuál de estas opciones define un proceso de desarrollo como Ágil?",
    opciones: [
      "Cualquier proceso que no use diagramas de Gantt",
      "Aquel que alinee su metodología con el Manifiesto Ágil",
      "Todo proyecto que dure menos de seis meses",
      "Solo proyectos desarrollados por startups tecnológicas",
    ],
    correcta: 1,
  },
  // ==========================================
  // NIVEL 2: Modelos de Desarrollo (Gestión de Proyectos) - REESTRUCTURADO
  // Distribución de respuestas: 0: 5 | 1: 5 | 2: 5 | 3: 5
  // ==========================================
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Cómo se caracterizan los denominados 'Modelos Tradicionales' de desarrollo?",
    opciones: [
      "Por su énfasis en la planificación completa al inicio y documentación exhaustiva",
      "Por no requerir documentación en ninguna etapa del proceso",
      "Por ser extremadamente flexibles ante cualquier cambio repentino",
      "Por carecer de fases predefinidas u orden lógico",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta: "¿Quién propuso originalmente el Modelo en Cascada en 1970?",
    opciones: [
      "Ken Schwaber",
      "Ian Sommerville",
      "Barry Boehm",
      "Winston W. Royce",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "En el modelo en cascada, ¿cuándo se permite el inicio de una etapa?",
    opciones: [
      "Solo cuando el cliente lo solicita formalmente",
      "Al finalizar la anterior, tomando como insumo sus datos producidos",
      "Al mismo tiempo que la anterior para ganar velocidad operativa",
      "Únicamente después de haber entregado el software completo",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Cuál es una de las desventajas críticas del modelo en cascada según la documentación?",
    opciones: [
      "El cliente no ve el producto hasta las etapas finales",
      "Es demasiado simple para ser gestionado en proyectos reales",
      "No genera ningún tipo de documentación durante su ciclo",
      "Requiere obligatoriamente que el equipo sea menor a 10 personas",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Qué problema del modelo en cascada busca resolver el Modelo de Prototipado?",
    opciones: [
      "La falta de programadores expertos en la organización",
      "El alto costo de las herramientas de bases de datos",
      "La dificultad de definir requisitos completos y precisos al inicio",
      "La comunicación constante y diaria con el Scrum Master",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "Según las definiciones de Pressman, el prototipado es básicamente un proceso de:",
    opciones: [
      "Planificación sin cambios permitidos",
      "Documentación técnica rigurosa paso a paso",
      "Instalación directa en el entorno real del cliente",
      "Prueba y error para validar requerimientos",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Qué combina el Modelo Incremental en su enfoque de desarrollo de sistemas?",
    opciones: [
      "Elementos de la cascada con la filosofía iterativa del prototipado",
      "Recursos externos ilimitados con plazos de tiempo variables",
      "La agilidad extrema de XP con los análisis de riesgos tradicionales",
      "Documentación secuencial con testeos realizados solo al cierre",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "En el Modelo Incremental, el primer incremento desarrollado se denomina:",
    opciones: [
      "Módulo de arquitectura inicial",
      "Núcleo funcional básico del sistema",
      "Manual de procedimiento operativo",
      "Incremento N de validación final",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Cuál es el eje central de cada iteración en el Modelo en Espiral de Barry Boehm?",
    opciones: [
      "La velocidad absoluta de entrega del código fuente",
      "La cantidad de hitos presentes en el diagrama de Gantt",
      "El análisis y la gestión explícita del riesgo",
      "La reducción forzada de las variables de calidad",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "Los 4 cuadrantes de cada ciclo en espiral son: Planificación, Riesgos, Ingeniería y...",
    opciones: [
      "Evaluación del cliente",
      "Negociación del contrato final",
      "Desarrollo de incrementos cortos",
      "Cierre técnico del acta",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿A qué rol de Scrum pertenece la responsabilidad de gerenciar los objetivos y el retorno de valor?",
    opciones: [
      "Stakeholder Externo",
      "Dev Team",
      "Scrum Master",
      "Product Owner",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Cuál es la función principal del Scrum Master dentro de un equipo?",
    opciones: [
      "Definir la arquitectura de bases de datos del sistema",
      "Coordinar y facilitar al equipo eliminando impedimentos",
      "Aportar el capital económico para el desarrollo",
      "Realizar el mantenimiento técnico de los servidores",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta: "¿Para quién resulta óptimo y eficaz el uso del método Kanban?",
    opciones: [
      "Para quienes priorizan los manuales técnicos pesados",
      "Solo para equipos que operan sin ningún tipo de control",
      "Para quienes valoran los flujos visuales y las listas de tareas",
      "Para proyectos que no requieren participación del cliente",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Cuáles son las 3 etapas o estados clásicos de un tablero visual Kanban?",
    opciones: [
      "Idea, Code y Deploy",
      "Start, Process y Finished",
      "Plan, Execute y Validate",
      "To do, Doing y Done",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Cuál es el foco u objetivo principal de la metodología Lean Software Development?",
    opciones: [
      "Generar la mayor cantidad de artefactos posibles",
      "Identificar y eliminar los desperdicios en la producción",
      "Mantener reuniones de 2 horas para analizar el progreso",
      "Aumentar el número de departamentos de gestión",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Qué significa el concepto MVP dentro de la filosofía de trabajo Lean?",
    opciones: [
      "Producto Mínimo Viable (Minimum Viable Product)",
      "Manager Variable Program (Programa de Variables)",
      "Módulo de Verificación Principal",
      "Modelado Visual Predictivo",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Qué componente de las metas SMART exige definir plazos claros para evitar la demora injustificada?",
    opciones: [
      "A (Attainable - Alcanzable)",
      "M (Measurable - Medible)",
      "S (Specific - Específica)",
      "T (Time-related - Temporalmente definida)",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "La programación extrema (XP) tiene como una de sus prioridades técnicas:",
    opciones: [
      "Garantizar la mayor cantidad de documentación secuencial",
      "Desarrollar prototipos que se descartan cada pocos días",
      "Asegurar la alta calidad del software y respuesta inmediata",
      "Evitar las conversaciones cara a cara con el cliente",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Cuál es la utilidad de aplicar la sigla SMART en un equipo de proyecto?",
    opciones: [
      "Decidir quién será el próximo Director de Proyecto",
      "Definir metas de forma objetiva, medible y realista",
      "Garantizar que el sistema use estilos de Bootstrap",
      "Eliminar por completo el análisis de riesgos técnicos",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "modelos",
    pregunta:
      "¿Cuál es un requisito humano vital para que el método Kanban tenga éxito operativo?",
    opciones: [
      "Que no exista ninguna comunicación entre los miembros",
      "Firmar contratos legales de cumplimiento diario",
      "Un compromiso o compromiso intenso por parte del equipo",
      "Utilizar solo cuadernos de papel en lugar de herramientas digitales",
    ],
    correcta: 2,
  },
  // ==========================================
  // NIVEL 3: Redes AON/DFA (Gestión de Proyectos) - REESTRUCTURADO
  // Distribución de respuestas: 0: 5 | 1: 5 | 2: 5 | 3: 5
  // ==========================================
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿Qué es un diagrama de red en el contexto de la gestión de tiempos?",
    opciones: [
      "Una lista de correos electrónicos de los interesados",
      "Un gráfico que muestra únicamente el presupuesto final",
      "Un software para el diseño de interfaces de usuario",
      "Una herramienta para secuenciar actividades y visualizar dependencias lógicas",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "Cuando una limitación física determina que una tarea debe empezar después de otra, hablamos de:",
    opciones: [
      "Dependencia discrecional",
      "Dependencia obligatoria",
      "Dependencia externa",
      "Dependencia de mercado",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta: "¿Cómo se define la dependencia discrecional según el material?",
    opciones: [
      "La secuencia definida por el director de proyecto basándose en mejores prácticas",
      "Aquella que depende de leyes gubernamentales ajenas al proyecto",
      "El retraso obligado por la falta de recursos económicos",
      "La relación entre el equipo de desarrollo y los vendedores externos",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿A qué tipo de dependencia pertenecen los factores ajenos al equipo, como aprobaciones municipales?",
    opciones: [
      "Dependencia obligatoria",
      "Dependencia secuencial",
      "Dependencia externa",
      "Dependencia técnica",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "En los diagramas de redes, ¿qué significa técnicamente el método AON?",
    opciones: [
      "Actividad en la flecha",
      "Análisis organizacional de nodos",
      "Acción operativa de navegación",
      "Actividad sobre el nodo representada por rectángulos",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "Dentro del material del módulo 2, el método del diagrama de precedencia también se conoce como:",
    opciones: [
      "DPR o red de nodos",
      "Cronograma digital de tareas",
      "Línea de base temporal de hilos",
      "DFA (diagrama de flechas automáticas)",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿Cuál es la principal característica del método DFA (diagrama de flechas)?",
    opciones: [
      "Los nodos representan actividades y las flechas relaciones",
      "Solo se usa para proyectos con presupuestos pequeños",
      "Las flechas representan actividades y los nodos eventos o hitos",
      "Es el método más flexible para proyectos complejos de software",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "Para estimar la duración en el método PERT, se deben considerar tres tipos de fechas:",
    opciones: [
      "Fija, variable y estimada según mercado",
      "Pasada, presente y futura del ciclo de vida",
      "Teórica, real y crítica de la ingeniería",
      "Más probable, optimista y pesimista",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿Qué objetivo tiene el 'forward pass' o cálculos hacia adelante en una red de nodos?",
    opciones: [
      "Determinar la duración mínima analizando fechas tardías",
      "Determinar las fechas más tempranas de inicio (ES) y finalización (EF)",
      "Calcular cuántas personas se pueden reducir del equipo técnico",
      "Modificar el alcance para ajustar los costos variables",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "Según las fórmulas técnicas presentadas, ¿cómo se obtiene el EF (early finish)?",
    opciones: [
      "Calculando la fecha actual más el margen de riesgo",
      "Restando la duración estimada al tiempo tardío",
      "Sumando la duración estimada al tiempo de inicio temprano (ES)",
      "Multiplicando el ES por la cantidad de recursos disponibles",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿Qué técnica permite determinar las fechas tardías (LS y LF) trabajando desde el final hacia el inicio?",
    opciones: [
      "Método de estimación Delphi",
      "Cálculos hacia atrás o backward pass",
      "Sincronización del forward pass inverso",
      "Cálculo de ruta crítica simplificada",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "El tiempo de inicio temprano (ES) de una actividad sucesora es siempre igual a:",
    opciones: [
      "El mayor EF de sus actividades precedentes",
      "El presupuesto acumulado del nodo anterior del plan",
      "Cero, siempre que el proyecto inicie un día lunes",
      "La suma de todas las holguras libres del diagrama",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿Cuál de estas opciones describe correctamente el propósito del método PERT?",
    opciones: [
      "Eliminar el riesgo de accidentes operativos en obra",
      "Automatizar la contratación de proveedores externos",
      "Garantizar que no existan dependencias obligatorias físicas",
      "Estimar plazos ante la incertidumbre en los tiempos de actividad",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "En un diagrama de red del tipo DPR, el nodo o rectángulo generalmente contiene:",
    opciones: [
      "El nombre del interesado responsable del proceso",
      "El número de la actividad y el plazo de duración estimada",
      "La lista de herramientas técnicas utilizadas en el código",
      "Un resumen del acta de constitución original",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿Qué decisión crítica debe tomar el director respecto a la estructura de un diagrama de red?",
    opciones: [
      "El orden exacto de la secuencia lógica para las actividades",
      "La elección del color de las líneas según la marca",
      "A qué vendedores externos comprar los recursos materiales",
      "La cantidad exacta de informes de cierre que se deben imprimir",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "Si la disponibilidad de recursos humanos o materiales es limitada, la red obliga a:",
    opciones: [
      "Cancelar la planificación hasta conseguir nuevos inversores",
      "Reducir el salario del personal del equipo directivo",
      "Modificar la programación original y secuencia de tareas",
      "Eliminar por completo los procesos iterativos de gestión",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿Para qué sirve el gráfico de empleo de recursos en combinación con el diagrama de red?",
    opciones: [
      "Para medir el ancho de banda necesario de los servidores web",
      "Para saber cuánta ganancia obtendrá cada socio inversor",
      "Para reemplazar al diagrama de Gantt en los cierres de etapa",
      "Para indicar cuántas personas se necesitan para el trabajo cada semana",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "Al identificar relaciones de interactividad lógica entre tareas, el objetivo técnico es:",
    opciones: [
      "Fomentar el caos organizativo y el debate entre técnicos",
      "Asegurar que el proyecto se cumpla en el horizonte temporal previsto",
      "Aumentar la complejidad de los archivos de documentación",
      "Aislar al personal operativo del representante del cliente",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "¿Qué herramienta es fundamental para visualizar la red según los apuntes de gestión de tiempos?",
    opciones: [
      "Programas informáticos específicos para administración",
      "Buscadores de internet y tutoriales externos de terceros",
      "Manuales de diseño de interfaces impresos en papel",
      "Editores de código fuente para programadores de frontend",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "diagramas",
    pregunta:
      "La diferencia primordial entre el diagrama de PERT y la red convencional es que el primero enfatiza:",
    opciones: [
      "La estética y diseño de los rectángulos del flujo",
      "La eliminación total de los hitos o metas volantes",
      "La estimación detallada de tiempos bajo condiciones de incertidumbre",
      "La jerarquía burocrática del acta de constitución firmada",
    ],
    correcta: 2,
  },
  // ==========================================
  // NIVEL 3: Cálculo de Holguras y Ruta Crítica - REESTRUCTURADO
  // Distribución de respuestas: 0: 5 | 1: 5 | 2: 5 | 3: 5
  // ==========================================
  {
    nivel: 3,
    tema: "critica",
    pregunta: "¿Qué representa la holgura de una actividad en un proyecto?",
    opciones: [
      "El costo extra que se le cobra al cliente por cambios",
      "El tiempo que una actividad puede retrasarse sin afectar la fecha final",
      "La cantidad de personas que sobran en un equipo de trabajo",
      "El margen de ganancia neta del director del proyecto",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta: "¿Cómo se define la ruta crítica en un diagrama de red?",
    opciones: [
      "La secuencia de actividades con menor importancia técnica",
      "El conjunto de tareas que el cliente no necesita revisar",
      "Cualquier ruta que no contenga hitos de verificación",
      "La ruta de actividades de mayor duración total",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta: "¿Cuál es la característica primordial de una variable crítica?",
    opciones: [
      "Que su costo es siempre el más bajo de toda la planificación",
      "Que no requiere recursos humanos para ejecutarse",
      "Que si cambia su duración, también cambiará la duración total del proyecto",
      "Que se ejecuta siempre fuera de la jornada laboral oficial",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "En una planificación técnica, ¿qué valor de holgura tienen las actividades en la ruta crítica?",
    opciones: [
      "Holgura igual a cero",
      "Holgura infinita durante toda la fase",
      "Holgura variable según el mes de ejecución",
      "Holgura máxima de diez días corridos",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "¿Cuál es la fórmula técnica para calcular la holgura total de una actividad?",
    opciones: [
      "Holgura = Duración estimada / Recursos usados",
      "Holgura = LF - EF (o LS - ES)",
      "Holgura = Costo total - Presupuesto real acumulado",
      "Holgura = Inicio temprano + Fin tardío de la red",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "Si una actividad tiene un fin temprano (EF) de 10 y un fin tardío (LF) de 15, ¿cuál es su holgura?",
    opciones: ["Cero días", "Quince días", "Cinco días", "Diez días"],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "¿Qué sucede si una tarea perteneciente a la ruta crítica se termina con retraso?",
    opciones: [
      "Afectará directamente la duración de todo el proyecto",
      "Se debe reiniciar el acta de constitución de inmediato",
      "No pasa nada si existen otras rutas alternativas en la red",
      "Aumentará automáticamente la holgura de las tareas sucesoras",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "¿Cómo se denomina al tiempo que una actividad puede demorar sin retrasar el inicio temprano de sus sucesoras?",
    opciones: [
      "Buffer crítico de seguridad",
      "Margen operativo de hilos",
      "Holgura total acumulada",
      "Holgura libre",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "¿Qué técnica de cálculo se utiliza para determinar el inicio tardío (LS)?",
    opciones: [
      "Sumar la duración estimada al tiempo de inicio temprano",
      "Multiplicar el fin temprano por los recursos asignados",
      "Restar la duración estimada al tiempo de fin tardío (LF)",
      "Consultar al cliente la fecha tope en la etapa de cierre",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "¿Para qué sirve el método del camino crítico (CPM) principalmente?",
    opciones: [
      "Para diseñar el logotipo de la organización promotora",
      "Para identificar la secuencia más larga que determina el final",
      "Para estimar tiempos cuando se desconoce todo el proyecto",
      "Para reducir el costo de las licencias de software utilizadas",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "En los cálculos hacia atrás, el fin tardío (LF) de una actividad se determina según:",
    opciones: [
      "El mayor fin temprano de los nodos de la red",
      "La suma de todos los tiempos optimistas del PERT",
      "El criterio arbitrario de los socios externos del proyecto",
      "El menor de los inicios tardíos (LS) de todas sus sucesoras",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "Respecto a la ruta crítica de un proyecto, ¿cuál de estas afirmaciones es verdadera?",
    opciones: [
      "Un proyecto puede tener más de una ruta crítica",
      "Por definición técnica solo existe una única ruta máxima",
      "Solo aparece si el presupuesto es compartido con otra empresa",
      "Se define únicamente en el módulo inicial del programa de gestión",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "¿Qué busca el director de proyecto al aplicar la técnica de nivelación de recursos?",
    opciones: [
      "Eliminar todas las actividades no críticas de la planificación",
      "Que todos los empleados perciban exactamente el mismo salario",
      "Minimizar las fluctuaciones en el personal requerido y nivelarlos",
      "Aumentar la duración de la ruta crítica de forma artificial",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "¿En qué década surgieron los métodos cuantitativos de planificación en redes?",
    opciones: [
      "1950",
      "1990 junto con el auge del lenguaje CSS",
      "2011 tras la liberación de códigos de redes sociales",
      "1910 durante las teorías de administración tayloristas",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "Si conocemos con exactitud los tiempos de cada actividad, el método de red recomendado es:",
    opciones: [
      "Análisis de Pareto funcional",
      "Diseño responsivo de redes técnicas",
      "Evaluación PERT de tres escenarios",
      "Camino crítico (CPM)",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "¿A qué proceso de gestión pertenece formalmente el cálculo de las holguras?",
    opciones: [
      "Al inicio para definir el acta de constitución",
      "A la planificación mediante los métodos de redes",
      "Al cierre para archivar los documentos del historial",
      "Únicamente al soporte técnico brindado post-entrega",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "¿Qué es indispensable considerar en una red además de la secuencia lógica de actividades?",
    opciones: [
      "La dirección de correo de cada programador del equipo",
      "Los marcos de trabajo (frameworks) de frontend a utilizar",
      "La disponibilidad de los recursos limitados",
      "La guía de estilos estéticos definida en el módulo anterior",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "¿Cómo se define técnicamente una tarea que NO es crítica en una red?",
    opciones: [
      "Como una tarea que no debe realizarse bajo ningún concepto",
      "Como una tarea que no consume ningún tipo de recurso económico",
      "Como responsabilidad exclusiva de los stakeholders del gobierno",
      "Como una tarea que posee una holgura mayor a cero",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "Al encontrar la ruta crítica, el paso técnico final de este proceso es:",
    opciones: [
      "Calcular la holgura total de las actividades",
      "Identificar las dependencias obligatorias del flujo",
      "Estimar la duración exacta de cada tarea del plan",
      "Listar a todos los interesados principales del proyecto",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "critica",
    pregunta:
      "Al gestionar equilibradamente las holguras, el director tiene como fin principal:",
    opciones: [
      "Maximizar los gastos hormiga dentro de la organización",
      "Garantizar que desvíos menores no retrasen el proyecto total",
      "Eliminar la necesidad de reportar avances de forma diaria",
      "Reducir la comunicación cara a cara con los técnicos",
    ],
    correcta: 1,
  },
  // ==========================================
  // NIVEL 3: Control de Agenda (Gestión de Proyectos) - REESTRUCTURADO
  // Distribución de respuestas: 0: 5 | 1: 5 | 2: 5 | 3: 5
  // ==========================================
  {
    nivel: 3,
    tema: "agenda",
    pregunta: "¿Qué es fundamentalmente un diagrama de Gantt?",
    opciones: [
      "Un gráfico de barras que muestra la duración de actividades en el tiempo",
      "Una lista de nombres de los programadores y sus perfiles técnicos",
      "Un cálculo matemático para predecir exclusivamente los costos de hardware",
      "Una reunión semanal obligatoria entre el cliente y el equipo de trabajo",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "En un gráfico de Gantt, ¿qué representa la longitud de cada barra?",
    opciones: [
      "La importancia política de la tarea ante los socios externos",
      "La cantidad total de dinero gastado hasta esa fecha determinada",
      "La duración estimada de la tarea o etapa del proceso de gestión",
      "El número de personas asignadas para ejecutar la actividad técnica",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "¿Para qué sirven los hitos dentro del cronograma de un proyecto?",
    opciones: [
      "Para pagarle los honorarios a los proveedores del exterior",
      "Como puntos de verificación y momentos importantes de la agenda",
      "Para sancionar al personal técnico que presenta atrasos en el plan",
      "Como carpetas de servidor donde se almacena el código fuente del sistema",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "¿Cuál es la utilidad de comparar los plazos reales con los estimados en el diagrama de Gantt?",
    opciones: [
      "No posee ninguna utilidad práctica en el desarrollo diario",
      "Lograr eliminar por completo el presupuesto original aprobado",
      "Justificar el despido del director de proyecto ante el directorio",
      "Permitir alertar sobre problemas futuros y aplicar acciones correctivas",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "¿Qué información proveen los reportes sobre el estado de avance según el material?",
    opciones: [
      "La vida personal de los empleados fuera del entorno laboral",
      "Solamente la lista de precios actual de los competidores locales",
      "Información detallada sobre fechas planificadas cumplidas y las pendientes",
      "Un resumen del acta de constitución de proyectos de empresas vecinas",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "Cuando un informe de avance detecta un problema futuro en los tiempos, el director debe:",
    opciones: [
      "Determinar si ha cambiado la agenda y aplicar acciones preventivas",
      "Ocultar el informe hasta la etapa de cierre final del proyecto",
      "Aumentar el alcance de las tareas sin consultar los costos asociados",
      "Finalizar la etapa de seguimiento y control de forma inmediata",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "¿Qué sucede si resulta necesario actualizar la agenda por cambios críticos detectados?",
    opciones: [
      "El proyecto debe cancelarse de forma definitiva por falla de plan",
      "Se debe proceder a notificar a los interesados sobre dichos cambios",
      "Se eliminan los hitos anteriores para que no queden registros históricos",
      "Se debe contratar a un nuevo Scrum Master para reiniciar la gestión",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "El proceso de control de agenda busca principalmente asegurar que:",
    opciones: [
      "Se gaste menos dinero del que se planeó en la inversión inicial",
      "Todos los programadores del equipo utilicen la misma estación de trabajo",
      "No existan ningún tipo de dependencias obligatorias entre las tareas",
      "El proyecto se cumpla dentro del horizonte temporal que fue establecido",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "Según los apuntes, ¿qué herramientas comunes poseen plantillas para diseñar diagramas de Gantt?",
    opciones: [
      "Software de ofimática como Excel o las herramientas de Google Docs",
      "Sistemas espaciales de alta precisión desarrollados por el C.E.R.N.",
      "Programas de diseño gráfico para artistas y creadores visuales",
      "Aplicaciones de mensajería instantánea para teléfonos móviles",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "¿Qué efecto puede tener aplicar acciones correctivas sobre los plazos de la agenda?",
    opciones: [
      "Ningún efecto colateral sobre otras variables de la planificación",
      "Impacto directo en el alcance, los costos totales o la calidad final",
      "Reducción automática de los impuestos internos de la organización",
      "Mejora inmediata de la velocidad de conexión a la red de internet",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "En la gestión técnica de tiempos del PMBOK, el cronograma integrado debe contener:",
    opciones: [
      "Las fotografías de cada integrante y el logotipo de la marca corporativa",
      "Únicamente los salarios percibidos por los vendedores de la organización",
      "La secuencia, las duraciones, los recursos y el control de los cambios",
      "Una lista completa de todos los próximos proyectos a ser realizados",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "¿Qué significa el concepto de línea base de la agenda de un proyecto?",
    opciones: [
      "La última fila inferior de un diagrama de red del tipo red de nodos",
      "El costo operativo más bajo registrado durante toda la ejecución del plan",
      "La fecha exacta de los aniversarios de los interesados más relevantes",
      "El plan de tiempos aprobado y original usado para comparar el progreso real",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "¿Por qué el uso del Gantt facilita la trazabilidad lógica de un proyecto?",
    opciones: [
      "Porque asigna nombres de fantasía al azar a cada barra del gráfico",
      "Porque permite observar las dependencias de tareas en un eje cronológico",
      "Porque requiere conexión a internet para poder actualizar los hilos",
      "Porque los reportes se imprimen obligatoriamente en hojas de color verde",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "El control de agenda es un proceso de gestión que debe ser realizado:",
    opciones: [
      "Una sola vez durante la primera semana de iniciado el proyecto",
      "Al día siguiente de haberse efectuado el cierre formal del acta",
      "De forma periódica y constante a lo largo de toda la ejecución del plan",
      "Solamente en el caso de que el representante del cliente esté disconforme",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "¿Cuál de estos factores no debería provocar cambios en los plazos estimados originalmente?",
    opciones: [
      "Cambios en el diseño o color de las tazas de café dentro de la oficina",
      "Retraso inesperado en la entrega de materiales por parte de los proveedores",
      "Enfermedad imprevista de un experto clave que detiene el flujo técnico",
      "Aprobaciones de entes gubernamentales que demoran más de lo planeado",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "Si una tarea que no pertenece a la ruta crítica sufre una demora de dos días:",
    opciones: [
      "El director del proyecto debe ser removido de su cargo por falta de plan",
      "Se debe actualizar el acta de constitución de forma legal e inmediata",
      "El proyecto total sufre obligatoriamente un atraso de cuarenta y ocho horas",
      "No afectará la fecha final siempre que el retraso sea menor a su holgura",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "¿Cuál es el principal resultado directo del proceso técnico de control de agenda?",
    opciones: [
      "La selección del lenguaje de programación que utilizarán los técnicos",
      "El pago inmediato de los honorarios pactados con los socios externos",
      "La actualización de los cronogramas adaptados a la realidad operativa",
      "La entrega física del producto o componente terminado al representante",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "La gestión del tiempo asegura el cumplimiento del proyecto únicamente si:",
    opciones: [
      "Nadie del equipo la conoce para no generar un clima de presión o estrés",
      "Es comunicada permanentemente a los integrantes del equipo e interesados",
      "Solo el experto de apoyo técnico posee una copia guardada del documento",
      "Se mantiene guardada bajo estricta seguridad por el personal directivo",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "El uso del diagrama de Gantt resulta más apropiado para ser utilizado en:",
    opciones: [
      "Etapas de pura incertidumbre inicial donde no se han definido objetivos",
      "Planificaciones que no cuentan con un presupuesto ni con personal asignado",
      "Módulos que consisten en una única tarea cuya duración será indefinida",
      "Proyectos en curso y ejecución donde se precisan fechas límites estrictas",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "agenda",
    pregunta:
      "Disponer de un cronograma correctamente administrado y actualizado permite:",
    opciones: [
      "Apreciar con facilidad y de un solo vistazo todas las fechas clave",
      "Eliminar la necesidad de coordinar cualquier tipo de reunión futura",
      "Garantizar que no existan interesados involucrados en los procesos",
      "Prescindir totalmente del uso de la variable técnica de Calidad",
    ],
    correcta: 0,
  },

  // ==========================================
  // NIVEL 3: Gestión de Riesgos - REESTRUCTURADO
  // Distribución de respuestas: 0: 5 | 1: 5 | 2: 5 | 3: 5
  // ==========================================
  {
    nivel: 3,
    tema: "riesgos",
    pregunta: "¿Qué es un riesgo según la documentación de gestión?",
    opciones: [
      "Una certeza de que algo fallará en el cronograma",
      "El impacto financiero de los impuestos internos",
      "Cualquier evento o condición incierta que puede afectar positiva o negativamente al proyecto",
      "La documentación final que se entrega al cerrar una etapa",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta:
      "¿Qué mide específicamente la probabilidad dentro de un evento de riesgo?",
    opciones: [
      "El daño monetario total expresado en moneda local",
      "La posibilidad de que un evento de riesgo específico ocurra",
      "La cantidad de días de atraso en la ruta crítica",
      "La satisfacción del cliente ante un entregable",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta:
      "Cuando hablamos de impacto en la gestión de riesgos, nos referimos a:",
    opciones: [
      "La rapidez con la que se identifica un error técnico",
      "La decisión del director de cambiar de proveedor",
      "La reunión informativa con los socios inversores",
      "La consecuencia o efecto sobre los objetivos del proyecto",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta:
      "¿Cuál es la fórmula técnica para obtener el valor de exposición al riesgo?",
    opciones: [
      "Exposición = Probabilidad × Impacto",
      "Exposición = Costo total / Tiempo estimado",
      "Exposición = Holgura + Días de atraso",
      "Exposición = Número de recursos × Nivel de calidad",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta: "¿Qué significa que el riesgo tenga una 'doble naturaleza'?",
    opciones: [
      "Que debe ser gestionado por dos directores diferentes",
      "Que existen riesgos negativos (amenazas) y riesgos positivos (oportunidades)",
      "Que el impacto se mide siempre en tiempo y en dinero",
      "Que puede ocurrir al inicio o al final del proyecto",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta:
      "El fenómeno denominado deriva del alcance o 'scope creep' se define como:",
    opciones: [
      "La renuncia inesperada del equipo de desarrollo",
      "El aumento del presupuesto sin previo aviso",
      "Cambios no controlados al alcance del proyecto después de su inicio",
      "La mejora de la calidad de los procesos administrativos",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta:
      "¿Cuál de los siguientes es considerado un riesgo externo según el origen?",
    opciones: [
      "Falta de capacitación en el personal del equipo",
      "Malentendidos de comunicación interna",
      "Definición incompleta de los requerimientos técnicos",
      "Cambios regulatorios o nuevas leyes que afectan al proyecto",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta:
      "Si la estrategia ante una amenaza es eliminar la causa del riesgo por completo, hablamos de:",
    opciones: ["Evitar", "Mitigar", "Transferir", "Aceptar"],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta: "¿En qué consiste la estrategia de transferencia de riesgos?",
    opciones: [
      "Ignorar el riesgo hasta que desaparezca solo",
      "Capacitar al personal para que no cometa errores",
      "Dividir el riesgo en pequeñas partes entre los socios",
      "Desplazar la responsabilidad a un tercero, como contratar un seguro",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta:
      "¿Cuál es la respuesta proactiva correcta ante una Oportunidad (riesgo positivo) para asegurar que ocurra?",
    opciones: ["Ignorar", "Aceptar", "Explotar", "Mitigar"],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta: "Un impacto se clasifica como crítico si tiene el potencial de:",
    opciones: [
      "Poner en peligro el éxito o incluso llevar a la cancelación del proyecto",
      "Causar una molestia mínima que se gestiona con facilidad",
      "Generar una actualización en el manual de procedimientos",
      "Cambiar el nombre del stakeholder principal",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta:
      "¿Cuál es la estructura gramatical recomendada para definir un riesgo formalmente?",
    opciones: [
      "Como una lista de tareas que faltan realizar",
      "Si [causa], entonces [evento de riesgo], lo que podría llevar a [efecto]",
      "Haciendo una descripción estética del problema visual",
      "Detallando los costos de las facturas que están pendientes",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta: "El impacto 'menor' de un riesgo se caracteriza por ser:",
    opciones: [
      "Una amenaza que requiere detener el proyecto por meses",
      "Un evento positivo que genera grandes ganancias",
      "Una falla técnica en los servidores del cliente",
      "Un pequeño inconveniente que puede gestionarse con facilidad",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta:
      "¿Qué acción se realiza en la estrategia de mitigación de amenazas?",
    opciones: [
      "Transferir el dinero del presupuesto a otra área",
      "Reducir la probabilidad de ocurrencia o el impacto del evento",
      "Cerrar la etapa de planificación de forma anticipada",
      "Aumentar el precio de venta de los entregables",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta:
      "¿A qué estrategia de respuesta a oportunidades se refiere la adjudicación a un tercero capacitado?",
    opciones: ["Explotar", "Aceptar", "Compartir", "Mejorar"],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta:
      "¿Qué rol debe incluirse siempre en un plan de mitigación para cada riesgo identificado?",
    opciones: [
      "Una persona o equipo responsable de monitorear y ejecutar la acción",
      "El nombre del cliente que descubrió el error original",
      "Solo el gerente financiero de la organización promotora",
      "Los competidores externos que podrían verse afectados",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta:
      "¿Qué factor define el nivel de riesgo que los interesados están dispuestos a aceptar?",
    opciones: [
      "La cantidad de hitos del cronograma",
      "La fecha del acta de constitución",
      "La tolerancia al riesgo",
      "La duración total de la ruta crítica",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta: "La reserva de contingencia consiste técnicamente en asignar:",
    opciones: [
      "Más empleados a la etapa de cierre",
      "Archivos duplicados en diferentes servidores",
      "Una descripción nueva para cada hito técnico",
      "Presupuesto o tiempo adicional para cubrir riesgos materializados",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta:
      "¿Cuál de estos es un riesgo vinculado a los Interesados (Stakeholders)?",
    opciones: [
      "Resistencia al cambio u oposición al proyecto por alguna parte",
      "Falla inesperada de los equipos informáticos internos",
      "Errores gramaticales en la documentación técnica",
      "Lluvias intensas que retrasan el inicio de la jornada",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "riesgos",
    pregunta: "¿Qué implica la estrategia de 'aceptación' pasiva de un riesgo?",
    opciones: [
      "Cambiar todo el plan del proyecto de inmediato",
      "Reconocer el riesgo y no tomar acciones proactivas, solo asumir efectos",
      "Desplazar la responsabilidad al director de otra área",
      "Aumentar los controles semanales del progreso técnico",
    ],
    correcta: 1,
  },
];
