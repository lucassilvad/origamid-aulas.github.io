const alturalargura = window.innerWidth;
const alturaTela = window.innerHeight;

function coordenadaMouse(event) {
  const coordenadas = {
    x: event.x,
    y: event.y,
  }

  console.log(coordenadas)
}

// window.addEventListener('mousemove', coordenadaMouse)

function scroll() {
  console.log(window.scrollY)
}

window.addEventListener('scroll', scroll)
