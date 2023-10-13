/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");

let templeList = [];

/* async displayTemples Function - Declare una función usando constnombrado 
//displayTemples (función de flecha) para aceptar una lista de templos como 
//argumento de matriz.*/

const displayTemples = (temples) => {
  temples.forEach((temple) => {
    // Create an <article> element
    const article = document.createElement("article");

    // Create an <h3> element and set the temple name as its content
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    // Create an <img> element and set the temple image URL as its src and location as its alt attribute
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;
    //src y alt son atributos imageUrl y location son propiedades

    // Append the <h3> and <img> elements to the <article> element
    article.appendChild(h3);
    article.appendChild(img);

    // Append the <article> element to the templesElement
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );
  templeList = await response.json();
  displayTemples(templeList);
};

getTemples();

/* reset Function */

const reset = () => {
  document.querySelector("#temples").innerHTML = "";
};

/* sortBy Function */

const sortBy = (temples) => {
  reset();

  let filter = document.querySelector("#sortBy").value;
  //// acá value me obtiene el resultado de lo que el usuario ha seleccionado

  //  Const utheeTempl= temples.filter((temples) => temples.location.includes("Utah"));
  //displayTemples (utheeTemples);

  switch (filter) {
    case "utah":
      displayTemples(
        temples.filter((temple) => temple.location.includes("Utah"))
      );
      break;
    case "notutah":
      displayTemples(
        temples.filter((temple) => !temple.location.includes("Utah"))
      );
      break;
    case "older":
      displayTemples(
        // la función new Date toma (año, mes empezando en cero, día)
        temples.filter(
          (temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)
        )
      );
      break;
    case "all":
      displayTemples(temples);
      break;
  }
};
/* Event Listener */

document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

getTemples();

console.log(templeList);
