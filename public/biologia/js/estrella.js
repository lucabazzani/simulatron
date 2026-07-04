/**
 * MICROSCOPIO VIRTUAL v1.0.2 - Versión con Imágenes
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. CONFIGURACIÓN DE MISIONES ---
  const misionesBio = [
    {
      titulo: "Fase 1: La Central Energética",
      descripcion:
        "Se observa una estructura compleja encargada de la respiración celular y la producción de ATP.",
      img: "mitocondria.png",
      opciones: ["Núcleo", "Mitocondria", "Ribosoma", "Membrana"],
      correcta: "Mitocondria",
      ayuda: "Busque la organela que transforma nutrientes en energía química.",
    },
    {
      titulo: "Fase 2: El Centro de Mando",
      descripcion:
        "Se identifica una estructura que contiene el material genético (ADN) y regula el metabolismo celular.",
      img: "nucleo.png",
      opciones: ["Núcleo", "Vacuola", "Cloroplasto", "Pared Celular"],
      correcta: "Núcleo",
      ayuda:
        "Es el compartimento que protege el manual de instrucciones de la célula.",
    },
    {
      titulo: "Fase 3: Barrera Selectiva",
      descripcion:
        "Se analiza la bicapa lipídica que delimita la célula y regula el intercambio de sustancias.",
      img: "membrana.png",
      opciones: [
        "Pared Celular",
        "Citoplasma",
        "Membrana Plasmática",
        "Ribosoma",
      ],
      correcta: "Membrana Plasmática",
      ayuda: "Es el filtro que decide qué entra y qué sale.",
    },
    {
      titulo: "Fase 4: Fábrica de Proteínas",
      descripcion:
        "Se observan pequeñas estructuras responsables de la síntesis de proteínas.",
      img: "ribosoma.png",
      opciones: ["Cloroplasto", "Ribosoma", "Vacuola", "Mitocondria"],
      correcta: "Ribosoma",
      ayuda: "Son las máquinas moleculares que leen el ARN.",
    },
  ];

  let misionActual = 0;

  // Elementos del DOM
  const tituloMision = document.getElementById("mision-title");
  const descMision = document.getElementById("mision-desc");
  const contenedorOpciones = document.getElementById("opciones-grid");
  const btnVerificar = document.getElementById("verify-btn");
  const msgFeedback = document.getElementById("feedback-panel");
  const modalLogro = document.getElementById("modal-logro");
  const textoAyuda = document.getElementById("ayuda-texto");
  const imgMuestra = document.getElementById("sample-img");

  function cargarMision(index) {
    const data = misionesBio[index];
    tituloMision.innerText = data.titulo;
    descMision.innerText = data.descripcion;
    textoAyuda.innerText = data.ayuda;

    // Actualizar imagen
    imgMuestra.src = `../common/assets/${data.img}`;

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
    const data = misionesBio[misionActual];
    if (window.seleccionada === data.correcta) {
      mensajeExito();
    } else {
      mensajeError();
    }
  };

  function mensajeExito() {
    msgFeedback.innerHTML = `<strong>Correcto:</strong> Identificado como ${window.seleccionada}.`;
    msgFeedback.className =
      "alert alert-success-tech p-3 mt-3 animate__animated animate__fadeInUp";
    msgFeedback.classList.remove("d-none");
    btnVerificar.classList.add("d-none");

    setTimeout(() => {
      misionActual++;
      if (misionActual < misionesBio.length) {
        cargarMision(misionActual);
      } else {
        modalLogro.classList.remove("d-none");
        modalLogro.classList.add("d-flex");
      }
    }, 2000);
  }

  function mensajeError() {
    msgFeedback.innerHTML = `<strong>Error:</strong> Incorrecto. Ajuste el enfoque.`;
    msgFeedback.className =
      "alert alert-error-tech p-3 mt-3 animate__animated animate__shakeX";
    msgFeedback.classList.remove("d-none");
  }

  cargarMision(0);
});
