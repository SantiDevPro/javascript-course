// CLASE
class Animal {
  constructor(especie, edad, color) {
    this.specie = especie;
    this.edad = edad;
    this.color = color;
    this.info = `Soy un ${this.specie}, tengo ${this.edad} años y soy de color ${this.color}`;
  }
  verInfo() {
    console.log(this.info);
  }
}
// HERENCIA
class Perro extends Animal {
  constructor(especie, edad, color, raza) {
    super(especie, edad, color);
    this.raza = raza;
  }
  static ladrar() {
    console.log("¡Wau!");
  }
  set setRaza(newName) {
    this.raza = newName;
  }
  get getRaza() {
    return this.raza;
  }
}
const chacho = new Perro("perro", 5, "blanco", "doberman");
const gringa = new Animal("gato", 3, "marron");
const loro = new Animal("ave", 1, "verde");

chacho.setRaza = "Rottweiler";
console.log(chacho.getRaza);
console.log(chacho.edad);
chacho.verInfo();
Perro.ladrar();
gringa.verInfo();
console.log(loro.color);
