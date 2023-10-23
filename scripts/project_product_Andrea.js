import {
  instrumentQuestions,
  renderQuestions,
  scores,
} from "./project_questions.js";
import results from "./project_results.js";

document.addEventListener("DOMContentLoaded", function () {
  //const questionsContainer = document.querySelector("#questions-container");

  // Array para almacenar los scores
  //const scores = [];

  document.querySelector("#testButton").addEventListener("click", function () {
    renderQuestions();
  });

  // Agrega un botón para calcular el total de los puntajes
  const calculateTotalButton = document.createElement("button");
  calculateTotalButton.textContent = "Calculate the Total Score";

  calculateTotalButton.addEventListener("click", function () {
    if (scores.length === 6) {
      const totalScore = scores.reduce((acc, curr) => acc + curr, 0);
      alert(`The Total Score is: ${totalScore}`);
      for (const result of results) {
        if (totalScore >= result.minScore && totalScore <= result.maxScore) {
          alert(`Level: ${result.level}\nComment: ${result.text}`);
          break;
        }
      }
    } else {
      alert("Make sure you enter 6 scores.");
    }
  });

  document
    .querySelector("#calculateTotalButton")
    .appendChild(calculateTotalButton);
});
