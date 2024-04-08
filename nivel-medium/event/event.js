// Event Handler
const eHandler = document.querySelector(".handler");
eHandler.onclick = () => {
  alert("Hiciste click con event handler");
};

// Event Listener
const eListener = document.querySelector(".listener");
eListener.addEventListener("click", () =>
  alert("Hiciste click con event listener")
);

// Event Bubbling
const contain1 = document.querySelector(".contain-1");
const containB = document.querySelector(".contain-b");
const btnB = document.querySelector(".btn-b");
contain1.addEventListener("click", () => {
  alert("Contenedor 1");
});
containB.addEventListener("click", () => {
  alert("Contenedor B");
});
btnB.addEventListener("click", () => {
  alert("Boton B");
});

// Event Capturing
const contain2 = document.querySelector(".contain-2");
const containC = document.querySelector(".contain-c");
const btnC = document.querySelector(".btn-c");
contain2.addEventListener(
  "click",
  () => {
    alert("Contenedor 2");
  },
  true
);
containC.addEventListener(
  "click",
  () => {
    alert("Contenedor C");
  },
  true
);
btnC.addEventListener("click", () => {
  alert("Boton C");
});

// StopPropagation
const contenedorPadre = document.querySelector(".contenedor-padre");
const boton = document.querySelector(".boton");
contenedorPadre.addEventListener("click", () => {
  alert("No deberia ejecutarme");
});
boton.addEventListener("click", (e) => {
  alert("Unica ejecución");
  e.stopPropagation();
});

// Mouse Events
const caja = document.querySelector(".caja");
const parte1 = document.querySelector(".parte-1");
const parte2 = document.querySelector(".parte-2");
parte1.addEventListener("click", () => alert("Me diste un click"));
parte2.addEventListener("dblclick", () => alert("Me diste dos click"));
parte1.addEventListener("mouseover", () => {
  parte1.classList.toggle("crecer");
});
parte2.addEventListener("mouseover", () => {
  parte2.classList.toggle("crecer");
});
parte1.addEventListener("mouseout", () => {
  parte1.classList.toggle("crecer");
});
parte2.addEventListener("mouseout", () => {
  parte2.classList.toggle("crecer");
});

// Key Events
const texto = document.createElement("P");
const boxKey = document.querySelector(".box-key");
const input = document.querySelector(".input");
input.addEventListener("keypress", (e) => {
  texto.innerText = `Tecla presionada: ${e.target.value}`;
  boxKey.appendChild(texto);
});

// Interface Events
const p = document.createElement("P");
const boxSelect = document.querySelector(".box-select");
const inputSelect = document.querySelector(".select");
inputSelect.addEventListener("select", (e) => {
  const start = e.target.selectionStart;
  const end = e.target.selectionEnd;
  const value = e.target.value;
  p.innerText = `Texto seleccionado: ${value.substring(start, end)}`;
  boxSelect.appendChild(p);
});

// Timers
const delay = document.querySelector(".btn-tim");
const interval = document.querySelector(".btn-int");
const stopInt = document.querySelector(".btn-clear-int");
delay.addEventListener("click", () => {
  setTimeout(() => alert("Delay de 3 segundos"), 3000);
});
interval.addEventListener("click", () => intervalo());
stopInt.addEventListener("click", () => {
  alert("Se paró el intervalo");
  clearInterval(intervalo);
});

const intervalo = setInterval(() => alert("Intervalos de 3 segundos"), 3000);
