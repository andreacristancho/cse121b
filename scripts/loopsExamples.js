const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

//Escriba un forbucle que itere a través de la studentReportmatriz e
//imprima en la consola el valor actual de la matriz si está por debajo de 30.

for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

//Repita el fragmento de programación anterior utilizando un whilebucle.

let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

//Repita el fragmento de programación anterior utilizando un forEachbucle.

studentReport.forEach(function (item) {
  if (item < LIMIT) {
    console.log(item);
  }
});

//Repita el fragmento de programación anterior utilizando un for...inbucle.

for (let i in studentReport) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}
//Utilice cualquier tipo de declaración de repetición (bucle) para producir dinámicamente los nombres de los días (lunes, martes, miércoles, etc.) del siguiente número de DÍAS a partir de la fecha de hoy.
// BUSQUÉ AYUDA DE MI AMIGO

// Obtener la fecha actual
const currentDate = new Date();

// Array con los nombres de los días de la semana
const daysOfWeek = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

// Iterar para generar los nombres de los días
for (let i = 0; i < DAYS; i++) {
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + i);
  const dayOfWeek = nextDate.getDay(); // 0 para Domingo, 1 para Lunes, etc.

  // Imprimir el nombre del día y el valor actual si es menor que el límite
  console.log(`${daysOfWeek[dayOfWeek]}: ${studentReport[i]}`);
}

/*Este código imprimirá algo como:

makefile
Copy code
Sábado: 11
Domingo: 42
Lunes: 33
Martes: 64
Miércoles: 29
Jueves: 37
Donde los valores y los días de la semana se generan dinámicamente a partir de la fecha actual. */
