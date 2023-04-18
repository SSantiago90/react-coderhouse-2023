function createComponent(tag, content, classes) {
  // creamos elemento con el tag indicado
  const DOMelement = document.createElement(tag);

  // cambiamos su contenido
  DOMelement.innerHTML = content;

  // seteamos sus clases
  DOMelement.classList.add(classes);

  return DOMelement;
}

function showComponent(parentTag, component) {
  const parentNode = document.querySelector(parentTag);
  parentNode.appendChild(component);
}

const miElement = createComponent("h1", "Hola Coder!", "main-title");

showComponent("nav", miElement);
