// Arrays
const arrFrutas = ["manzana", "platano", "naranja", "pera", "mandarina"];
console.log(arrFrutas);
console.log(arrFrutas[0]);
console.log(arrFrutas[4]);
const arrColores = Array("rojo", "verde", "azul", "amarillo", "morado");
console.log(arrColores);
console.log(arrColores[1]);
console.log(arrColores[3], arrColores[0]);

// Arrays Asociativos
const pc = {
  nombre: "SantiagoPC",
  procesador: "Rayzen 5 PRO",
  ram: "16GB",
  espacio: "1TB",
};
const pc2 = ["TiagoPC", "Rayzen 5 Pro", "16GB", "1TB"];
console.log(pc);
console.log(pc2);
console.log(pc["nombre"]);
console.log(pc2[0]);
console.log(pc["ram"]);
console.log(pc2[2]);
const mobile = {
  nombre: "TiagoDev",
  marca: "Samsung",
  modelo: "Samsung A53",
  ram: "8GB",
  espacio: "108Gb",
};
console.log(mobile);
console.log(mobile["modelo"]);
console.log(mobile["marca"]);
