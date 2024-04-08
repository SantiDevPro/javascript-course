// Ejercicios basicos

function saludar(nombre) {
  console.log(`Bienvenido ${nombre}`);
}
function entradaUsuario(callback) {
  let nombre = "Santiago";
  callback(nombre);
}
entradaUsuario(saludar);

const suma = (...numbers) => {
  console.log(numbers.reduce((total, item) => (total += item), 0));
};
const entradaNumbers = (callback) => {
  callback(1, 3, 5, 7);
};
entradaNumbers(suma);
