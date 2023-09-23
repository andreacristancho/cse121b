/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Andrea Fernanda Cristancho Cortés";

let now = new Date();
let currentYear = now.getFullYear();

const profilePicture = "images/placeholder.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img"); //pq img no tiene Id

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

currentYear.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);

/* Step 5 - Array */

const preferences = ["Sea food", " Bistec", " Chicken"];
foodElement.innerHTML += `<br>${preferences}`;

const newPreferenceElement = " Arepa";
preferences.push(newPreferenceElement);
foodElement.innerHTML += `<br>${preferences}`;

preferences.shift();
foodElement.innerHTML += `<br>${preferences}`;

preferences.pop();
foodElement.innerHTML += `<br>${preferences}`;
