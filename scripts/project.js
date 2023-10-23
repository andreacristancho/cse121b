const questionElement = document.querySelector("#testButton");
let questionList = [];

const displayQuestions = (questions) => {
  questions.forEach((question) => {
    const article = document.createElement("article");

    const h3 = document.createElement("h3");
    h3.textContent = question.type;

    const h3_1 = document.createElement("h3");
    h3_1.textContent = question.id;

    const h3_2 = document.createElement("h3");
    h3_2.textContent = question.statement;

    const h3_3 = document.createElement("h3");
    h3_3.textContent = question.description;

    const h3_4 = document.createElement("h3");
    h3_4.textContent = question.score;

    article.appendChild(h3);
    article.appendChild(h3_1);
    article.appendChild(h3_2);
    article.appendChild(h3_3);
    article.appendChild(h3_4);

    questionElement.appendChild(article);
  });
};

const getQuestions = async () => {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/fb55f0e6-d7e0-417e-96e0-ffb390454d65"
    );
    questionList = await response.json();
    displayQuestions(questionList);
    console.log(questionList);
  } catch (error) {
    console.error("Error loading the JSON file", error);
  }
};

getQuestions();

console.log(questionList);
console.log("esto es una prueba");

//window.addEventListener("load", getQuestions);

//document.querySelector("#testButton").addEventListener("load", getQuestions);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#testButton").addEventListener("click", getQuestions);
});
