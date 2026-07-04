/**
 * TRIBUNAL CONSTITUCIONAL v1.0.0
 * Misión: Analizar conflictos sociales y dictar sentencia según la Constitución.
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. CONFIGURACIÓN DE LOS CASOS DE ESTUDIO ---
  const misionesCivic = [
    {
      titulo: "Caso 1: Derecho a la Igualdad",
      caso: "Una institución educativa prohíbe el ingreso a un grupo de estudiantes alegando que sus antecedentes familiares no son 'acordes' al perfil del colegio.",
      opciones: [
        "Es correcto, el colegio tiene derecho de admisión absoluto.",
        "Es una vulneración al derecho a la educación y a la igualdad.",
        "Es correcto, solo importa el rendimiento académico.",
        "Es indiferente, el colegio es una empresa privada.",
      ],
      correcta: "Es una vulneración al derecho a la educación y a la igualdad.",
      ayuda:
        "La Constitución garantiza la igualdad ante la ley y el acceso a la educación sin discriminaciones arbitrarias.",
    },
    {
      titulo: "Caso 2: Voz y Voto",
      caso: "En una asamblea escolar, las autoridades impiden que los estudiantes debatan sobre una nueva norma de convivencia, argumentando que 'son menores y no entienden'.",
      opciones: [
        "Es correcto, los menores no deben opinar.",
        "Es una vulneración al derecho a ser escuchado y participar.",
        "Es correcto, el directivo decide todo unilateralmente.",
        "Depende de la opinión de los padres únicamente.",
      ],
      correcta: "Es una vulneración al derecho a ser escuchado y participar.",
      ayuda:
        "La participación ciudadana y el derecho a ser escuchado son fundamentales para el ejercicio práctico de la ciudadanía.",
    },
    {
      titulo: "Caso 3: Identidad Protegida",
      caso: "Se difunden datos personales y privados de un adolescente en redes sociales sin su consentimiento, afectando su identidad y bienestar.",
      opciones: [
        "Es correcto, la información en redes es pública.",
        "Es una vulneración a la privacidad y la protección de la identidad.",
        "Solo es grave si el adolescente es mayor de 18 años.",
        "No es una cuestión constitucional, es solo un problema de amigos.",
      ],
      correcta:
        "Es una vulneración a la privacidad y la protección de la identidad.",
      ayuda:
        "La Constitución y las leyes protegen la identidad y la privacidad como parte de los derechos del sujeto social.",
    },
    {
      titulo: "Caso 4: Participación Ciudadana",
      caso: "Un grupo de vecinos quiere presentar un proyecto de ley en el Congreso para mejorar su barrio, pero les dicen que no tienen autoridad para hacerlo.",
      opciones: [
        "Tienen razón, solo los diputados pueden proponer leyes.",
        "Es una vulneración al derecho de Iniciativa Popular.",
        "Deberían esperar a las próximas elecciones para votar.",
        "Solo pueden presentar quejas, nunca proyectos.",
      ],
      correcta: "Es una vulneración al derecho de Iniciativa Popular.",
      ayuda:
        "La Iniciativa Popular es un derecho constitucional que permite a los ciudadanos presentar proyectos de ley.",
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

  function cargarMision(index) {
    const data = misionesCivic[index];
    tituloMision.innerText = data.titulo;
    descMision.innerText = data.caso; // Aquí mostramos el caso
    textoAyuda.innerText = data.ayuda;

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
    const data = misionesCivic[misionActual];
    if (window.seleccionada === data.correcta) {
      mensajeExito();
    } else {
      mensajeError();
    }
  };

  function mensajeExito() {
    msgFeedback.innerHTML = `<strong>Sentencia correcta:</strong> Se ha protegido el derecho constitucional.`;
    msgFeedback.className =
      "alert alert-success-tech p-3 mt-3 animate__animated animate__fadeInUp";
    msgFeedback.classList.remove("d-none");
    btnVerificar.classList.add("d-none");

    setTimeout(() => {
      misionActual++;
      if (misionActual < misionesCivic.length) {
        cargarMision(misionActual);
      } else {
        modalLogro.classList.remove("d-none");
        modalLogro.classList.add("d-flex");
      }
    }, 2000);
  }

  function mensajeError() {
    msgFeedback.innerHTML = `<strong>Fallo desestimado:</strong> La sentencia no respeta los derechos constitucionales. Revise la normativa.`;
    msgFeedback.className =
      "alert alert-error-tech p-3 mt-3 animate__animated animate__shakeX";
    msgFeedback.classList.remove("d-none");
  }

  // Iniciar primera misión
  cargarMision(0);
});
