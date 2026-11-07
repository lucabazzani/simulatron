document.addEventListener("DOMContentLoaded", () => {
  const misionesQA = [
    {
      titulo: "Caso 1: Requisito correcto, producto incorrecto",
      escenario: "AUDITORÍA V&V:\nEl sistema cumple el diseño y las pruebas unitarias, pero el flujo entregado no resuelve la operación real del cliente.\n\n¿Qué dictamen corresponde?",
      opciones: ["Falla de validación", "Falla de verificación", "Defecto de sintaxis", "Falso positivo"],
      correcta: "Falla de validación",
      ayuda: "La validación pregunta si se construyó el producto correcto para las necesidades reales; la verificación se ocupa de la conformidad técnica.",
    },
    {
      titulo: "Caso 2: Trazabilidad de una incidencia",
      escenario: "CADENA CAUSAL IEEE 610.12:\nUn analista interpreta mal una regla, introduce una condición errónea y, al ejecutarse un caso, el sistema devuelve un resultado inesperado.\n\n¿Cuál es la secuencia?",
      opciones: ["Falla → defecto → error", "Error → defecto → falla", "Defecto → validación → error", "Caso → revisión → requisito"],
      correcta: "Error → defecto → falla",
      ayuda: "La equivocación humana produce un defecto estático; su activación en ejecución produce la falla observable.",
    },
    {
      titulo: "Caso 3: Diseño evaluativo",
      escenario: "DISEÑO DE PRUEBA:\nEl campo 'Edad' acepta 18 a 65. El auditor no conoce el código y propone 17, 18, 19, 64, 65 y 66.\n\n¿Qué decisión es técnicamente correcta?",
      opciones: ["Usar caja blanca y cubrir bucles", "Eliminar límites y probar solo 40", "Usar caja negra con análisis de valores límite", "Sustituir el caso por una inspección"],
      correcta: "Usar caja negra con análisis de valores límite",
      ayuda: "La caja negra usa la especificación sin conocer la implementación; el análisis de valores límite explora extremos y vecinos.",
    },
    {
      titulo: "Caso 4: Arquitectura de soporte",
      escenario: "ARQUITECTURA CASE:\nRequisitos, modelos, código y casos de prueba se actualizan desde un repositorio central; distintas herramientas se integran sobre ese núcleo durante todo el ciclo.\n\n¿Qué combinación describe mejor el entorno?",
      opciones: ["Lower-CASE aislada y modelo de Tostadora", "Upper-CASE y revisión informal", "Editor gráfico sin semántica y caja gris", "I-CASE con una organización integrada tipo Cebolla"],
      correcta: "I-CASE con una organización integrada tipo Cebolla",
      ayuda: "I-CASE cubre el ciclo completo; en el modelo de Cebolla las herramientas se organizan por capas sobre un repositorio común.",
    },
  ];

  let misionActual = 0;
  let seleccionada = null;
  const tituloMision = document.getElementById("mision-title");
  const terminalEscenario = document.getElementById("terminal-scenario");
  const contenedorOpciones = document.getElementById("opciones-grid");
  const btnVerificar = document.getElementById("verify-btn");
  const msgFeedback = document.getElementById("feedback-panel");
  const modalLogro = document.getElementById("modal-logro");
  const textoAyuda = document.getElementById("ayuda-texto");

  function escaparHtml(cadena) {
    if (typeof cadena !== "string") return cadena;
    return cadena.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  function cargarMision(index) {
    const data = misionesQA[index];
    tituloMision.innerText = data.titulo;
    terminalEscenario.innerText = data.escenario;
    textoAyuda.innerText = data.ayuda;
    seleccionada = null;
    btnVerificar.classList.add("d-none");
    msgFeedback.className = "d-none";
    contenedorOpciones.innerHTML = "";
    data.opciones.forEach((opcion) => {
      const boton = document.createElement("button");
      boton.className = "btn btn-outline-tech w-100 mb-2 text-start small fw-bold";
      boton.innerHTML = `<span class="me-2 text-qa">►</span> ${escaparHtml(opcion)}`;
      boton.addEventListener("click", () => {
        Array.from(contenedorOpciones.children).forEach((item) => item.classList.remove("btn-tech"));
        boton.classList.add("btn-tech");
        seleccionada = opcion;
        btnVerificar.classList.remove("d-none");
      });
      contenedorOpciones.appendChild(boton);
    });
  }

  btnVerificar.addEventListener("click", () => {
    const data = misionesQA[misionActual];
    if (seleccionada === data.correcta) {
      msgFeedback.innerHTML = `<strong>Dictamen correcto:</strong> ${escaparHtml(data.ayuda)}`;
      msgFeedback.className = "alert alert-success-tech p-3 mt-3";
      btnVerificar.classList.add("d-none");
      setTimeout(() => {
        misionActual += 1;
        if (misionActual < misionesQA.length) cargarMision(misionActual);
        else {
          modalLogro.classList.remove("d-none");
          modalLogro.classList.add("d-flex");
        }
      }, 1200);
    } else {
      msgFeedback.innerHTML = "<strong>Dictamen incorrecto:</strong> Revisa el criterio técnico antes de continuar.";
      msgFeedback.className = "alert alert-danger p-3 mt-3 border border-dark rounded-0 fw-bold";
    }
  });

  cargarMision(0);
});
