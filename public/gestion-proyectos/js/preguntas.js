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
  // NIVEL 1 - GESTIÓN DE RIESGOS (Módulo de Proyectos)
  // Distribución equilibrada: 0:(5) | 1:(5) | 2:(5) | 3:(5)
  // ==========================================
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "¿A qué se refiere formalmente la gestión de riesgos según el apunte?",
    opciones: [
      "Al proceso sistemático de identificar, analizar, planificar y controlar las respuestas a los riesgos",
      "A una reunión semanal obligatoria para que el personal se presente",
      "Únicamente al cálculo de las deudas técnicas y los plazos",
      "A la selección manual de los proveedores con mejor precio",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "¿Qué afirma la documentación sobre la naturaleza de los riesgos?",
    opciones: [
      "Solo pueden ocurrir durante la etapa técnica de cierre",
      "Son exclusivamente amenazas externas al equipo técnico",
      "Poseen una doble naturaleza: pueden ser amenazas o presentarse como oportunidades",
      "Ocurren de forma cíclica y predecible cada tres meses",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "En la definición técnica, un 'Evento de riesgo' afecta directamente a:",
    opciones: [
      "Solamente los manuales impresos de capacitación",
      "La vida personal del representante del cliente",
      "La ubicación geográfica de las oficinas principales",
      "Los objetivos del proyecto (alcance, tiempo, costo, calidad, recursos)",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "¿Cuál es la fórmula técnica de Nivel 1 para calcular la exposición al riesgo?",
    opciones: [
      "Exposición = Valor monetario + Tiempos tardíos",
      "Exposición = Probabilidad × Impacto",
      "Exposición = Cantidad de recursos / Holgura total",
      "Exposición = Meta deseada - Costo acumulado",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "Una característica principal del riesgo es que se refiere siempre a:",
    opciones: [
      "Eventos que podrían ocurrir en el futuro del proyecto",
      "Facturas que ya fueron pagadas en etapas anteriores",
      "Bases de datos que ya fueron instaladas por el equipo",
      "A decisiones tomadas durante el acta de constitución",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "La clasificación de los riesgos en el proyecto depende atendiendo a su:",
    opciones: [
      "Tamaño visual en el gráfico de Gantt",
      "Importancia ante la competencia comercial",
      "Origen, naturaleza o área de impacto",
      "Cantidad de personas que se darán cuenta del error",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "¿Cuál de estos ejemplos corresponde a un riesgo de origen Externo?",
    opciones: [
      "Falta de capacitación técnica del equipo",
      "Cambios regulatorios o nuevas leyes que afectan al proyecto",
      "Incompletitud en el acta de constitución de inicio",
      "Mala definición del alcance por parte del director",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "¿Cómo se define el término 'Scope Creep' (deriva del alcance) según la teoría?",
    opciones: [
      "Errores en la codificación de las etiquetas del servidor",
      "Renuncia inmediata del personal clave del desarrollo",
      "Aparición de huecos o espacios vacíos en las tarjetas",
      "Cambios no controlados al alcance del proyecto tras su inicio",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "Subestimar la duración de las actividades es una falla clasificada como:",
    opciones: [
      "Riesgo de Tiempo (Cronograma)",
      "Riesgo de Comunicación externa",
      "Evento positivo de oportunidad estratégica",
      "Error técnico en el modelo de cascada",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "El desperdicio o la mala utilización de los recursos económicos genera un:",
    opciones: [
      "Incremento del valor estratégico de la empresa",
      "Error de probabilidad con impacto moderado",
      "Riesgo de Costo (Presupuesto)",
      "Efecto de mejora en las lecciones aprendidas",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "En la definición lógica de riesgos, la situación que da origen al evento se llama:",
    opciones: ["Impacto terminal", "Causa", "Meta", "Protocolo inicial"],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "¿A qué categoría pertenece el riesgo de tener 'errores o defectos en los entregables'?",
    opciones: [
      "Riesgo de Gestión administrativa",
      "Riesgo de Interesados externos",
      "Riesgo técnico puro del proveedor",
      "Riesgo de Calidad",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "La 'Resistencia al cambio' u oposición al proyecto se clasifica como:",
    opciones: [
      "Costo de no conformidad operacional",
      "Problema técnico de las bases de datos",
      "Riesgo de los Interesados (Stakeholders)",
      "Análisis estadístico del sistema final",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "Una falta de documentación técnica en un proyecto suele derivar en un:",
    opciones: [
      "Riesgo de Comunicación",
      "Paso optimista en la ruta crítica",
      "Gasto de capital compartido del socio",
      "Hito verificado exitosamente por el PMBOK",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "El valor de probabilidad de que ocurra un evento se expresa generalmente:",
    opciones: [
      "Únicamente con una descripción en color verde o rojo",
      "Como un valor entre 0 y 1 (o en porcentaje)",
      "Mediante la lista completa de todos los stakeholders",
      "Por el nombre del director del proyecto y su antigüedad",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta: "Se dice que el riesgo es una 'incertidumbre' porque implica:",
    opciones: [
      "Que no existe duda sobre la fecha final de cierre",
      "Que los socios externos siempre pagarán por el plan",
      "Una decisión tomada exclusivamente por el directorio",
      "Falta de certeza sobre si un evento ocurrirá o cuándo ocurrirá",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "¿Qué término se usa para la medida de magnitud de un riesgo al combinar probabilidad e impacto?",
    opciones: [
      "Exposición al Riesgo",
      "Ruta del Inversor",
      "Buffer de Tiempo",
      "Estrategia de Metas",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "La incompatibilidad entre diferentes tecnologías o procesos se denomina técnicamente:",
    opciones: [
      "Dato del acta de cierre manual",
      "Factor insignificante de presupuesto",
      "Riesgo de Integración",
      "Situación imprevista de los proveedores",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "Respecto a la incertidumbre, ¿cuál de estos conceptos es un factor clave en un evento de riesgo?",
    opciones: [
      "Que el nombre del producto ya esté definido",
      "No conocer su impacto exacto antes de que ocurra",
      "Tener una oficina central con ventilación bioclimática",
      "Utilizar plantillas de Gantt integradas en Excel",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "riesgos",
    pregunta:
      "¿Cuál es el objetivo final de la gestión de riesgos para un Director de Proyecto?",
    opciones: [
      "Lograr eliminar por completo todos los riesgos externos",
      "Aumentar el gasto en seguros privados anualmente",
      "Hacer que el personal trabaje fines de semana sin costo",
      "Aumentar los eventos positivos y disminuir los negativos",
    ],
    correcta: 3,
  },

  // ==========================================
  // NIVEL 2 - GESTIÓN DE RIESGOS (Intermedio)
  // Distribución equilibrada: 0:(5) | 1:(5) | 2:(5) | 3:(5)
  // ==========================================
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "Cuando un riesgo genera un impacto notable que requiere atención inmediata y acciones correctivas, se clasifica como:",
    opciones: [
      "Insignificante o Bajo",
      "Moderado",
      "Causa técnica de nivel uno",
      "Meta proactiva del directorio",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "¿Qué componente de la definición de riesgos describe el suceso incierto específico que puede afectar al plan?",
    opciones: [
      "El acta de cierre final",
      "La meta del trimestre",
      "El fondo de reserva operativa",
      "El Evento de Riesgo",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "¿Cómo se define la 'Tolerancia al Riesgo' según el material de estudio?",
    opciones: [
      "La cantidad de horas extras que el equipo puede trabajar",
      "El número total de socios que tiene el proyecto",
      "Nivel de riesgo que una organización o interesados están dispuestos a aceptar",
      "La suma del presupuesto que se gasta en capacitación técnica",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "¿Cuál es el propósito fundamental de un Plan de Mitigación de Riesgos?",
    opciones: [
      "Pagar el sueldo a los expertos técnicos",
      "Modificar el nombre de los socios externos",
      "Eliminar el uso de bases de datos antiguas",
      "Reducir la probabilidad o el impacto de los riesgos de alta prioridad",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "La estrategia de respuesta denominada 'Evitar' ante una amenaza consiste técnicamente en:",
    opciones: [
      "Tomar medidas para eliminar la causa del riesgo por completo",
      "Desplazar la responsabilidad económica hacia un tercero capacitado",
      "Aceptar las consecuencias una vez que el problema ocurrió",
      "Ignorar el suceso hasta que el proyecto sea archivado",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "¿Qué parte de la estructura de definición lógica indica las consecuencias potenciales sobre los objetivos?",
    opciones: [
      "La meta estratégica del cliente",
      "El Efecto o Consecuencia",
      "La firma del representante legal",
      "El manual de usuario impreso",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "La 'Mala definición del alcance' y las 'Asignaciones inadecuadas de recursos' son ejemplos de:",
    opciones: [
      "Eventos de riesgo externo fuera de control",
      "Riesgos de Calidad con impacto insignificante",
      "Riesgos de Gestión (vinculados a la planificación)",
      "Metodologías ágiles de mejora de rendimiento",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "En la gestión de amenazas, el 'Reconocimiento Pasivo' se realiza comúnmente cuando:",
    opciones: [
      "El riesgo es de bajo impacto y baja probabilidad de ocurrencia",
      "Se ha decidido contratar un seguro para deslindar responsabilidad",
      "No existe un Director de Proyecto asignado todavía",
      "El presupuesto total ha sido duplicado por el sponsor",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "¿Cuál es la clasificación de impacto para un riesgo que tiene un efecto mínimo o nulo en los objetivos?",
    opciones: [
      "Riesgo preventivo",
      "Incidente moderado",
      "Problema técnico de obsolescencia",
      "Insignificante o Bajo",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "Según los apuntes, la definición de categorías de impacto debe ser siempre específica para:",
    opciones: [
      "Únicamente los socios gubernamentales",
      "Solo el equipo de desarrollo de backend",
      "Cada proyecto y organización en particular",
      "Cualquier competidor que esté en el mercado",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "Ante un riesgo positivo (oportunidad), la estrategia que busca aumentar su impacto favorable es:",
    opciones: [
      "Transferir",
      "Mejorar",
      "Aceptar pasivamente",
      "Evitar la causa",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "En un Plan de Mitigación, el 'Responsable' se define formalmente como:",
    opciones: [
      "La persona encargada de monitorear y ejecutar las acciones de respuesta",
      "El empleado que cometió el error original durante el desarrollo",
      "El proveedor que cobra la cuota mensual de mantenimiento",
      "Únicamente el stakeholder que puso el dinero inicial",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "Los desastres naturales (clima) y la inestabilidad política son considerados:",
    opciones: [
      "Oportunidades de mejora para el equipo directivo",
      "Resultados fallidos de la etapa técnica de diseño",
      "Inconvenientes mínimos gestionables por programadores",
      "Riesgos Externos fuera del control del equipo",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "Diferenciar entre un 'Riesgo Técnico' y uno de 'Gestión' es vital para el director porque:",
    opciones: [
      "Aumenta la velocidad del framework de Bootstrap utilizado",
      "Elimina la necesidad de utilizar etiquetas HTML5 semánticas",
      "Permite asignar las misiones a los perfiles correspondientes del equipo",
      "Hace que el cliente ya no quiera realizar cambios al alcance",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "La gestión moderna prioriza prevenir fallos mediante la anticipación. Un proceso para esto es:",
    opciones: [
      "Cargar facturas mensuales de la competencia",
      "Realizar pruebas y prototipos de forma temprana",
      "Reemplazar a todo el personal cada tres meses",
      "Gastar el fondo de reserva el primer mes del plan",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "Las escalas utilizadas para evaluar el impacto de un evento se clasifican habitualmente en:",
    opciones: [
      "Cualitativas o cuantitativas",
      "Temporales o arquitectónicas",
      "Externas o de código fuente",
      "Solo informativas para el cierre del acta",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "¿Cuál de estas acciones es una aplicación real de la estrategia de 'Transferir'?",
    opciones: [
      "Realizar un curso de capacitación intensiva al personal interno",
      "Subcontratar actividades de alto riesgo a un tercero calificado",
      "Actualizar las librerías del framework a la versión estable",
      "Escribir las lecciones aprendidas al finalizar la jornada",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "Según el material, ¿con qué frecuencia debe revisarse y actualizarse el plan de mitigación?",
    opciones: [
      "Solo al final de cada año de calendario fiscal",
      "Una sola vez durante la firma del contrato principal",
      "Periódicamente a medida que surgen nuevos riesgos o cambian condiciones",
      "Cada vez que el programador junior solicita un aumento de sueldo",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta: "¿Qué significa que el riesgo se considere un 'Evento Positivo'?",
    opciones: [
      "Que no genera costos económicos a la organización",
      "Que es una tarea que el equipo ya terminó hace meses",
      "Que se refiere únicamente al personal administrativo",
      "Que presenta una Oportunidad de beneficio para el proyecto",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "riesgos",
    pregunta:
      "El riesgo clasificado como 'Pérdida de personal clave' pertenece al área de:",
    opciones: [
      "Riesgos de Recursos",
      "Metodologías ágiles de cierre técnico",
      "Regulaciones del gobierno central",
      "Fallo del manual de estilos visuales",
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

  // ==========================================
  // NIVEL 1 - CALIDAD, MANTENIMIENTO Y AMBIENTE
  // Distribución: 0: (5) | 1: (5) | 2: (5) | 3: (5)
  // ==========================================
  {
    nivel: 1,
    tema: "calidad",
    pregunta: "¿Cuál es la definición de calidad según el enfoque del PMBOK?",
    opciones: [
      "Grado en que un conjunto de características inherentes cumple con los requisitos",
      "Proceso reactivo que se activa solo ante fallos graves",
      "Medición de cuánto dinero se ahorró en el código",
      "La estética visual definida por el equipo de diseño",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "calidad",
    pregunta:
      "El Aseguramiento de la Calidad (QA) se diferencia del control de calidad porque se orienta a:",
    opciones: [
      "El producto final",
      "El personal administrativo",
      "La contratación de proveedores",
      "El proceso de desarrollo",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "calidad",
    pregunta: "¿Qué pregunta busca responder el proceso de Verificación?",
    opciones: [
      "¿El producto es del color correcto?",
      "¿Estamos construyendo el producto correctamente?",
      "¿Cuánto tiempo tardó el mantenimiento?",
      "¿El cliente está satisfecho con la inversión?",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "calidad",
    pregunta:
      "En la gestión de calidad, el Control de Calidad (QC) es considerado una actividad:",
    opciones: [
      "Proactiva de planificación",
      "Preventiva de riesgos externos",
      "Reactiva orientada al producto",
      "Exclusiva del Directorio de la empresa",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "calidad",
    pregunta: "¿A qué pregunta se orienta fundamentalmente la Validación?",
    opciones: [
      "¿El costo cumple con la variable de Lledó?",
      "¿Estamos construyendo el producto correcto?",
      "¿El código sigue las reglas gramaticales?",
      "¿El equipo de trabajo tiene experiencia técnica?",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "calidad",
    pregunta:
      "Dentro de los costos de conformidad (prevención), un ejemplo común es:",
    opciones: [
      "El pago de garantías al cliente",
      "La reparación de fallos ya manifestados",
      "La capacitación y realización de pruebas",
      "El gasto por la pérdida de reputación",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "calidad",
    pregunta:
      "¿Qué gastos se incluyen dentro de los costos de 'no conformidad'?",
    opciones: [
      "Retrabajos, garantías y pérdida de clientes",
      "Revisiones de código preventivas",
      "Inversión en auditorías externas",
      "Compra de servidores energéticamente eficientes",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "mantenimiento",
    pregunta: "¿Cuál es el objetivo principal del mantenimiento de software?",
    opciones: [
      "Aumentar el precio de venta del software mensualmente",
      "Reducir la comunicación entre el equipo y el cliente",
      "Eliminar la necesidad de utilizar etiquetas HTML",
      "Operar eficientemente, corregir errores y mantener el valor del sistema",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "mantenimiento",
    pregunta:
      "La cualidad que permite realizar modificaciones con el menor esfuerzo posible se denomina:",
    opciones: [
      "Mantenibilidad",
      "Flexibilidad del acta de constitución",
      "Alcance progresivo del desarrollo",
      "Riesgo de exposición al sistema",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "mantenimiento",
    pregunta:
      "¿A qué concepto se refiere la capacidad de un software para funcionar sin fallos bajo condiciones establecidas?",
    opciones: [
      "Métrica de rendimiento social",
      "Cálculo de holgura libre técnica",
      "Fiabilidad",
      "Punto de interrupción adaptable",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "mantenimiento",
    pregunta:
      "Identificar y corregir defectos que se manifiestan durante la operación es el objetivo de:",
    opciones: [
      "El Mantenimiento Correctivo",
      "El Modelo Espiral de gestión",
      "El Mantenimiento Preventivo",
      "El Ciclo de Deming reactivo",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "mantenimiento",
    pregunta:
      "Cuando ajustamos un software para que funcione en un nuevo sistema operativo o base de datos, realizamos un mantenimiento:",
    opciones: ["Perfectivo", "Manual", "Básico", "Adaptativo"],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "mantenimiento",
    pregunta:
      "¿Cuál de estos tipos de mantenimiento introduce mejoras basadas en nuevas necesidades del usuario sin corregir errores?",
    opciones: [
      "Mantenimiento Correctivo",
      "Mantenimiento Proyectado",
      "Mantenimiento Perfectivo",
      "Mantenimiento Semántico",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "mantenimiento",
    pregunta: "El mantenimiento preventivo consiste principalmente en:",
    opciones: [
      "Reparar el sistema una vez que dejó de funcionar",
      "Realizar acciones proactivas para evitar problemas futuros",
      "Añadir funciones de estética visual al front-end",
      "Pedir al cliente que no use el sistema durante las mañanas",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "ambiente",
    pregunta:
      "¿Qué objetivo tiene la Evaluación de Impacto Ambiental (EIA) en un proyecto?",
    opciones: [
      "Determinar la jerarquía 4R de la oficina",
      "Eliminar la necesidad de contratar ingenieros",
      "Reducir el presupuesto de energía de los inversores",
      "Identificar, predecir y mitigar los efectos del proyecto en el entorno",
    ],
    correcta: 3,
  },
  {
    nivel: 1,
    tema: "ambiente",
    pregunta:
      "En la gestión de residuos, el concepto de reducir el volumen de desechos se refiere a actuar en:",
    opciones: [
      "El origen de la generación de residuos",
      "La etapa final de cierre del proyecto",
      "El código fuente de las etiquetas",
      "Los manuales de usuario del software",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "ambiente",
    pregunta:
      "Utilizar luz natural y ventilación cruzada en el diseño de instalaciones es parte de:",
    opciones: [
      "La virtualización de servidores",
      "El diseño bioclimático",
      "La infraestructura de la arquitectura ágil",
      "La eficiencia perfecta del mantenimiento",
    ],
    correcta: 1,
  },
  {
    nivel: 1,
    tema: "ambiente",
    pregunta:
      "El Green IT (TI Verde) busca mejorar la sostenibilidad ambiental mediante:",
    opciones: [
      "Código eficiente para reducir el consumo eléctrico en data centers",
      "Uso de servidores obsoletos para ahorrar presupuesto",
      "Eliminar todas las computadoras del personal técnico",
      "Publicitar la marca de la organización como ecológica",
    ],
    correcta: 0,
  },
  {
    nivel: 1,
    tema: "ambiente",
    pregunta:
      "Alinear un proyecto con los Objetivos de Desarrollo Sostenible (ODS) de la ONU ayuda a:",
    opciones: [
      "Generar menos documentos de lecciones aprendidas",
      "Aumentar el precio de venta final de forma ilegal",
      "Mejorar la aceptación social y la resiliencia a largo plazo",
      "Eliminar el cumplimiento de normativas gubernamentales",
    ],
    correcta: 2,
  },
  {
    nivel: 1,
    tema: "ambiente",
    pregunta:
      "Las siglas ESG se refieren a tres marcos de evaluación clave que son:",
    opciones: [
      "Estándar, Sistema y Gestión",
      "Eficiencia, Servicio y Garantía",
      "Estilo, Soporte y Graficación",
      "Ambiental, Social y Gobernanza",
    ],
    correcta: 3,
  },

  // ==========================================
  // NIVEL 2 - CALIDAD, MANTENIMIENTO Y AMBIENTE (Intermedio)
  // Distribución: 0: (5) | 1: (5) | 2: (5) | 3: (5)
  // ==========================================
  {
    nivel: 2,
    tema: "calidad",
    pregunta:
      "¿Cuáles son los tres grandes procesos interrelacionados que propone la gestión de calidad según el apunte?",
    opciones: [
      "Venta, Entrega y Soporte post-venta del producto",
      "Planificar la calidad, Gestionar la calidad y Controlar la calidad",
      "Identificar bugs, Corregir código y Documentar errores",
      "Contratación, Evaluación de personal y Cierre de contratos",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "calidad",
    pregunta:
      "La métrica de calidad denominada MTBF (Mean Time Between Failures) mide específicamente:",
    opciones: [
      "El número total de líneas de código cubiertas por pruebas",
      "La satisfacción y lealtad del usuario con el producto final",
      "El tiempo promedio que transcurre entre fallos del sistema",
      "La cantidad de defectos por cada 1.000 líneas de código",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "calidad",
    pregunta:
      "Dentro de las métricas de calidad, el NPS (Net Promoter Score) tiene como objetivo:",
    opciones: [
      "Medir la satisfacción y lealtad del usuario con el software",
      "Calcular el tiempo que el programador tarda en cerrar un ticket",
      "Contar el porcentaje de código duplicado en la base de datos",
      "Verificar cuántas etiquetas HTML fueron cerradas incorrectamente",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "calidad",
    pregunta:
      "¿En qué consiste la tendencia moderna denominada 'Testing Shift-Left'?",
    opciones: [
      "Mover las pruebas de calidad al final de la etapa de cierre",
      "Asignar la responsabilidad de las pruebas a un tercero externo",
      "Ocultar los resultados de las pruebas a los stakeholders principales",
      "Incorporar pruebas y actividades de calidad lo más temprano posible en el desarrollo",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "calidad",
    pregunta:
      "Técnicamente, el Aseguramiento de la Calidad (QA) busca responder la siguiente inquietud:",
    opciones: [
      "¿Seguimos los procesos de trabajo correctos para evitar defectos?",
      "¿Cuántos errores detectó el sistema durante el último mes?",
      "¿Cuál es el margen de ganancia neta después del mantenimiento?",
      "¿Qué color de fondo prefiere el cliente para el prototipo?",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "calidad",
    pregunta:
      "Las pruebas de Aceptación del Usuario (UAT), Pruebas Alfa y Beta son actividades propias de:",
    opciones: [
      "La fase inicial de relevamiento",
      "La etapa técnica de Validación del software",
      "La estimación del costo de conformidad técnica",
      "La reestructuración manual de la base de datos",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "calidad",
    pregunta:
      "Según el modelo de madurez CMMI, un proceso que se encuentra estandarizado en toda la organización está en el nivel:",
    opciones: [
      "Nivel 1 (Inicial)",
      "Nivel 2 (Gestionado)",
      "Nivel 3 (Definido)",
      "Nivel 5 (En optimización)",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "mantenimiento",
    pregunta:
      "Estadísticamente, el costo del mantenimiento suele representar un porcentaje del ciclo de vida total entre el:",
    opciones: ["1% y el 5%", "10% y el 20%", "25% y el 50%", "60% y el 80%"],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "mantenimiento",
    pregunta:
      "¿A qué se refiere la 'Paradoja del Mantenimiento' según la Ley de Lehman?",
    opciones: [
      "Al mantener o mejorar un sistema, su complejidad tiende a aumentar, encareciendo el mantenimiento futuro",
      "Un software que no tiene errores hoy tendrá más errores el día de mañana obligatoriamente",
      "Mientras menos documentación tenga un sistema, más fácil será de mantener por técnicos expertos",
      "El costo de mantenimiento baja drásticamente cuanto más viejo es el sistema operativo",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "mantenimiento",
    pregunta:
      "La técnica de Refactoring (Refactorización) consiste técnicamente en:",
    opciones: [
      "Eliminar el software antiguo y desarrollarlo de nuevo desde cero",
      "Reestructurar el código existente sin cambiar su comportamiento externo",
      "Agregar nuevas funcionalidades para mejorar el rendimiento comercial",
      "Documentar manualmente los errores que el programador no pudo resolver",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "mantenimiento",
    pregunta:
      "¿Qué situación representa un ejemplo de Mantenimiento Adaptativo?",
    opciones: [
      "Corregir una vulnerabilidad de seguridad descubierta ayer",
      "Eliminar código innecesario para optimizar la velocidad",
      "Adaptar una aplicación de Windows 10 para que funcione en Windows 11",
      "Arreglar un error que impide a los usuarios realizar pagos con tarjeta",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "mantenimiento",
    pregunta:
      "En un acuerdo SLA, si un incidente se califica con severidad Crítica (P1), ¿qué tiempos suelen establecerse?",
    opciones: [
      "Respuesta inmediata y resolución en menos de diez minutos",
      "Respuesta en un día y resolución durante el transcurso del mes",
      "Respuesta en 8 horas y resolución tras consultar con el proveedor externo",
      "Respuesta en 1 hora y resolución en aproximadamente 4 horas",
    ],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "mantenimiento",
    pregunta: "La disponibilidad de un software se mide específicamente por:",
    opciones: [
      "La proporción de tiempo en que el sistema está operativo y listo para su uso",
      "El número de descargas que tiene la aplicación en la tienda virtual",
      "La cantidad de veces que el Director de Proyecto aprueba el presupuesto",
      "El esfuerzo necesario para cambiar un módulo de la base de datos",
    ],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "mantenimiento",
    pregunta:
      "¿Qué norma define las características de calidad del producto (adecuación, fiabilidad, seguridad, etc.)?",
    opciones: [
      "ISO 9001",
      "ISO/IEC 25010",
      "Ley de Lehman técnica",
      "Framework del PMBOK",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ambiente",
    pregunta:
      "Las estrategias de mitigación ambiental buscan anticiparse a los daños. En esta fase es vital:",
    opciones: [
      "Contratar solo programadores que vivan cerca de la oficina central",
      "Descartar todos los equipos informáticos que tengan más de un año",
      "Realizar estudios previos para identificar y predecir posibles efectos negativos",
      "Evitar la documentación para ahorrar el consumo excesivo de papel",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "ambiente",
    pregunta:
      "Según la jerarquía 4R, la acción de reincorporar residuos al ciclo productivo se denomina:",
    opciones: ["Reducir", "Reutilizar", "Tratar", "Reciclar"],
    correcta: 3,
  },
  {
    nivel: 2,
    tema: "ambiente",
    pregunta:
      "¿Qué ODS (Objetivo de Desarrollo Sostenible) se enfoca en energía asequible y no contaminante?",
    opciones: ["ODS 7", "ODS 11", "ODS 12", "ODS 13"],
    correcta: 0,
  },
  {
    nivel: 2,
    tema: "ambiente",
    pregunta:
      "¿En qué unidades se expresa generalmente la Huella de Carbono de un proyecto?",
    opciones: [
      "Líneas de código ineficientes",
      "Emisiones totales de CO2 equivalente",
      "Puntos de función de hardware reciclado",
      "Megavatios consumidos por el Scrum Master",
    ],
    correcta: 1,
  },
  {
    nivel: 2,
    tema: "ambiente",
    pregunta:
      "La evaluación ESG ayuda a las empresas frente a inversores porque incorpora criterios de:",
    opciones: [
      "Velocidad de carga de datos únicamente",
      "Bajos sueldos técnicos y alta rotación de equipo",
      "Impacto ambiental, responsabilidad social y buena gobernanza",
      "Cantidad de certificaciones locales sin validación oficial",
    ],
    correcta: 2,
  },
  {
    nivel: 2,
    tema: "ambiente",
    pregunta:
      "¿Cómo se denomina al modelo opuesto al sistema lineal de producir, usar y desechar?",
    opciones: [
      "Evolución Digital Sostenible",
      "Mantenimiento Adaptativo Ambiental",
      "Ciclo de Vida en Cascada Verde",
      "Economía Circular",
    ],
    correcta: 3,
  },

  // ==========================================
  // NIVEL 3 - CALIDAD, MANTENIMIENTO Y AMBIENTE (Avanzado)
  // Distribución: 0: (5) | 1: (5) | 2: (5) | 3: (5)
  // ==========================================
  {
    nivel: 3,
    tema: "calidad",
    pregunta:
      "¿A qué categoría de costo pertenece el 'retrabajo' generado por defectos detectados tardíamente en el ciclo de desarrollo?",
    opciones: [
      "Costos de no conformidad",
      "Costos de prevención operativa",
      "Gasto de mantenimiento adaptativo",
      "Costo de evaluación de conformidad",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "calidad",
    pregunta:
      "En el modelo de madurez de procesos CMMI, ¿cuál es el nivel donde se aplica el control estadístico sobre los procesos?",
    opciones: [
      "Nivel 5: En optimización continua",
      "Nivel 4: Gestionado cuantitativamente",
      "Nivel 3: Definido por la organización",
      "Nivel 2: Gestionado por proyectos",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "calidad",
    pregunta:
      "Según el estándar ISO/IEC 25010, la característica de 'Portabilidad' del software se define como:",
    opciones: [
      "La rapidez del procesamiento bajo carga máxima",
      "La facilidad de uso para el ciudadano promedio",
      "Capacidad del software de ser transferido de un entorno a otro",
      "El grado de resistencia ante vulnerabilidades de red",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "mantenimiento",
    pregunta:
      "¿Qué postula técnicamente la Ley de Lehman sobre la evolución de los sistemas de software?",
    opciones: [
      "El mantenimiento preventivo elimina la deuda técnica",
      "La fiabilidad aumenta proporcionalmente al tiempo",
      "Los sistemas tienden a simplificarse tras cada ajuste",
      "Al evolucionar, la complejidad de un sistema aumenta a menos que se trabaje para mantenerla",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "mantenimiento",
    pregunta:
      "En la definición de un Service Level Agreement (SLA), un incidente de severidad Alta (P2) requiere resolución en:",
    opciones: [
      "24 horas",
      "1 hora de respuesta operativa",
      "72 horas laborales",
      "Una semana tras la revisión del caso",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "calidad",
    pregunta:
      "¿Cuál es la principal ventaja estratégica del enfoque Shift-left dentro de la gestión moderna?",
    opciones: [
      "Reducir la cantidad de personal técnico junior",
      "Identificar y resolver defectos en las fases iniciales de diseño y planificación",
      "Transferir los riesgos tecnológicos a un socio externo",
      "Optimizar los costos de no conformidad al cierre del ciclo",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mantenimiento",
    pregunta:
      "Refactorizar el código de un proceso para bajar el tiempo de respuesta de 3 a 1 segundo sin cambiar su función es:",
    opciones: [
      "Un proceso preventivo de obsolescencia",
      "Una identificación reactiva de defectos",
      "Mantenimiento perfectivo orientado a la eficiencia",
      "Una reestructuración del acta de constitución",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "ambiente",
    pregunta:
      "La medición de la Huella de Carbono del Proyecto permite identificar las fuentes de mayor impacto analizando:",
    opciones: [
      "Solamente los gastos monetarios en logística",
      "Únicamente los residuos generados en las oficinas",
      "La cantidad de lecciones aprendidas archivadas",
      "Las emisiones de CO2 generadas directa e indirectamente",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "calidad",
    pregunta:
      "Es considerada una actividad técnica propia y exclusiva del proceso de Verificación según el material:",
    opciones: [
      "Inspección del código fuente y revisión de documentos de diseño",
      "Pruebas beta controladas con usuarios finales reales",
      "Evaluación del impacto estratégico ante los inversores",
      "Gestión de reclamos a través del soporte posventa",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "ambiente",
    pregunta:
      "¿Qué certificación ISO es la referencia específica para el establecimiento de un sistema de gestión de la energía?",
    opciones: ["ISO/IEC 27001", "ISO 50001", "ISO 9001", "ISO 14001"],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "calidad",
    pregunta:
      "La técnica de Refactoring se vincula directamente con la deuda técnica debido a que:",
    opciones: [
      "Es una acción que el cliente debe pagar por separado",
      "Oculta la falta de liderazgo del director de proyecto",
      "Mejora la legibilidad interna y reduce complicaciones futuras",
      "Sustituye por completo al Aseguramiento de Calidad",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "ambiente",
    pregunta:
      "En el marco de la gestión ambiental corporativa, la Economía Circular busca promover:",
    opciones: [
      "La extracción masiva de nuevos recursos minerales",
      "El desecho secuencial de hardware informático",
      "La obsolescencia programada para favorecer ventas",
      "Ciclos cerrados para mantener recursos en uso el mayor tiempo posible",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "calidad",
    pregunta:
      "La metodología Six Sigma establece un umbral de calidad extremadamente alto definido por un máximo de:",
    opciones: [
      "3,4 defectos por cada millón de oportunidades",
      "Tres incidentes críticos permitidos en cada sprint",
      "Sesenta por ciento de ahorro en mantenimiento correctivo",
      "Diez fallos registrados mensualmente en el sistema",
    ],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "ambiente",
    pregunta:
      "Siguiendo la jerarquía 4R aplicada a proyectos, ¿cuál es la medida más efectiva para mitigar residuos?",
    opciones: [
      "Tratar los materiales tóxicos tras su generación",
      "Reducir el volumen de residuos desde el origen",
      "Reciclar el papel utilizado en el plan de comunicaciones",
      "Reutilizar insumos digitales de proyectos finalizados",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "mantenimiento",
    pregunta:
      "¿Cuál de las siguientes normas internacionales define formalmente los procesos de mantenimiento de software?",
    opciones: [
      "ISO 21500 de dirección de proyectos",
      "ISO/IEC 9126 de portabilidad técnica",
      "ISO/IEC 14764 de ingeniería de software",
      "Guía PMBOK en su módulo transversal",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "ambiente",
    pregunta:
      "La integración de marcos de evaluación ESG permite a la organización de un proyecto:",
    opciones: [
      "Ignorar las normativas ambientales gubernamentales",
      "Evitar la participación activa de los stakeholders",
      "Descentralizar la planificación hacia terceros externos",
      "Lograr mayor acceso a financiamiento y resiliencia institucional",
    ],
    correcta: 3,
  },
  {
    nivel: 3,
    tema: "ambiente",
    pregunta:
      "¿A qué objetivo de la agenda ONU 2030 pertenece el concepto de producción y consumo responsables?",
    opciones: ["ODS 12", "ODS 7", "ODS 13", "ODS 11"],
    correcta: 0,
  },
  {
    nivel: 3,
    tema: "calidad",
    pregunta:
      "Según la norma ISO 25010, ¿cuál de las siguientes es una sub-característica de la Mantenibilidad?",
    opciones: [
      "La satisfacción global de los usuarios finales",
      "La modularidad presente en el diseño estructural",
      "El nivel de ruido visual de la interfaz del usuario",
      "La velocidad de transmisión en las APIs de servidor",
    ],
    correcta: 1,
  },
  {
    nivel: 3,
    tema: "calidad",
    pregunta:
      "El proceso de Validación se considera vital y diferente al de Verificación porque su foco es:",
    opciones: [
      "Analizar los informes de estado de avance técnicos",
      "Someter a pruebas el acta de constitución de proyecto",
      "Confirmar que el producto satisface el propósito previsto",
      "Registrar los costos de conformidad por cada recurso",
    ],
    correcta: 2,
  },
  {
    nivel: 3,
    tema: "calidad",
    pregunta:
      "La gestión moderna prioriza la inversión en prevención en lugar de inspección con el fin de:",
    opciones: [
      "Aumentar el número de testeos al final del cierre",
      "Favorecer exclusivamente al equipo de desarrollo junior",
      "Ahorrar espacio en el almacenamiento de documentación",
      "Reducir drásticamente los elevados costos de fallas externas",
    ],
    correcta: 3,
  },
];
