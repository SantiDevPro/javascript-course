// Try - Catch
try {
  const color = "azul";
  // Throw
  throw { title: "Error", info: "Excepcion creada" };
  console.log(color);
} catch (e) {
  console.log(e);
  console.log(e.info);
} finally {
  // finally
  console.log("Esto se ejecuta siempre");
}
