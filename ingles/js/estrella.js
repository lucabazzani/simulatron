/**
 * SIMULADOR DE SOPORTE TÉCNICO v1.6.0
 * Misiones basadas en situaciones reales de reporte técnico
 */

const tickets = [
  {
    sender: "Bolek S.",
    message:
      "Hi Alex. I have a problem. I received a Word file from my colleague, but it won't open in Office. My computer says the version is too old.",
    prompt:
      "According to page 55, what is the 'Possible solution' for this report?",
    options: [
      "Tell him to restart the monitor.",
      "Check the Recycle Bin to see if the file is deleted.",
      "Ask the sender to save the file in an older version.",
      "Run Scandisk immediately on the external drive.",
    ],
    answer: 2,
    explanation:
      "Excellent diagnosis. Page 55 recommends asking the sender for an older version format if the software version is incompatible.",
  },
  {
    sender: "Maryam - HR",
    message:
      "Haider, help! I switched my computer off yesterday and today I can't turn it on. I see some cables but I don't know which one goes where.",
    prompt:
      "You need to guide her. What is the correct advice (MODALS) for her power cable?",
    options: [
      "You mustn't check the cable connections.",
      "The power cable should go in the three-pronged port on the computer.",
      "You shouldn't give your password to the cable.",
      "Are you installing it right now?",
    ],
    answer: 1,
    explanation:
      "Correct advice. Using 'should' for technical instructions (page 76) is the standard procedure.",
  },
  {
    sender: "Ludek",
    message:
      "Ales, can you check my laptop? I have a problem with security. It seems like a malicious software that copied itself and infected my project!",
    prompt:
      "What technical THREAT (Unit 8) is Ludek describing and how to respond?",
    options: [
      "It's a Worm. You must uninstall Office.",
      "It's a User Profile. You don't have to scan.",
      "It's a Virus. You may have a security breach and should use antivirus software.",
      "It's Adware. You must put coffee on the motherboard.",
    ],
    answer: 2,
    explanation:
      "Correct security diagnosis. A Virus (Unit 8) is defined as software that can copy itself and infect the system.",
  },
];

let activeTicket = 0;

// DOM
const ticketArea = document.getElementById("ticket-area");
const contentArea = document.getElementById("interaction-content");
const feedbackPanel = document.getElementById("feedback-panel");
const modalLogro = document.getElementById("modal-logro");

function renderStep() {
  const data = tickets[activeTicket];
  feedbackPanel.classList.add("d-none");

  // Lado izquierdo: Ticket Visual
  ticketArea.innerHTML = `
        <div class="mb-3 animate__animated animate__fadeIn">
            <h5 class="fw-bold mb-0">HELP DESK REPORT</h5>
            <small class="text-muted">USER: ${data.sender}</small>
            <hr>
            <p class="mb-0"><i>"${data.message}"</i></p>
        </div>
    `;

  // Lado derecho: Interacción Técnica
  contentArea.innerHTML = `
        <div class="animate__animated animate__fadeInRight">
            <span class="header-step">Task #${activeTicket + 1}: Select Dispatch Action</span>
            <p class="mb-4">${data.prompt}</p>
            <div class="d-grid gap-2">
                ${data.options
                  .map(
                    (opt, i) => `
                    <button onclick="checkResponse(${i})" class="strategy-btn">
                        <b>0${i + 1}.</b> ${opt}
                    </button>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `;
}

window.checkResponse = function (index) {
  const data = tickets[activeTicket];

  if (index === data.answer) {
    showFeedback("VALIDATED", data.explanation, true);
    activeTicket++;

    setTimeout(() => {
      if (activeTicket < tickets.length) {
        renderStep();
      } else {
        // Éxito Final
        modalLogro.classList.remove("d-none");
        modalLogro.classList.add("d-flex");
      }
    }, 4000);
  } else {
    showFeedback(
      "ACCESS_ERROR",
      "Respuesta técnica incorrecta. Revise la bibliografía de soporte y gramática.",
      false,
    );
  }
};

function showFeedback(type, text, success) {
  feedbackPanel.classList.remove(
    "d-none",
    "alert-success-tech",
    "alert-error-tech",
    "animate__shakeX",
  );

  if (success) {
    feedbackPanel.classList.add("alert-success-tech");
    feedbackPanel.innerHTML = `<strong>${type}:</strong> ${text}`;
  } else {
    feedbackPanel.classList.add("alert-error-tech", "animate__shakeX");
    feedbackPanel.innerHTML = `<strong>${type}:</strong> ${text}`;
  }
}

// Iniciar Lab
document.addEventListener("DOMContentLoaded", renderStep);
