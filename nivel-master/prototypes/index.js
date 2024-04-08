// PROTOTYPES

// __proto__
let variable = "Cadena";
console.log(variable.__proto__);

// prototype
let otraVariable = function () {};
console.log(otraVariable.prototype);

// Dunder Proto
let arr = ["Tiago", 246, true];
console.log(arr);
let str = "Perro";
console.log(str.__proto__);

class Persona {
  constructor() {}
  saludar() {
    console.log("Hola como estas");
  }
}

const tiago = new Persona();
console.log(tiago.__proto__);

// Sobreescribir proto vs Sobreescribir metodo
tiago.hablar = () => console.log("Saludando desde afuera");

let arr2 = [];
arr2.__proto__ = tiago;
arr2.saludar();
