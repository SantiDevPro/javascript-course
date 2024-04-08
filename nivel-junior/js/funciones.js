// Funciones sin parametros
function saludar() {
  console.log("Hola buen día");
  setTimeout(() => despedir(), 3000);
}
function despedir() {
  console.log("Hasta la proxima");
}
saludar();

// Funciones con parametros
function suma(num1, num2) {
  console.log(num1 + num2);
}
function resta(num1, num2) {
  console.log(num1 - num2);
}
suma(4, 7);
resta(27, 13);

// Funciones con spread operator
function sumaTotal(...numbers) {
  let resultado = 0;
  for (let n of numbers) {
    resultado += n;
  }
  console.log(resultado);
}
sumaTotal(1, 3, 5, 7, 9);
sumaTotal(2, 4, 6, 8);
