// USE STRICT
"use strict";

// Variables Declaradas (let / cost / var)
let nombre = "Santiago";
console.log(nombre);

// Modificar propiedades (defineProperty() -> agrega o modifica una propiedad y writeable -> permite o no que solo sea de lectura)
const obj = {
  edad: 26,
};
Object.defineProperty(obj, "nombre", { value: "Tiago", writable: false });
// obj.nombre = "Mitchell";
console.log(obj.nombre);

// Agregar Propiedades (preventExtensions() -> prohibe que se agreguen propiedades a un objeto)
Object.preventExtensions(obj);
// obj.apellido = "Gavidia";
// console.log(obj.apellido);
console.log(obj);

// No se puede agregar propiedades a un String
let texto = "Hola que hace";
// texto.animal = "perro";
console.log(texto);

// No existen las multiples variables en una funcion
function hablar(texto) {
  console.log(texto);
}
hablar("Holi");

// Delete en objetos o variables (delete sirve para eleminar propiedades no variables)
const obj2 = {
  nombre: "Mitchell",
};
delete obj2.nombre;
console.log(obj2.nombre);

// Las palabras reservadas no pueden ser usadas como variables
// let package = "malo";
let fizz = "buzz";
console.log(fizz);

// Cambia el this
// function saludo() {
//   this.nombre = "Pedro";
//   this.saludo = function () {
//     console.log(`Hola ${this.nommbre}`);
//   };
// }
// let obj3 = saludo();

// Números octales con una "o" adelante y no existe "with"
console.log(0o25);
console.log(0o72);

// Arguments y Eval no pueden ser variables
// let arguments = "holi";
// console.log(arguments);
// let eval = "jaja";
// console.log(eval);

// NOTA: 'use strict' -> sirve al principio de una funcion o al principio de todo el script entero
