/**
 * VIRTUAL PHYSICS LAB - ENGINE v1.7.0
 * Misión: Validación de Cálculos en Sistemas Mecánicos
 */

const misionesFisica = [
  {
    fase: 1,
    subtitulo: "Segunda Ley: Análisis de Empuje",
    escenario:
      "Se tiene un bloque industrial con una masa [m] de 15 kg sobre una superficie ideal (sin rozamiento). Se le aplica una fuerza neta de 45 N en sentido horizontal.",
    objetivo: "Calcular la aceleración del sistema [a].",
    formula: "F = m · a",
    ayuda: "Divida la Fuerza neta por la Masa del objeto. Unidad: m/s².",
    resultadoCorrecto: 3,
  },
  {
    fase: 2,
    subtitulo: "Estática: Torque en Grúa",
    escenario:
      "Una viga técnica en equilibrio tiene un peso de 100 N. Se aplica una fuerza perpendicular en un extremo a 2 metros del eje de rotación.",
    objetivo: "¿Cuál es el Momento de la Fuerza [M] aplicado?",
    formula: "M = F · d",
    ayuda: "Multiplique la fuerza por la distancia al eje. Unidad: Nm.",
    resultadoCorrecto: 200,
  },
  {
    fase: 3,
    subtitulo: "Dinámica con Fricción",
    escenario:
      "Un contenedor de 10 kg se mueve a velocidad constante (a=0) sobre un suelo rugoso. Si la fuerza de empuje aplicada es de 20 N...",
    objetivo: "¿Cuánto vale la Fuerza de Rozamiento Cinético [fk]?",
    formula: "ΣF = 0 (Si v es cte)",
    ayuda:
      "Si el cuerpo no acelera, la fuerza que se opone debe ser de igual magnitud a la fuerza de empuje. Unidad: N.",
    resultadoCorrecto: 20,
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

function cargarExperimento() {
  const data = misionesFisica[indiceActual];
  panelMensajes.classList.add("d-none");

  titulofase.innerText = `FASE ${data.fase}: ${data.subtitulo}`;
  areaCaso.innerHTML = `
        <p class="mb-2"><strong>Descripción del sistema:</strong></p>
        <p>${data.escenario}</p>
        <div class="p-3 border bg-light small mb-3"><strong>OBJETIVO:</strong> ${data.objetivo}</div>
    `;

  formulaBox.innerText = data.formula;
  document.getElementById("ayuda-hint").innerText = data.ayuda;

  // Generar campo de respuesta
  inputsArea.innerHTML = `
        <div class="input-group">
            <input type="number" id="user-calc" class="form-control border-dark border-2 rounded-0" placeholder="Ingrese el resultado...">
            <button onclick="validarResultado()" class="btn btn-tech px-4">VALIDAR CIFRA</button>
        </div>
    `;
}

window.validarResultado = function () {
  const inputVal = parseFloat(document.getElementById("user-calc").value);
  const data = misionesFisica[indiceActual];

  if (inputVal === data.resultadoCorrecto) {
    finalizarFase();
  } else {
    errorFase();
  }
};

function finalizarFase() {
  panelMensajes.innerText =
    "Cifra verificada. Sincronizando datos del sistema...";
  panelMensajes.className =
    "alert alert-success-tech p-3 mt-3 animate__animated animate__pulse";
  panelMensajes.classList.remove("d-none");

  setTimeout(() => {
    indiceActual++;
    if (indiceActual < misionesFisica.length) {
      cargarExperimento();
    } else {
      // FIN DEL LABORATORIO
      modalFinal.classList.remove("d-none");
      modalFinal.classList.add("d-flex");
    }
  }, 2500);
}

function errorFase() {
  panelMensajes.innerText =
    "Error de precisión. El valor no coincide con el modelo físico.";
  panelMensajes.className =
    "alert alert-danger p-3 mt-3 animate__animated animate__shakeX text-white bg-dark border-danger border-2";
  panelMensajes.classList.remove("d-none");
}

// Inicializar laboratorio al cargar
document.addEventListener("DOMContentLoaded", cargarExperimento);
