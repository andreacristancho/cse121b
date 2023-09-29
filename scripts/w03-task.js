/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

// TRABAJADO CON METODO TRADICIONAL DE FUNCIONES
// Función de suma
function add(number1, number2) {
  return number1 + number2;
}

// Función donde voy y busco en el HTML los ids respectivos que trabajaré en la función anterior.
// Y creo una variable nueva para c/u de ellos.
function addNumbers() {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);
  document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

// Función donde coloco el EventListener para se active la función anterior
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
  return number1 - number2;
};

const subtractNumbers = function () {
  let subtractNumber1 = Number(document.querySelector("#subtract1").value);
  let subtractNumber2 = Number(document.querySelector("#subtract2").value);
  document.querySelector("#difference").value = subtract(
    subtractNumber1,
    subtractNumber2
  );
};

document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);

// // TRABAJADO CON METODO ARROW FUNCTION
/* Arrow Function - Multiply Numbers */

const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
  let multiplyNumber1 = Number(document.querySelector("#factor1").value);
  let multiplyNumber2 = Number(document.querySelector("#factor2").value);
  document.querySelector("#product").value = multiply(
    multiplyNumber1,
    multiplyNumber2
  );
};

document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
//Corre bien pero no estoy segura si es lo solicitado.

function divide(dividend, divisor) {
  return dividend / divisor;
}

function divideNumbers() {
  let addDividend = Number(document.querySelector("#dividend").value);
  let addDivisor = Number(document.querySelector("#divisor").value);
  document.querySelector("#quotient").value = divide(addDividend, addDivisor);
}

document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);

/* Decision Structure */

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//const arrayHtml = array1.map(function (number) {
//  return "[" + array1.join(",") + "]";
//});

document.getElementById("array").innerHTML = array1;

/* Output Odds Only Array */

const oddsNumbers = array1.filter(function (number) {
  return number % 2 !== 0;
});

document.getElementById("odds").innerHTML = oddsNumbers;

/* Output Evens Only Array */

const evensNumbers = array1.filter(function (number) {
  return number % 2 === 0;
});

document.getElementById("evens").innerHTML = oddsNumbers;
/* Output Sum of Org. Array */

const sumArray = array1.reduce(function (number, total) {
  return total + number;
});

document.getElementById("sumOfArray").innerHTML = sumArray;

/* Output Multiplied by 2 Array */
const multiplyArray = array1.map(function (number) {
  return number * 2;
});

document.getElementById("multiplied").innerHTML = multiplyArray;

/* Output Sum of Multiplied by 2 Array */
const newArray = multiplyArray;

const sumNewArray = newArray.reduce(function (newNumber, newTotal) {
  return newTotal + newNumber;
});

document.getElementById("sumOfMultiplied").innerHTML = sumNewArray;
