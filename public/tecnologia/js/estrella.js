/**
 * DIAGRAMADOR DE SISTEMAS v1.0.0
 * Misión: Ordenar flujos de sistemas técnicos
 */

document.addEventListener("DOMContentLoaded", () => {
  const misionesTec = [
    {
      titulo: "Fase 1: Tostadora Eléctrica",
      descripcion: "Organice el flujo del sistema para obtener una tostada.",
      bloques: ["Pan", "Calentar", "Tostada"],
      correcta: ["Pan", "Calentar", "Tostada"],
    },
    {
      titulo: "Fase 2: Computadora",
      descripcion:
        "Organice el flujo para procesar datos e informar al usuario.",
      bloques: ["Datos", "Procesar", "Alerta"],
      correcta: ["Datos", "Procesar", "Alerta"],
    },
    {
      titulo: "Fase 3: Lámpara",
      descripcion: "Organice el sistema de iluminación.",
      bloques: ["Corriente", "Cable", "Luz"],
      correcta: ["Corriente", "Cable", "Luz"],
    },
  ];

  let misionActual = 0;
  const slots = document.querySelectorAll(".drop-zone");
  const bloques = document.querySelectorAll(".diagram-block");
  const btnVerificar = document.getElementById("verify-btn");
  const msgFeedback = document.getElementById("feedback-panel");
  const modalLogro = document.getElementById("modal-logro");

  // Drag and Drop Logic
  bloques.forEach((bloque) => {
    bloque.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.id);
    });
  });

  slots.forEach((slot) => {
    slot.addEventListener("dragover", (e) => e.preventDefault());
    slot.addEventListener("drop", (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData("text");
      const draggedElement = document.getElementById(id);

      // Mover elemento al slot
      slot.innerHTML = "";
      slot.appendChild(draggedElement);
      checkAllFilled();
    });
  });

  function checkAllFilled() {
    const filled = Array.from(slots).every((slot) => slot.children.length > 0);
    if (filled) btnVerificar.classList.remove("d-none");
  }

  function cargarMision(index) {
    const data = misionesTec[index];
    document.getElementById("mision-title").innerText = data.titulo;
    document.getElementById("mision-desc").innerText = data.descripcion;

    // Resetear slots y bloques
    slots.forEach((s) => (s.innerHTML = "Arrastre aquí"));
    const sourceZone = document.getElementById("source-zone");
    sourceZone.innerHTML = "";
    data.bloques.forEach((b) => {
      const div = document.createElement("div");
      div.className = "diagram-block";
      div.draggable = true;
      div.id = "block-" + b;
      div.innerText = b;
      div.addEventListener("dragstart", (e) =>
        e.dataTransfer.setData("text/plain", e.target.id),
      );
      sourceZone.appendChild(div);
    });

    btnVerificar.classList.add("d-none");
    msgFeedback.classList.add("d-none");
  }

  btnVerificar.onclick = () => {
    const data = misionesTec[misionActual];
    let aciertos = 0;

    slots.forEach((slot, i) => {
      const content = slot.firstChild ? slot.firstChild.innerText : "";
      if (content === data.correcta[i]) aciertos++;
    });

    if (aciertos === 3) {
      msgFeedback.innerHTML =
        "<strong>Sistema Correcto:</strong> Flujo validado.";
      msgFeedback.className =
        "alert alert-success-tech p-3 mt-3 animate__animated animate__fadeInUp";
      msgFeedback.classList.remove("d-none");

      setTimeout(() => {
        misionActual++;
        if (misionActual < misionesTec.length) cargarMision(misionActual);
        else {
          modalLogro.classList.remove("d-none");
          modalLogro.classList.add("d-flex");
        }
      }, 2000);
    } else {
      msgFeedback.innerHTML =
        "<strong>Error:</strong> El flujo del sistema es incorrecto.";
      msgFeedback.className =
        "alert alert-error-tech p-3 mt-3 animate__animated animate__shakeX";
      msgFeedback.classList.remove("d-none");
    }
  };

  cargarMision(0);
});
