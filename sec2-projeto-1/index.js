const path = require("path");
const fn = require("./funcoes");

const caminho = path.join(__dirname, "./legendas");
fn.lerDiretorio(caminho)
  .then((arquivos) => fn.elementosTerminadosCom(arquivos, ".srt"))
  .then(fn.lerArquivos)
  .then((conteudos) => conteudos.join("\n"))
  .then((todoConteudo) => todoConteudo.split("\n"))
  //.then()
  .then(console.log);
