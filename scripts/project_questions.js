const instrumentQuestions = [
  {
    type: "INFRASTRUCTURE AND TECHNOLOGY",
    id: 1,
    statement:
      "Does your company have technological resources for data storage, statistical analysis, machine learning, and visualization?",
    description:
      "Rate on a scale of 1 to 5, with 5 being the highest compliance.",
    score: 0,
  },
  {
    type: "INFRASTRUCTURE AND TECHNOLOGY",
    id: 2,
    statement:
      "Does your company have cybersecurity measures and comply with privacy regulations and policies?",
    description: "Rate on a scale of 1 to 5.",
    score: 0,
  },
  {
    type: "HUMAN TEAM SKILLS",
    id: 1,
    statement:
      "Does your company have staff with KNOWLEDGE in statistical analysis, machine learning, and visualization?",
    description:
      "Rate on a scale of 1 to 5, with 5 being the highest compliance.",
    score: 0,
  },
  {
    type: "HUMAN TEAM SKILLS",
    id: 2,
    statement:
      "Does your company have staff with EXPERIENCE in statistical analysis, machine learning, and visualization?",
    description: "Rate on a scale of 1 to 5.",
    score: 0,
  },
  {
    type: "PROCESSES AND PRACTICES",
    id: 1,
    statement:
      "Is there documentation related to data analytics management and lessons learned in this regard?",
    description:
      "Rate on a scale of 1 to 3, with 3 being the highest compliance.",
    score: 0,
  },
  {
    type: "PROCESSES AND PRACTICES",
    id: 2,
    statement: "Does your company have processes for auditing data quality?",
    description: "Rate on a scale of 1 to 3.",
    score: 0,
  },
];

const questionsContainer = document.querySelector("#questions-container");

const scores = [];

function renderQuestions() {
  for (const question of instrumentQuestions) {
    const container = document.createElement("div");

    const typeHeading = document.createElement("h2");
    typeHeading.textContent = question.type;

    const idContainer = document.createElement("div");

    const idText = document.createElement("span");
    idText.textContent = `${question.id}.`;

    const statementText = document.createElement("span");
    statementText.textContent = question.statement;

    const descriptionText = document.createElement("p");
    descriptionText.textContent = question.description;

    const scoreButton = document.createElement("button");
    scoreButton.classList.add("scoreButton");
    scoreButton.textContent = "Enter Score";

    idContainer.appendChild(idText);
    idContainer.appendChild(statementText);

    container.appendChild(idContainer);

    questionsContainer.appendChild(typeHeading);
    questionsContainer.appendChild(container);
    questionsContainer.appendChild(descriptionText);
    questionsContainer.appendChild(scoreButton);

    // Añade el evento de clic para guardar el puntaje
    scoreButton.addEventListener("click", function () {
      const userScore = prompt("Please enter your score:");
      if (userScore !== null && userScore !== "" && !isNaN(userScore)) {
        // Añade el puntaje al arreglo de scores
        scores.push(parseInt(userScore));
        console.log(`Added score: ${userScore}`);
        console.log(`current scores: ${scores}`);
        // Actualiza el texto de puntuación en consecuencia
        container.querySelector("p").textContent = `Score: ${userScore}`;
      } else {
        alert("You must enter a valid score.");
      }
    });
  }
}

export { instrumentQuestions, renderQuestions, scores };
