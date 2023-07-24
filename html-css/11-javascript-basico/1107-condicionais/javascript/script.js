const elemento = document.querySelector("p");
const texto = elemento.innerText;

console.log(texto)

if (texto.toUpperCase() === 'HTML') {
  console.log("Executar o código");
}

if(10 !== "10") {
  console.log('executou')
}