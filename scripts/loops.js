// loops.js
myInfo = {
  name: "Brother T",
  photo: "images/photo.jpg",
  favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
  hobbies: ["Reading", "Fishing", "Camping"],
  placesLived: [
    {
      place: "Rexburg, ID",
      length: "5 years",
    },
    {
      place: "Ammon, ID",
      length: "3 years",
    },
    {
      place: "Sandy, UT",
      length: "1 year",
    },
  ],
};
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// MÉTODO 1 OBSOLETO
let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);

// Escriba una función usando un .forEachmétodo para recorrer una matriz y generar su contenido en un<ul>

const foodsElement = document.querySelector("#favorite-foods");

function createandAppendFoodItem(food) {
  let favoriteFood = document.createElement("li");
  favoriteFood.textContent = food;
  foodsElement.appendChild(favoriteFood);
}

myInfo.favoriteFoods.forEach(createandAppendFoodItem);

// Escriba una función usando un .mapmétodo para recorrer una matriz y generar su contenido en un<ul>
// MÉTODO 2: USANDO .MAP
const foodsElement1 = document.querySelector("#favorite-foods");
function mapFoodItem(food) {
  let favoriteFood = document.createElement("li");
  favoriteFood.textContent = food;
  return favoriteFood;
}
// this function could also be written this way using a template literal:
// Esta función también podría escribirse de esta manera usando un literal de plantilla:
function mapFoodItemSmall(food) {
  return `<li>${food}</li>`;
}
const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);

// we need to flatten the array of strings into one big string. .join does this.
//Necesitamos aplanar el conjunto de cadenas en una sola cadena grande. .join hace esto.

foodsElement.innerHTML = foodListElements.join("");

// Pruebe sus funciones.

//MÉTODO 3. .MAP CON ARROW

// The map example could be simplified as below:
const foodsElementA = document.querySelector("#favorite-foods");
const foodListElementsB = myInfo.favoriteFoods.map(
  (food) => `<li>${food}</li>`
);
// we need to flatten the array of strings into one big string. .join does this.
foodsElementA.innerHTML = foodListElementsB.join("");

// MÉTODO 4. .MAP CON ARROW SIMPLIFICADO ASÍ
// Pero ojo! poco recomendable porque no se comprende fácil
document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
  .map((food) => `<li>${food}</li>`)
  .join("");

// ACTIVIDAD 3

//Cree una función que tome una cadena de alimentos y la devuelva incrustada en algún HTML. ( <li>food</li>)

const foodsElementC = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");
// requires a list, and a callback that will produce an html string for each item in the list
// returns a string of html
function generateListMarkup(list, templateCallback) {
  const htmlList = list.map(templateCallback);
  return htmlList.join("");
}
// requires an food string
// returns that string embedded in HTML markup
function foodsTemplate(food) {
  return `<li>${food}</li>`;
}

//Cree una función que ocupe una cadena de lugar y devuelva esa cadena incrustada en algún HTML. El lugar es un poco más complejo.
//Tenemos la ubicación y la longitud. Puede utilizar lo siguiente para la plantilla <dt>${place.place}</dt><dd>${place.length}</dd>:)
function placesTemplate(place) {
  return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

//Cree una función que tomará una lista y una función de devolución de llamada para producir una plantilla HTML.
//La función debería transformar nuestra lista recorriéndola llamando a la función de plantilla
//una vez para cada elemento de la lista. La función debería devolver todas las cadenas HTML aplanadas en una cadena larga.

foodsElement.innerHTML = generateListMarkup(
  myInfo.favoriteFoods,
  foodsTemplate
);

//Llame a la función anterior una vez para la placesLivedlista y otra vez para la favoriteFoodslista.
//Establezca el HTML interno del elemento HTML apropiado según los resultados de la llamada a la función.

placesElement.innerHTML = generateListMarkup(
  myInfo.placesLived,
  placesTemplate
);
