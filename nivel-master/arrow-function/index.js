"use strict";
// ARROW FUNCTIONS
const saludar = () => {
  console.log("Hola");
  console.log("¿Cómo estas?");
};
saludar();

// Si es una sola linea de expresion se retorna
// Los parentesis son opcionales si tienen un solo parametro
const hablar = (texto) => console.log(texto);
hablar("Que día más hermoso");

// This -> hace referencia al this que llama al objeto que llama a la funcion
const obj = {
  nombre: "Tiago",
  presentar: () => {
    console.log(`Hola, me llamo ${this.nombre}`);
  },
};
window.nombre = "Pedro";
obj.presentar();

// This no funciona como constructor
constructorPersona = (nombre, apellido) => {
  this.nombre = nombre;
  this.apellido = apellido;
};
const persona = new constructorPersona("Tiago", "Gavidia");
console.log(persona.apellido);
