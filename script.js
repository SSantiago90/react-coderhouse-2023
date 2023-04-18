function contarManzanas() {
  const frutas = ["🍐", "🍎", "🐌", "🍎", "🍊"];
  let totalManzanas = 0;
  for (let i = 0; i++; i < frutas.length) {
    if (frutas[i] === "🍎") totalManzanas++;
  }
}

const laFuncion = contarManzanas;
const elResultado = contarManzanas();

function mostrarManzanas() {
  let cantidad = contarManzanas();
  console.log("La cantidad de manzanas actualmente es :" + cantidad);
}

mostrarManzanas();
