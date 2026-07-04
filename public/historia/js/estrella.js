/**
 * CRONOLOGÍA INTERACTIVA v1.0.0
 * Misión: Ordenar hitos históricos cronológicamente.
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. CONFIGURACIÓN DE MISIONES HISTÓRICAS ---
  const misionesHist = [
    {
      titulo: "Fase 1: Antigüedad y Medieval",
      eventos: [
        { id: 1, titulo: "Paleolítico", year: 1 },
        { id: 2, titulo: "Neolítico", year: 2 },
        { id: 3, titulo: "Democracia Griega", year: 3 },
        { id: 4, titulo: "Caída de Roma", year: 4 },
      ],
      instrucciones: "Ordene los hitos desde el más antiguo al más reciente.",
    },
    {
      titulo: "Fase 2: Modernidad y Revoluciones",
      eventos: [
        { id: 1, titulo: "Renacimiento", year: 1 },
        { id: 2, titulo: "Revolución Industrial", year: 2 },
        { id: 3, titulo: "Revolución Francesa", year: 3 },
        { id: 4, titulo: "Revolución de Mayo", year: 4 },
      ],
      instrucciones: "Ordene los procesos de modernización y ruptura colonial.",
    },
    {
      titulo: "Fase 3: Argentina S. XX",
      eventos: [
        { id: 1, titulo: "Ley Sáenz Peña", year: 1 },
        { id: 2, titulo: "Modelo Agroexportador", year: 2 }, // Nota: Es anterior pero para este ejercicio simplificado tomamos el fin de auge
        { id: 3, titulo: "Peronismo", year: 3 },
        { id: 4, titulo: "Retorno Democrático", year: 4 },
      ],
      instrucciones: "Ordene los hitos políticos del siglo XX argentino.",
    },
  ];

  let misionActual = 0;
  const pool = document.getElementById("event-pool");
  const timeline = document.getElementById("timeline-container");
  const btnVerificar = document.getElementById("verify-btn");
  const msgFeedback = document.getElementById("feedback-panel");
  const modalLogro = document.getElementById("modal-logro");

  // --- 2. MOTOR DEL JUEGO ---

  function cargarMision(index) {
    const data = misionesHist[index];
    document.getElementById("mision-title").innerText = data.titulo;
    document.getElementById("mision-desc").innerText = data.instrucciones;

    // Limpiar zonas
    pool.innerHTML = "";
    timeline.innerHTML = "";
    btnVerificar.classList.add("d-none");
    msgFeedback.classList.add("d-none");

    // Mezclar eventos
    const shuffled = [...data.eventos].sort(() => Math.random() - 0.5);

    shuffled.forEach((ev) => {
      const div = document.createElement("div");
      div.className = "event-marker";
      div.draggable = true;
      div.id = "ev-" + ev.id;
      div.innerText = ev.titulo;
      div.dataset.year = ev.year;
      div.addEventListener("dragstart", (e) =>
        e.dataTransfer.setData("text/plain", e.target.id),
      );
      pool.appendChild(div);
    });
  }

  // --- 3. EVENTOS DE DRAG AND DROP ---
  [pool, timeline].forEach((zone) => {
    zone.addEventListener("dragover", (e) => e.preventDefault());
    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData("text");
      const el = document.getElementById(id);
      e.currentTarget.appendChild(el);

      // Mostrar botón si hay elementos en la timeline
      if (timeline.children.length > 0) btnVerificar.classList.remove("d-none");
    });
  });

  // --- 4. VALIDACIÓN ---
  btnVerificar.onclick = () => {
    const items = Array.from(timeline.children);
    const years = items.map((el) => parseInt(el.dataset.year));

    // Verificar orden estrictamente ascendente (1, 2, 3, 4)
    const esCorrecto = years.every(
      (val, i, arr) => i === 0 || val > arr[i - 1],
    );

    if (esCorrecto && years.length === 4) {
      mensajeExito();
    } else {
      mensajeError();
    }
  };

  function mensajeExito() {
    msgFeedback.innerHTML =
      "<strong>Orden Cronológico Validado:</strong> Los hitos se encuentran en la secuencia temporal correcta.";
    msgFeedback.className =
      "alert alert-success-tech p-3 mt-3 animate__animated animate__fadeInUp";
    msgFeedback.classList.remove("d-none");
    btnVerificar.classList.add("d-none");

    setTimeout(() => {
      misionActual++;
      if (misionActual < misionesHist.length) cargarMision(misionActual);
      else {
        modalLogro.classList.remove("d-none");
        modalLogro.classList.add("d-flex");
      }
    }, 2000);
  }

  function mensajeError() {
    msgFeedback.innerHTML =
      "<strong>Error Temporal:</strong> La secuencia histórica no es correcta. Revise el orden de los hitos.";
    msgFeedback.className =
      "alert alert-error-tech p-3 mt-3 animate__animated animate__shakeX";
    msgFeedback.classList.remove("d-none");
  }

  cargarMision(0);
});
