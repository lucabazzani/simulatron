/**
 * EL VALIDADOR LÓGICO v1.5.0
 * Misión: Procesamiento de Tablas de Verdad
 */

// --- 1. CONFIGURACIÓN DE LAS MISIONES LÓGICAS ---
const misionesMat = [
  {
    titulo: "Fase 1: La Conjunción (p ∧ q)",
    proposicion: "p ∧ q",
    instrucciones:
      "Complete la tabla. Recuerde: La conjunción solo es verdadera si <b>ambas</b> son verdaderas.",
    // Resultados esperados en orden de la tabla (V-V, V-F, F-V, F-F)
    solucion: ["V", "F", "F", "F"],
    ayuda: "∧ (Y): V si p=V y q=V.",
  },
  {
    titulo: "Fase 2: El Condicional (p ⇒ q)",
    proposicion: "p ⇒ q",
    instrucciones:
      "¡Cuidado! El condicional es el conectivo más traicionero. Solo es falso cuando <b>V implica F</b>.",
    solucion: ["V", "F", "V", "V"],
    ayuda: "⇒ (Entonces): F solo si V implica F.",
  },
  {
    titulo: "Fase 3: Ley de Identidad (p ∧ q) ⇒ p",
    proposicion: "(p ∧ q) ⇒ p",
    instrucciones:
      "Analice esta proposición compuesta. ¿Logrará demostrar que es una Tautología (siempre verdadera)?",
    solucion: ["V", "V", "V", "V"],
    ayuda:
      "Resuelva primero el paréntesis (∧) y luego use ese resultado como antecedente de (⇒).",
  },
];

let misionActual = 0;

// Elementos del DOM
const contenedorTabla = document.getElementById("logica-grid");
const formulaText = document.getElementById("formula-display");
const descMision = document.getElementById("mision-desc");
const tituloMision = document.getElementById("mision-title");
const btnVerificar = document.getElementById("verify-btn");
const msgFeedback = document.getElementById("feedback-panel");
const modalLogro = document.getElementById("modal-logro");

// --- 2. MOTOR DEL JUEGO ---

function cargarMision(index) {
  const data = misionesMat[index];

  // UI Textos
  tituloMision.innerText = data.titulo;
  descMision.innerHTML = data.instrucciones;
  formulaText.innerText = data.proposicion;
  document.getElementById("ayuda-texto").innerText = data.ayuda;

  // Resetear Tabla
  renderizarTabla();
  msgFeedback.classList.add("d-none");
  btnVerificar.classList.remove("d-none");
}

function renderizarTabla() {
  // Generamos la estructura base: p, q | resultado
  const filasBase = [
    ["V", "V"],
    ["V", "F"],
    ["F", "V"],
    ["F", "F"],
  ];

  contenedorTabla.innerHTML = `
        <div class="row g-0 fw-bold border-bottom border-2 border-dark bg-light">
            <div class="col-3 p-2 border-end border-dark text-center">p</div>
            <div class="col-3 p-2 border-end border-dark text-center">q</div>
            <div class="col-6 p-2 text-center text-primary">Resultado</div>
        </div>
    `;

  filasBase.forEach((valores, i) => {
    const row = document.createElement("div");
    row.className = "row g-0 border-bottom border-dark";
    row.innerHTML = `
            <div class="col-3 p-3 border-end border-dark text-center bg-white">${valores[0]}</div>
            <div class="col-3 p-3 border-end border-dark text-center bg-white">${valores[1]}</div>
            <div class="col-6 p-2 text-center d-flex align-items-center justify-content-center cell-input" 
                 id="cell-${i}" onclick="cambiarValor(${i})">
                 ?
            </div>
        `;
    contenedorTabla.appendChild(row);
  });
}

// Interacción del usuario: click en la celda resultado
window.cambiarValor = function (id) {
  const cell = document.getElementById(`cell-${id}`);
  const actual = cell.innerText.trim();

  if (actual === "?") {
    cell.innerText = "V";
    cell.style.backgroundColor = "#e1fdfb";
    cell.style.color = "#0085a1";
  } else if (actual === "V") {
    cell.innerText = "F";
    cell.style.backgroundColor = "#fdeaea";
    cell.style.color = "#a10000";
  } else {
    cell.innerText = "?";
    cell.style.backgroundColor = "transparent";
    cell.style.color = "#666";
  }
};

// --- 3. VALIDACIÓN ---

btnVerificar.onclick = () => {
  const data = misionesMat[misionActual];
  let esCorrecto = true;

  for (let i = 0; i < 4; i++) {
    const userVal = document.getElementById(`cell-${i}`).innerText.trim();
    if (userVal !== data.solucion[i]) {
      esCorrecto = false;
      document
        .getElementById(`cell-${i}`)
        .classList.add("animate__animated", "animate__shakeX");
      setTimeout(
        () =>
          document
            .getElementById(`cell-${i}`)
            .classList.remove("animate__shakeX"),
        500,
      );
    }
  }

  if (esCorrecto) {
    mensajeExito(data.proposicion);
  } else {
    mensajeError();
  }
};

function mensajeExito(formula) {
  msgFeedback.innerHTML = `<strong>Sistema Verificado:</strong> La tabla para "${formula}" es consistente. Avanzando a la siguiente capa de memoria.`;
  msgFeedback.className =
    "alert alert-success-tech p-3 mt-3 animate__animated animate__fadeInUp";
  msgFeedback.classList.remove("d-none");
  btnVerificar.classList.add("d-none");

  setTimeout(() => {
    misionActual++;
    if (misionActual < misionesMat.length) {
      cargarMision(misionActual);
    } else {
      // FIN DEL JUEGO
      modalLogro.classList.remove("d-none");
      modalLogro.classList.add("d-flex");
    }
  }, 4000);
}

function mensajeError() {
  msgFeedback.innerHTML = `<strong>Falla Lógica:</strong> Los valores no coinciden con las leyes proposicionales. Revise el conectivo principal.`;
  msgFeedback.className =
    "alert alert-error-tech p-3 mt-3 animate__animated animate__shakeX";
  msgFeedback.classList.remove("d-none");
}

// Inicio
cargarMision(0);
