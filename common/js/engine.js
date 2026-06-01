/**
 * MOTOR DE EXAMEN CENTRALIZADO (v1.2.0)
 * Este archivo gestiona dinámicamente cualquier materia
 * importando su banco de preguntas desde la carpeta correspondiente.
 */

// --- 1. CONFIGURACIÓN INICIAL ---
let preguntasSeleccionadas = [];
const urlParams = new URLSearchParams(window.location.search);

// Parámetros técnicos
const materiaActiva = urlParams.get("materia") || "frontend";
const nivelActual = parseInt(urlParams.get("nivel")) || 1;
const temaActual = urlParams.get("tema") || "mix";

// Elementos del DOM
const contenedor = document.getElementById("quiz-engine");
const headerTitulo = document.getElementById("exam-title");
const btnFinalizar = document.getElementById("btn-finalizar");
const resultadoDiv = document.getElementById("resultado-final");

// Diccionario de etiquetas amigables
const etiquetasMateria = {
  frontend: {
    titulo: "Desarrollo Frontend",
    temas: {
      html: "HTML5",
      css: "CSS3",
      bootstrap: "Bootstrap",
      mix: "Temas mixtos",
    },
  },
  "gestion-proyectos": {
    titulo: "Gestión de Proyectos",
    temas: {
      intro: "Fundamentos",
      variables: "Las 4 Variables",
      equipo: "Equipo",
      ciclo: "Ciclos de Vida",
      agile: "Manifiesto Ágil",
      modelos: "Modelos",
      diagramas: "Redes",
      critica: "Ruta Crítica",
      agenda: "Agenda",
      mix: "Integral",
    },
  },
};

/**
 * CARGA DINÁMICA DE PREGUNTAS
 * Importa el archivo preguntas.js de la carpeta de la materia actual
 */
async function cargarBancoYIniciar() {
  try {
    // Importación dinámica basada en la ruta del archivo relativo al engine central
    // Se asume la estructura /materia/js/preguntas.js
    const moduloPreguntas = await import(
      `../../${materiaActiva}/js/preguntas.js`
    );
    const bancoCompleto = moduloPreguntas.bancoPreguntas;

    inicializarExamen(bancoCompleto);
  } catch (error) {
    console.error("Error cargando el banco de datos:", error);
    contenedor.innerHTML = `<div class="col-12 p-5 text-center alert-error-tech">
            Error crítico: No se pudo conectar con el banco de preguntas de ${materiaActiva}.
        </div>`;
  }
}

function inicializarExamen(banco) {
  const gruposDeTemas = {
    calidad: ["calidad", "mantenimiento", "ambiente"],
    riesgos: ["riesgos"], // Aquí podrías añadir otros si hiciera falta
  };

  // 2. Si el tema actual está en el grupo, usamos el array de temas. Si no, solo el tema individual.
  let temasAFiltrar = gruposDeTemas[temaActual] || [temaActual];

  // 3. Modificamos el filtro para que busque cualquiera de los temas del grupo
  let bancoFiltrado = banco.filter((p) => {
    const nivelCoincide = p.nivel === nivelActual;

    if (temaActual === "mix") {
      return nivelCoincide;
    } else {
      return nivelCoincide && temasAFiltrar.includes(p.tema);
    }
  });

  // 4. Seleccionar 20 y barajar
  preguntasSeleccionadas = barajar(bancoFiltrado).slice(0, 20);

  // 3. UI Título dinámico
  const infoMateria = etiquetasMateria[materiaActiva] || {
    titulo: materiaActiva,
    temas: {},
  };
  const nombreTema = infoMateria.temas[temaActual] || temaActual.toUpperCase();
  headerTitulo.innerText = `${infoMateria.titulo} - Nivel ${nivelActual}: ${nombreTema}`;

  if (preguntasSeleccionadas.length === 0) {
    contenedor.innerHTML = `<div class="col-12 p-5 text-center alert-error-tech">No se encontraron preguntas suficientes.</div>`;
    btnFinalizar.classList.add("d-none");
    return;
  }

  renderizarPreguntas();
}

