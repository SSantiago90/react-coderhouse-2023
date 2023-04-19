function contarManzanas() {
  const frutas = ["🍐", "🍎", "🐌", "🍎", "🍊"];
  let totalManzanas = 0;
  for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === "🍎") totalManzanas++;
  }
  return totalManzanas;
}
// copiamos la referencia
const laFuncion = contarManzanas;
// obtenemos el resultado (return) de la función
const elResultado = contarManzanas();

function mostrarManzanas() {
  let cantidad = contarManzanas();
  console.log("La cantidad de manzanas actualmente es :" + cantidad);
}

mostrarManzanas();
