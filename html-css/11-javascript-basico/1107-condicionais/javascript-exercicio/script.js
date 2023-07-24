const botao = document.querySelector(".botao");

function somar() {
  const itens = document.querySelector("div");
  const total = Number(itens.innerText) + 1;

  if (total < 10) {
    itens.innerText = total;
  } else {
    console.log("Limite alcançado");
  }
}

if (botao) {
botao.addEventListener("click", somar);
}