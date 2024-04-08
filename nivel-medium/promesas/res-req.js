// Promesas

let nombre = "Tiago";

// resolve - reject
const promesa = new Promise((resolve, reject) => {
  if (nombre !== "Tiago") reject("Lo siento, el nombre no es Tiago");
  else resolve(nombre);
});

// then
promesa
  .then((request) => {
    console.log(request);
  })
  // catch
  .catch((e) => {
    console.log(e);
  });
