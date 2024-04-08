// assert()
console.assert(5 < 4);
// clear()
console.clear();
// error()
console.error("Errooooooorrrr");
// info()
console.info([5, 2, 4, 6, 6]);
// log()
console.log("Mensaje de texto");
// table() -> tiene que ser un array u object
console.table([4, 2, 5, 7, 6]);
// warn()
console.warn("Peligrooooo");
// dir()
console.dir([5, 2, 4, 6, 6]);

// count()
console.count();
console.count();
console.count();
// countReset()
console.countReset();
console.count();

// group()
console.group("Conteo");
console.count();
console.count();
console.count();
console.group();
console.count();
console.count();
console.count();
// groupEnd()
console.groupEnd();
console.count();
console.count();
console.groupEnd();
// groupCollapsed()
console.groupCollapsed("Conteo");
console.count();
console.count();
console.count();

// time()
console.time();
console.time();
console.time();
// timeEnd()
console.timeEnd();
// timeLog()
console.time();
console.timeLog();

// Estilos en console web
console.log(
  "%crancio",
  "color:blue;background:yellow;padding:5px;border: 3px solid green"
);
