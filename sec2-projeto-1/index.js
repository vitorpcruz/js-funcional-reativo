const path = require("path");
const fn = require("./funcoes");

const caminho = path.join(__dirname, "./legendas");
fn.lerDiretorio(caminho)
  .then((arquivos) => fn.elementosTerminadosCom(arquivos, ".srt"))
  .then((arquivo) => fn.lerArquivos(arquivo))
  .then((conteudos) => conteudos.join("\n"))
  .then((todoConteudo) => todoConteudo.split("\n"))
  .then((linhas) => fn.removerSeVazio(linhas))
  //.then()
  .then(console.log);
