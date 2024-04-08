// While
let numeroParaSumar = 0;
while (numeroParaSumar <= 10) {
  console.log(numeroParaSumar);
  numeroParaSumar++;
}

// Do-while
let contador = 0;
do {
  contador++;
  console.log(contador);
  if (contador == 10) {
    break;
  }
} while (contador <= 100);

// For
let array = [15, 23, 11, 17, 5, 9, 33];
for (let i = 0; i < array.length; i++) {
  if (array[i] == 11) {
    continue;
  }
  console.log(array[i] + 1);
}
for (let n = 0; n < 10; n++) {
  console.log(n);
}

// For-in
let animales = ["gato", "perro", "dinosaurio"];
for (let animal in animales) {
  // Devuelve indice
  console.log(animal);
}

// For-of
for (let animal of animales) {
  // Devuelve valor
  console.log(animal);
}

// Sentencia Label -> le da nombre a un for para poder finalizar o saltear un bucle sin necesidad de tener que estar en ese bucle.
let array1 = ["María", "Josefa", "Roberto"];
let array2 = ["Pedro", "Marcelo", array1, "Juliana"];
forRancio: for (let arr in array2) {
  if (arr == 2) {
    for (let array of array1) {
      console.log(array);
      break forRancio;
    }
  } else {
    console.log(array2[arr]);
  }
}
