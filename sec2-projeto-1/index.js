const path = require("path");
const fn = require("./funcoes");

const simbolos = [
  ".",
  "?",
  "-",
  ",",
  '"',
  "♪",
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
];

const caminho = path.join(__dirname, "./legendas");
fn.lerDiretorio(caminho)
  .then(fn.elementosTerminadosCom(".srt"))
  .then(fn.lerArquivos)
  .then(fn.mesclarElementos)
  .then(fn.separarTextoPor("\n"))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeIncluir("-->"))
  .then(fn.removerElementosSeApenasNumeros)
  .then(fn.removerSimbolos(simbolos))
  .then(fn.mesclarElementos)
  .then(fn.separarTextoPor(" "))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeApenasNumeros)
  .then(fn.agruparElementos)
  //.then()
  .then(console.log);
