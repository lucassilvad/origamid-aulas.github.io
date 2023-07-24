const bolinha = document.querySelector(".circle");

function circle(event) {
  bolinha.style.left = event.x + "px";
  bolinha.style.top = event.y + "px";
}

window.addEventListener("mousemove", circle);

