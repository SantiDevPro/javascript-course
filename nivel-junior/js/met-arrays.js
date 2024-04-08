/* Metodos Mutables */
const nombres = ["Pedro", "Maria", "Jorge", "Lucia"];
console.log("Original", nombres);

// pop()
console.log("pop(): ", nombres.pop());

// shift()
console.log("shift(): ", nombres.shift());

// push()
console.log("push(): ", nombres.push("Gabriela", "Thiago"));

// reverse()
console.log("reverse(): ", nombres.reverse());

// unshift()
console.log("unshift(): ", nombres.unshift("Luciana"));

// sort()
console.log("sort(): ", nombres.sort());

// splice()
console.log("splice(): ", nombres.splice(1, 3, "Gissela"));

console.log("Original Actual", nombres);

/* Metodos Inmutables */
const numerosA = [0, 2, 4, 6, 8, 10];
const numerosB = [1, 3, 5, 7, 9, 11];
const matriz = [
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
];

console.log("Numeros A: ", numerosA);
console.log("Numeros B: ", numerosB);
console.log("Matriz: ", matriz);

// join()
const cadenaDeTextoA = numerosA.join("-");
console.log("Texto A: ", cadenaDeTextoA);

// slice()
const rangoDeNumeros = numerosA.slice(1, 4);
console.log("Nuevo Arreglo: ", rangoDeNumeros);

// filter()
const multiplosDe3 = numerosB.filter((n) => n % 3 == 0);
console.log("Multiplos de 3: ", multiplosDe3);

// forEach()
const agregar4 = [];
numerosB.forEach((n) => agregar4.push(n + 4));
console.log("Adiciona 4: ", agregar4);

// map()
const multiplicaPor3 = numerosA.map((n) => n * 3);
console.log("Multiplicando por 3: ", multiplicaPor3);

// reduce()
const resultado = numerosB.reduce((acumulado, n) => (acumulado *= n));
console.log("Multiplicando todos los elementos: ", resultado);

// some()
const alMenosUno = numerosA.some((n) => n % 3 == 0);
console.log("Al menos uno: ", alMenosUno);

// every()
const todosOninguno = numerosA.every((n) => n % 2 == 0);
console.log("Todos o ninguno: ", todosOninguno);

// find()
const buscaValor = numerosB.find((n) => n + 2 == 11);
console.log("Buscando el valor: ", buscaValor);

// findIndex()
const buscaIndice = numerosB.findIndex((n) => n + 2 == 11);
console.log("Buscando el indice: ", buscaIndice);

// flat()
const matrizAplanado = matriz.flat();
console.log("Matriz Aplanado: ", matrizAplanado);

// flatMap()
const matrizAplanadoIterado = matriz.flatMap((item) => item.map((i) => i + 1));
console.log("Matriz Aplanado e Iterado: ", matrizAplanadoIterado);

console.log("Numeros A actual: ", numerosA);
console.log("Numeros B actual: ", numerosB);
console.log("Matriz actual: ", matriz);

/* Metodos ya vistos en cadenas que funcionan en arrays: */
const arrayA = ["perro", "gato", "loro"];
const arrayB = [1, 3, 5];

console.log("Array A: ", arrayA);
console.log("Array B: ", arrayB);

// length
console.log("Length: ", arrayA.length);

// concat()
console.log("Concatenando Arrays: ", arrayA.concat(arrayB));

// toString()
const convertirAtexto = arrayA.toString();
console.log("Convertiendo a texto: ", convertirAtexto);

// indexOf()
const buscandoIndice = arrayA.indexOf("loro");
console.log("Buscando el indice: ", buscandoIndice);

// lastIndexOf()
const buscandoIndiceReverso = arrayA.lastIndexOf("loro");
console.log("Buscando el indice derecha a izquierda: ", buscandoIndiceReverso);

// includes()
console.log("Incluye 3? : ", arrayB.includes(3));

console.log("Array A actual: ", arrayA);
console.log("Array B actual: ", arrayB);
