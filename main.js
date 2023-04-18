// Seleccionar el contenedor al que queremos agregar un elemento
const container = document.querySelector("body");

// Crear el nuevo elemento HTML <h1>
const footerNode = document.createElement("footer");
footerNode.textContent = "Hola Footer";
footerNode.classList.add("footer");

// Agregar el nodo h1 creado al elemento contenedor
container.appendChild(footerNode);
