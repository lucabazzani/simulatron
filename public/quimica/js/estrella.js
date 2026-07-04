/**
 * VIRTUAL CHEMISTRY LAB - ENGINE v1.7.0
 * Objetivo: Validación de cálculos químicos esenciales
 */

const misionesQuimica = [
  {
    fase: 1,
    subtitulo: "Soluciones: Concentración % m/v",
    escenario:
      "Se prepara una solución disolviendo 5 g de soluto hasta completar 100 mL de solución.",
    objetivo: "Calcular la concentración expresada como % m/v.",
    formula: "% m/v = g de soluto / 100 mL de solución",
    ayuda: "Para 100 mL de solución, el valor numérico coincide con los gramos de soluto.",
    resultadoCorrecto: 5,
  },
  {
    fase: 2,
    subtitulo: "Masa molar: Agua",
    escenario:
      "Se analiza la fórmula H2O. Use H = 1 g/mol y O = 16 g/mol para el cálculo.",
    objetivo: "Determinar la masa molar de H2O en g/mol.",
    formula: "M(H2O) = 2 · H + 1 · O",
    ayuda: "Sume dos masas de hidrógeno y una masa de oxígeno.",
    resultadoCorrecto: 18,
  },
  {
    fase: 3,
    subtitulo: "Balanceo por tanteo",
    escenario:
      "Complete el coeficiente que falta en la ecuación: 2 H2 + O2 → ? H2O.",
    objetivo: "Indicar el coeficiente del agua para conservar H y O.",
    formula: "2 H2 + O2 → 2 H2O",
    ayuda: "Cuente átomos de hidrógeno y oxígeno a ambos lados de la flecha.",
    resultadoCorrecto: 2,
  },
];

let indiceActual = 0;

// Elementos DOM
const areaCaso = document.getElementById("escenario-texto");
const formulaBox = document.getElementById("formula-ref");
const inputsArea = document.getElementById("inputs-area");
const panelMensajes = document.getElementById("feedback-panel");
const modalFinal = document.getElementById("modal-logro");
const titulofase = document.getElementById("fase-header");

function cargarPractica() {
  const data = misionesQuimica[indiceActual];
  panelMensajes.classList.add("d-none");

  titulofase.innerText = `FASE ${data.fase}: ${data.subtitulo}`;
  areaCaso.innerHTML = `
        <p class="mb-2"><strong>Descripción del caso:</strong></p>
        <p>${data.escenario}</p>
        <div class="p-3 border bg-light small mb-3"><strong>OBJETIVO:</strong> ${data.objetivo}</div>
    `;

  formulaBox.innerText = data.formula;
  document.getElementById("ayuda-hint").innerText = data.ayuda;

  inputsArea.innerHTML = `
        <div class="input-group">
            <input type="number" id="user-calc" class="form-control border-dark border-2 rounded-0" placeholder="Ingrese el resultado...">
            <button onclick="validarResultado()" class="btn btn-tech px-4">VALIDAR CIFRA</button>
        </div>
    `;
}

window.validarResultado = function () {
  const inputVal = parseFloat(document.getElementById("user-calc").value);
  const data = misionesQuimica[indiceActual];

  if (inputVal === data.resultadoCorrecto) {
    finalizarFase();
  } else {
    errorFase();
  }
};

function finalizarFase() {
  panelMensajes.innerText = "Cifra verificada. Avanzando a la siguiente fase...";
  panelMensajes.className =
    "alert alert-success-tech p-3 mt-3 animate__animated animate__pulse";
  panelMensajes.classList.remove("d-none");

  setTimeout(() => {
    indiceActual++;
    if (indiceActual < misionesQuimica.length) {
      cargarPractica();
    } else {
      modalFinal.classList.remove("d-none");
      modalFinal.classList.add("d-flex");
    }
  }, 1800);
}

function errorFase() {
  panelMensajes.innerText =
    "El valor ingresado no coincide con el cálculo químico esperado.";
  panelMensajes.className =
    "alert alert-danger p-3 mt-3 animate__animated animate__shakeX text-white bg-dark border-danger border-2";
  panelMensajes.classList.remove("d-none");
}

document.addEventListener("DOMContentLoaded", cargarPractica);
