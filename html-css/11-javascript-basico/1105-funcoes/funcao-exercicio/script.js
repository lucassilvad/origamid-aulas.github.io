function livro(nome, ano, autor) {
  return {
    nomeMaior: nome.toUpperCase(),
    totalAnos: 2050 - ano,
    frase: nome + " por " + autor,
  };
}

const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(livroRetorno.frase);
