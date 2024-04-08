let cadena1 = "esTa cadena De prueba prueba prueba";
let cadena2 = "  12 ";
let number = 165;

// length
let long1 = cadena1.length,
  long2 = cadena2.length;
console.log(long1, " - ", long2);

// concat()
let resultado = cadena1.concat(cadena2);
console.log(resultado);

// startsWith()
resultado = cadena1.startsWith("esta");
console.log(resultado);
// endsWith()
resultado = cadena1.endsWith("prueba ");
console.log(resultado);
// includes()
resultado = cadena1.includes(cadena2);
console.log(resultado);
// indexOf()
resultado = cadena1.indexOf("cadena");
console.log(resultado);
// lastIndexOf()
resultado = cadena1.lastIndexOf("prueba");
console.log(resultado);

// padStart()
resultado = cadena2.padStart(8, "ad");
console.log(resultado);
// padEnd()
resultado = cadena2.padEnd(6, "cb");
console.log(resultado);
// repeat()
resultado = cadena2.repeat(4);
console.log(resultado);

// split()
resultado = cadena1.split(" ");
console.log(resultado);
// substring()
resultado = cadena1.substring(11, 21);
console.log(resultado);
// toLowerCase()
resultado = cadena1.toLowerCase();
console.log(resultado);
// toUpperCase()
resultado = cadena1.toUpperCase();
console.log(resultado);
// toString()
resultado = number.toString();
console.log(resultado);
// trim()
resultado = cadena2.trim();
console.log(resultado);
