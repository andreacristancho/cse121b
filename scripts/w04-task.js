/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Andrea Cristancho",
  photo: "images/placeholder.png",
  favoriteFoods: ["Sea food", "Bistec", "Chicken", "Arepa"],
  hobbies: ["Dancing", "Listening music", "Spend time with my family"],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  {
    place: "Bogota, Distrito Capital -Colombia",
    length: "6 years",
  },
  {
    place: "Bucaramanga, Santander -Colombia",
    length: "40 years",
  }
);

/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/

//Acá creamos un bucle forEach para iterar por <ul> y
//agregamos un elemento <li> con contenido como elemento secundario del elemento
//HTML<ul> con un ID de favorite-foods

//Nota: un elemento <ul> es una lista no ordenada (me sale horizontal) y
//<li> es una lista ordenada (me sale vertical)

myProfile.favoriteFoods.forEach((food) => {
  let list = document.createElement("li");
  list.textContent = food;

  document.querySelector("#favorite-foods").appendChild(list);
});

/* Hobbies List */

// ojo! cuando doy createElement debo llamar "li" para
// que me tome tipo lista vertical.

myProfile.hobbies.forEach((hobby) => {
  let newList = document.createElement("li");
  newList.textContent = hobby;

  document.querySelector("#hobbies").appendChild(newList);
});

/* Places Lived DataList */

//Para cada objeto en la propiedad de placesLived:
//Cree un elemento HTML <dt> y coloque su propiedad de place en el elemento <dt>.
//Cree un elemento HTML <dd> y coloque su propiedad de length en el elemento <dd>
//Agregue los elementos HTML <dt> y <dd> creados anteriormente al elemento HTML <dl> con un ID de places-lived.

myProfile.placesLived.forEach((placeFunc) => {
  let dtElement = document.createElement("dt");
  dtElement.textContent = placeFunc.place;

  let ddElement = document.createElement("dd");
  ddElement.textContent = placeFunc.lenght;

  document.querySelector("#places-lived").appendChild(dtElement);
  document.querySelector("#places-lived").appendChild(ddElement);
});
