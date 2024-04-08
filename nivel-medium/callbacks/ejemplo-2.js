// Ejercicio Avanzado

class Persona {
  constructor(name, instagram) {
    this.name = name;
    this.instagram = instagram;
  }
  saludo() {
    console.log(`Hola me llamo ${this.name}`);
  }
  info() {
    console.log(`Sigueme en mi instagram: ${this.instagram}`);
  }
}

const data = [
  ["Tiago", "@tiagodev"],
  ["Gabriela", "@gaby15"],
  ["Stuart", "@stugraph"],
  ["Luciana", "@lu9y"],
];

const persons = [];
for (let value of data) {
  persons.push(new Persona(value[0], value[1]));
}

console.log(persons);

const obtenerPerson = (id, cb) => {
  if (persons[id].name) {
    persons[id].info();
  } else {
    cb();
  }
};

obtenerPerson(1, console.log("Error"));
