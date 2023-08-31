const path = require("path");
const fn = require("./funcoes");

const simbolos = [
  ".",
  "?",
  "- ",
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
  .then((conteudos) => conteudos.join("\n"))
  .then((todoConteudo) => todoConteudo.split("\n"))
  .then(fn.removerElementosSeVazio)
  .then(fn.removerElementosSeIncluir("-->"))
  .then(fn.removerElementosSeApenasNumeros)
  .then(fn.removerSimbolos(simbolos))
  //.then()
  .then(console.log);
