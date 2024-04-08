// Sentencia Switch
let color = "verde";

switch (color) {
  case "azul":
    console.log("Es azul");
    break;
  case "rojo":
    console.log("Es rojo");
    break;
  case "amarillo":
    console.log("Es amarillo");
    break;
  default:
    console.log("Es de otro color");
    break;
}

// Formas actuales de manejo

// Caso 1
if (color == "azul") {
  console.log("Es azul");
} else if (color == "rojo") {
  console.log("Es rojo");
} else if (color == "amarillo") {
  console.log("Es amarillo");
} else {
  console.log("Es de otro color");
}

// Caso 2
const colores = {
  azul: "Es azul",
  rojo: "Es rojo",
  amarillo: "Es amarillo",
};

if (colores[color]) {
  console.log(colores[color]);
} else {
  console.log("Es de otro color");
}
