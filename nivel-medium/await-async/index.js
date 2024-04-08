// Await - Async
const data = {
  prop1: "Valor 1",
  prop2: "Valor 2",
  prop3: "Valor 3",
};

// con promises
const obtenerInfo = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(data), 2000);
  });
};

obtenerInfo().then((result) => console.log(result));

// con async - await
const mostrar = async () => {
  result = await obtenerInfo();
  console.log(result);
};

mostrar();

// ventaja de async - await
const mostrarText = (text) => {
  return new Promise((res, rej) => {
    setTimeout(() => res(text), Math.random() * 200);
  });
};
const mostrarData = async () => {
  const data1 = await mostrarText("primera data");
  const data2 = await mostrarText("segunda data");
  const data3 = await mostrarText("tercera data");
  console.log(data1);
  console.log(data2);
  console.log(data3);
};

mostrarData();
