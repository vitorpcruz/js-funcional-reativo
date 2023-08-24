const fs = require("fs");
const path = require("path");

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho);
      arquivos = arquivos.map((arquivo) => path.join(caminho, arquivo));
      resolve(arquivos);
    } catch (e) {
      reject(e);
    }
  });
}

function elementosTerminadosCom(array, extensaoArquivo) {
  return array.filter((el) => el.endsWith(extensaoArquivo));
}

module.exports = {
  lerDiretorio,
  elementosTerminadosCom,
};
