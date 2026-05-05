const misiones = [
  {
    fase: 1,
    encabezado: "DIAGNÓSTICO ESTRATÉGICO",
    pregunta:
      "El Directorio de la Cooperativa tiene un presupuesto rígido de $4.8M pero una incertidumbre total sobre los procesos agropecuarios a digitalizar. ¿Qué combinación técnica es la más adecuada para evitar el fracaso del proyecto?",
    opciones: [
      "Usar Cascada para asegurar el presupuesto y no hablar con el cliente hasta el final.",
      "Usar una Metodología Ágil pura y pedir presupuesto abierto por cada mes de trabajo.",
      "Implementar un Enfoque Híbrido: Precios/Plazos cerrados y desarrollo iterativo para validar requisitos.",
      "Utilizar el Modelo Espiral y centrarse exclusivamente en contratar seguros externos para delegar el riesgo.",
    ],
    correcta: 2,
    feedback:
      "¡Correcto! El enfoque Híbrido permite satisfacer la rigidez financiera del Directorio mientras el Prototipado ayuda a definir el alcance con los empleados resistentes al cambio.",
  },
  {
    fase: 2,
    encabezado: "ANÁLISIS DE RIESGOS (MATEMÁTICO)",
    pregunta:
      "Se detecta la 'Brecha de Conocimiento' (el proveedor no conoce el campo). El equipo técnico asigna una probabilidad de 0.7 y el impacto de retraso en la campaña de cosecha es de 0.9. ¿Qué exposición tiene este riesgo y cuál debe ser su prioridad según la tabla de impacto?",
    opciones: [
      "Exposición de 1.6 - Impacto Menor: El riesgo se acepta pasivamente.",
      "Exposición de 0.63 - Impacto Crítico: Se requiere un Plan de Mitigación inmediato.",
      "Exposición de 0.21 - Impacto Moderado: Solo se monitorea semanalmente.",
      "Exposición de 0.85 - Impacto Insignificante: No afecta el flujo de caja.",
    ],
    correcta: 1,
    feedback:
      "Exacto. La fórmula P×I nos da 0.63, lo que sitúa al riesgo en la zona Crítica del material de cátedra.",
  },
  {
    fase: 3,
    encabezado: "GOLPE DE TIMÓN (VARIABLES DE LLEDÓ)",
    pregunta:
      "A mitad del mes 4, se detecta que el 'Scope Creep' ha inflado los requisitos. El director decide no pedir más presupuesto. Basándote en el material del ISPC, ¿cuál será el resultado inevitable si no se equilibra este cambio?",
    opciones: [
      "El tiempo disminuirá porque el equipo trabajará bajo presión extrema.",
      "El alcance se mantendrá intacto pero la Calidad disminuirá o el Tiempo se excederá.",
      "El acta de constitución se anula y el proyecto pasa a ser de Producción en Serie.",
      "Los Stakeholders gubernamentales asumirán los costos extras mediante subsidios.",
    ],
    correcta: 1,
    feedback:
      "Lógica aplicada correctamente: Según Lledó, si el alcance aumenta sin variar el presupuesto (Costo), las variables de Tiempo o Calidad sufrirán el impacto.",
  },
];

let misionActual = 0;

// Elementos DOM
const modal = document.getElementById("modal-logro");
const msgPanel = document.getElementById("feedback-panel");
const contentArea = document.getElementById("mission-content");

function cargarMision() {
  const data = misiones[misionActual];
  msgPanel.classList.add("d-none");

  contentArea.innerHTML = `
        <div class="animate__animated animate__fadeIn">
            <span class="step-header">FASE ${data.fase}: ${data.encabezado}</span>
            <p class="fw-bold mb-4">${data.pregunta}</p>
            <div class="row g-3">
                ${data.opciones
                  .map(
                    (opc, index) => `
                    <div class="col-12">
                        <button onclick="validarOpcion(${index})" class="btn btn-outline-dark strategy-btn w-100 text-start p-3">
                            ${index + 1}. ${opc}
                        </button>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `;
}

window.validarOpcion = (idx) => {
  const data = misiones[misionActual];
  if (idx === data.correcta) {
    misionActual++;
    if (misionActual < misiones.length) {
      triggerSuccess(data.feedback, () => cargarMision());
    } else {
      // FIN DE TODO EL LABORATORIO
      triggerSuccess(data.feedback, () => {
        modal.classList.remove("d-none");
        modal.classList.add("d-flex");
      });
    }
  } else {
    msgPanel.innerText =
      "Error en el razonamiento de gestión. Verifique las restricciones del caso.";
    msgPanel.className =
      "alert alert-error-tech p-3 mt-3 animate__animated animate__shakeX";
    msgPanel.classList.remove("d-none");
  }
};

function triggerSuccess(txt, callback) {
  msgPanel.innerHTML = `<strong>VALIDADO:</strong> ${txt}`;
  msgPanel.className =
    "alert alert-success-tech p-3 mt-3 animate__animated animate__pulse";
  msgPanel.classList.remove("d-none");
  setTimeout(() => {
    callback();
  }, 4500);
}

// Iniciar
window.addEventListener("DOMContentLoaded", cargarMision);
