const misiones = [
  {
    titulo: "El despegue",
    instrucciones:
      "Mueve al explorador hacia la derecha y hacia abajo para que coincida con su estación.",
    ayuda: {
      "justify-content":
        "flex-start, flex-end, center, space-between, space-around",
      "align-items": "flex-start, flex-end, center, stretch",
    },
    // Cómo debe verse el contenedor para ganar
    objetivoSolucion: "justify-content: flex-end; align-items: flex-end;",
  },
  {
    titulo: "Órbita central",
    instrucciones:
      "Ubica al explorador exactamente en el centro de la zona de mantenimiento.",
    ayuda: {
      "justify-content": "flex-start, center, flex-end",
      "align-items": "flex-start, center, flex-end",
    },
    objetivoSolucion: "justify-content: center; align-items: center;",
  },
  {
    titulo: "Alineación vertical",
    instrucciones:
      "A veces la estación se encuentra centrada pero al fondo. ¡Llévalo allí!",
    ayuda: {
      "justify-content": "center, flex-start, flex-end",
      "align-items": "flex-end, flex-start, center",
    },
    objetivoSolucion: "justify-content: center; align-items: flex-end;",
  },
];

let misionActual = 0;

// Elementos
const editor = document.getElementById("code-editor");
const escenarioReal = document.getElementById("stage-player"); // Capa donde está el robot
const escenarioMeta = document.getElementById("stage-target"); // Capa donde está la casa
const explorador = document.getElementById("actor");
const baseMeta = document.getElementById("ghost");
const mensajeExito = document.getElementById("feedback");
const botonSiguiente = document.getElementById("next-lvl");
const panelAyuda = document.getElementById("ayuda-comandos");
const indicadorLvl = document.getElementById("lvl-counter");

function cargarMision(num) {
  const m = misiones[num];

  // UI de texto
  document.getElementById("level-title").innerText =
    `Misión ${num + 1}: ${m.titulo}`;
  document.getElementById("level-instr").innerHTML = m.instrucciones;
  indicadorLvl.innerText = `${num + 1} de ${misiones.length}`;

  // Ayuda de comandos
  panelAyuda.innerHTML = "";
  for (const prop in m.ayuda) {
    panelAyuda.innerHTML += `<div class="mb-2"><strong>${prop}:</strong><br><span class="text-muted">${m.ayuda[prop]}</span></div>`;
  }

  // Aplicar la solución a la capa de "Fantasmas" (lo que no se mueve)
  // Así la casa aparece donde el usuario debe llegar
  escenarioMeta.style.cssText = "display: flex; " + m.objetivoSolucion;

  // Limpiar editor y jugador
  editor.value = "";
  escenarioReal.style.cssText = "display: flex;";

  mensajeExito.classList.add("d-none");
  botonSiguiente.classList.add("d-none");
  explorador.classList.remove("animate__pulse", "animate__infinite");
}

editor.addEventListener("input", () => {
  // Aplicamos lo que escribe el usuario al contenedor del robot
  escenarioReal.style.cssText = "display: flex; " + editor.value;
  verificarProgreso();
});

let estaEnMeta = false;

function verificarProgreso() {
  const rRobot = explorador.getBoundingClientRect();
  const rMeta = baseMeta.getBoundingClientRect();

  const margen = 12; // Un poco más de tolerancia para evitar parpadeos
  const coincide =
    Math.abs(rRobot.left - rMeta.left) < margen &&
    Math.abs(rRobot.top - rMeta.top) < margen;

  // REGLA DE ORO: El código debe terminar en punto y coma para ser válido
  const codigoValido = editor.value.trim().endsWith(";");

  if (coincide && codigoValido) {
    if (!estaEnMeta) {
      // Si acabamos de llegar a la meta
      completarNivel();
      estaEnMeta = true;
    }
  } else {
    // Si se mueve fuera de la meta o borra el código
    mensajeExito.classList.add("d-none");
    botonSiguiente.classList.add("d-none");
    explorador.classList.remove("animate__pulse", "animate__infinite");
    estaEnMeta = false;
  }
}

function completarNivel() {
  mensajeExito.classList.remove("d-none");
  botonSiguiente.classList.remove("d-none");

  // Disparamos la animación de éxito
  explorador.classList.add(
    "animate__animated",
    "animate__pulse",
    "animate__infinite",
  );
}

botonSiguiente.addEventListener("click", () => {
  misionActual++;
  if (misionActual < misiones.length) {
    cargarMision(misionActual);
  } else {
    document.getElementById("modal-logro").classList.remove("d-none");
    document.getElementById("modal-logro").classList.add("d-flex");
  }
});

// Inicializar
cargarMision(0);