function escaparHtml(texto) {
  if (!texto) return "";
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function barajar(array) {
  return array.sort(() => Math.random() - 0.5);
}

function renderizarPreguntas() {
  contenedor.innerHTML = "";
  preguntasSeleccionadas.forEach((p, index) => {
    if (!p.opciones || p.opciones.length === 0) return;

    const cardCol = document.createElement("div");
    cardCol.className =
      "col-12 animate__animated animate__fadeInUp question-node";
    cardCol.style.animationDelay = `${index * 0.05}s`;

    cardCol.innerHTML = `
            <div class="custom-card mb-4">
                <div class="custom-card-header">
                    <span>Pregunta ${index + 1}</span>
                    <span class="badge bg-secondary">${p.tema}</span>
                </div>
                <div class="card-body">
                    <h5 class="mb-4 text-dark fw-bold">${index + 1}. ${escaparHtml(p.pregunta)}</h5>
                    <div class="options-container">
                        ${p.opciones
                          .map(
                            (opc, i) => `
                            <div class="form-check custom-option mb-3">
                                <input class="form-check-input" type="radio" 
                                    name="q${index}" id="q${index}o${i}" value="${i}">
                                <label class="form-check-label px-3 py-2 w-100" for="q${index}o${i}" 
                                       style="border: 1px solid #ccc; border-radius: 4px; cursor: pointer;">
                                    ${escaparHtml(opc)}
                                </label>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            </div>`;
    contenedor.appendChild(cardCol);
  });
}

btnFinalizar.addEventListener("click", () => {
  let aciertos = 0;
  const cards = document.querySelectorAll(".question-node");

  preguntasSeleccionadas.forEach((p, index) => {
    const radioSelected = document.querySelector(
      `input[name="q${index}"]:checked`,
    );
    const valorElegido = radioSelected ? parseInt(radioSelected.value) : null;
    const currentCard = cards[index].querySelector(".custom-card");
    const labels = cards[index].querySelectorAll(".form-check-label");

    if (valorElegido === p.correcta) {
      aciertos++;
      currentCard.classList.add("border-success-tech");
      labels[p.correcta].style.backgroundColor =
        "var(--primary-green, #d0ff41)";
      labels[p.correcta].style.color = "black";
    } else {
      currentCard.classList.add("border-danger-tech");
      if (valorElegido !== null && labels[valorElegido]) {
        labels[valorElegido].style.borderColor = "#ff5f5f";
        labels[valorElegido].style.color = "#ff5f5f";
      }
      if (labels[p.correcta]) {
        labels[p.correcta].style.border = "2px solid var(--text-main, #282828)";
        labels[p.correcta].innerHTML +=
          ` <small class="fw-bold ms-2">(Correcta)</small>`;
      }
    }
    cards[index].querySelectorAll("input").forEach((i) => (i.disabled = true));
  });

  mostrarResultadoFinal(aciertos);
});

function mostrarResultadoFinal(aciertos) {
  const total = preguntasSeleccionadas.length;
  const porcentaje = (aciertos / total) * 100;
  resultadoDiv.classList.remove("d-none");
  document.getElementById("puntaje-score").innerText = `${aciertos} / ${total}`;

  const msgLabel = document.getElementById("msg-final");
  if (porcentaje >= 60) {
    msgLabel.innerText = "Resultado satisfactorio";
    msgLabel.className = "h5 mb-5 py-2 px-4 d-inline-block alert-success-tech";
  } else {
    msgLabel.innerText = "Resultado insuficiente";
    msgLabel.className =
      "h5 mb-5 py-2 px-4 d-inline-block alert-error-tech text-white";
  }
  btnFinalizar.style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// EJECUCIÓN INICIAL
cargarBancoYIniciar();
