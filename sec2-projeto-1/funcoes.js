const fs = require("fs");
const path = require("path");

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const arquivos = fs.readdirSync(caminho);
      const arquivosCompletos = arquivos.map((arquivo) =>
        path.join(caminho, arquivo)
      );
      resolve(arquivosCompletos);
    } catch (e) {
      reject(e);
    }
  });
}

function elementosTerminadosCom(extensaoArquivo) {
  return (array) => {
    let resultado = array.filter((el) => el.endsWith(extensaoArquivo));
    return resultado;
  };
}

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
      resolve(conteudo.toString());
    } catch (e) {
      reject(e);
    }
  });
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map(lerArquivo));
}

function removerElementosSeVazio(array) {
  return array.filter((el) => el.trim());
}

function removerElementosSeIncluir(padraoTextual) {
  return (array) => array.filter((el) => !el.includes(padraoTextual));
}

function removerElementosSeApenasNumeros(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num;
  });
}

function removerSimbolos(simbolos) {
  return (array) => {
    return array.map((el) => {
      return simbolos.reduce((acc, simbolo) => {
        return acc.split(simbolo).join("");
      }, el);

      // let textoSemSimbolos = el;
      // simbolos.forEach((simbolo) => {
      //   textoSemSimbolos = textoSemSimbolos.split(simbolo).join("");
      // });
      // return textoSemSimbolos;
    });
  };
}

function mesclarElementos(array) {
  return array.join(" ");
}

function separarTextoPor(simbolo) {
  return function (texto) {
    return texto.split(simbolo);
  };
}

function agruparElementos(palavras) {
  return Object.values(
    palavras.reduce((acc, palavra) => {
      const el = palavra.toLowerCase();
      const qtde = acc[el] ? acc[el].qtde + 1 : 1;
      acc[el] = { elemento: el, qtde };
      return acc;
    }, {})
  );
}

function ordernarPorAtribNumero(attr, ordem = "asc") {
  return function (array) {
    const asc = (o1, o2) => o1[attr] - o2[attr];
    const desc = (o1, o2) => o2[attr] - o1[attr];
    return array.sort(ordem === "asc" ? asc : desc);
  };
}

module.exports = {
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivo,
  lerArquivos,
  removerElementosSeVazio,
  removerElementosSeIncluir,
  removerElementosSeApenasNumeros,
  removerSimbolos,
  mesclarElementos,
  separarTextoPor,
  agruparElementos,
  ordernarPorAtribNumero,
};
