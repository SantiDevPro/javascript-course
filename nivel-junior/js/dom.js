// METODOS DE SELECCION DE ELEMENTOS
const titulo = document.querySelector(".titulo");
const div = document.getElementById("contain");
const input = document.querySelector("#box");

// METODOS DE ATRIBUTOS DE UN ELEMENTO
input.setAttribute("type", "numberfoca");
input.getAttribute("value");
input.setAttribute("value", "15");
// input.removeAttribute("type");

// ATRIBUTO STYLE
input.style = `
   width: 200px;
   height: 30px;
   text-align: center;
   color: blue;
   background: yellow;
   border: 3px solid green;
   border-radius: 20px`;
input.style.color = "#44F";
input.style.backgroundColor = "#FA0";

// CLASES - classList y metodos de classList
/* titulo.classList.add("grande");
 titulo.classList.remove("grande"); */
titulo.classList.toggle("grande"); // al poner true o false fuerzas a que agregue o elimine siempre.
let valor = titulo.classList.item(1);
console.log(valor);

contain.style = `
   width: 200px;
   height: 50px;
   background: #FFA`;

// CREACION DE ELEMENTOS
const p = document.createElement("P");
// OBTENCION Y MODIFICACION DE ELEMENTOS
p.innerText = "Soy la etiqueta p";
contain.appendChild(p);
