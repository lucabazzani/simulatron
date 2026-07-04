/**
 * EDITOR CRÍTICO v1.0.0
 * Misión: Corrección gramatical, cohesión y puntuación.
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. CONFIGURACIÓN DE MISIONES DE EDICIÓN ---
  const misionesLit = [
    {
      titulo: "Fase 1: Cohesión (Evitar repetición)",
      textoOriginal:
        "Juan fue al mercado. Juan compró manzanas. Juan las puso en la bolsa.",
      errorSegmento: "Juan (segunda aparición)",
      opciones: ["Juan", "Él", "El joven", "Dicho sujeto"],
      correcta: "Él",
      ayuda:
        "Utilice pronombres para evitar la repetición innecesaria del sustantivo.",
    },
    {
      titulo: "Fase 2: Conectores Lógicos",
      textoOriginal:
        "Quería ir al cine. Pero no tenía dinero suficiente para la entrada.",
      errorSegmento: "Pero",
      opciones: ["Aunque", "Sin embargo", "Porque", "Luego"],
      correcta: "Sin embargo",
      ayuda:
        "Busque un conector adversativo formal para iniciar la oración tras el punto.",
    },
    {
      titulo: "Fase 3: Puntuación y Acentuación",
      textoOriginal:
        "El profesor dijo que estudiaran mucho. Mañana sera el examen.",
      errorSegmento: "sera",
      opciones: ["sera", "será", "seria", "seran"],
      correcta: "será",
      ayuda:
        "Verifique la regla de tildación para palabras agudas terminadas en vocal.",
    },
    {
      titulo: "Fase 4: Coherencia y Concordancia",
      textoOriginal: "La lista de materiales escolares son muy largas.",
      errorSegmento: "son muy largas",
      opciones: [
        "son muy largas",
        "es muy larga",
        "está muy grande",
        "es muy largas",
      ],
      correcta: "es muy larga",
      ayuda:
        "Revise la concordancia entre el núcleo del sujeto ('lista') y el predicado.",
    },
  ];

  let misionActual = 0;

  // Elementos del DOM
  const tituloMision = document.getElementById("mision-title");
  const descMision = document.getElementById("mision-desc");
  const textoEditor = document.getElementById("editor-console");
  const contenedorOpciones = document.getElementById("opciones-grid");
  const btnVerificar = document.getElementById("verify-btn");
  const msgFeedback = document.getElementById("feedback-panel");
  const modalLogro = document.getElementById("modal-logro");
  const textoAyuda = document.getElementById("ayuda-texto");

  function cargarMision(index) {
    const data = misionesLit[index];
    tituloMision.innerText = data.titulo;
    textoAyuda.innerText = data.ayuda;

    // Renderizar texto con el error resaltado
    // Reemplazamos el error por un span estilizado
    const textoResaltado = data.textoOriginal.replace(
      data.errorSegmento,
      `<span class="text-error">${data.errorSegmento}</span>`,
    );
    textoEditor.innerHTML = textoResaltado;
    descMision.innerHTML = `Corrija el segmento resaltado: <strong>${data.errorSegmento}</strong>`;

    renderizarOpciones(data.opciones);
    msgFeedback.classList.add("d-none");
    btnVerificar.classList.add("d-none");
  }

  function renderizarOpciones(opciones) {
    contenedorOpciones.innerHTML = "";
    opciones.forEach((opc) => {
      const btn = document.createElement("button");
      btn.className = "btn btn-outline-tech w-100 mb-2 text-start";
      btn.innerText = opc;
      btn.onclick = () => {
        Array.from(contenedorOpciones.children).forEach((b) =>
          b.classList.remove("btn-tech"),
        );
        btn.classList.add("btn-tech");
        window.seleccionada = opc;
        btnVerificar.classList.remove("d-none");
      };
      contenedorOpciones.appendChild(btn);
    });
  }

  btnVerificar.onclick = () => {
    const data = misionesLit[misionActual];
    if (window.seleccionada === data.correcta) {
      mensajeExito();
    } else {
      mensajeError();
    }
  };

  function mensajeExito() {
    msgFeedback.innerHTML = `<strong>Correcto:</strong> "${window.seleccionada}" es la opción adecuada.`;
    msgFeedback.className =
      "alert alert-lit-tech p-3 mt-3 animate__animated animate__fadeInUp";
    msgFeedback.classList.remove("d-none");
    btnVerificar.classList.add("d-none");

    setTimeout(() => {
      misionActual++;
      if (misionActual < misionesLit.length) {
        cargarMision(misionActual);
      } else {
        modalLogro.classList.remove("d-none");
        modalLogro.classList.add("d-flex");
      }
    }, 2000);
  }

  function mensajeError() {
    msgFeedback.innerHTML = `<strong>Error:</strong> Esa corrección no es la adecuada. Revise las reglas de gramática y cohesión.`;
    msgFeedback.className =
      "alert alert-error-tech p-3 mt-3 animate__animated animate__shakeX";
    msgFeedback.classList.remove("d-none");
  }

  cargarMision(0);
});
