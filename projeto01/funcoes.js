const fs = require('node:fs');
const path = require('node:path');

// ler o diretorio e retorna o caminho dos arquivos que estão dentro
function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho);
      arquivos = arquivos.map((arquivo) => path.join(caminho, arquivo));
      resolve(arquivos);
    } catch (error) {
      reject(error);
    }
  });
}

//ler o arquivo a partir do caminho passado como parametro e retorna uma promisse com o conteudo do arquivo
function lendoUmArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' });
      resolve(conteudo.toString());
    } catch (error) {
      reject(error);
    }
  });
}

// funcao que executa a funcao de ler apenas um arquivo varias vezes
function lerVariosArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => lendoUmArquivo(caminho)));
}

// filtra os arquivos terminados em determinada string, no caso do projeto vai ser a extensão do arquivo
function filtrandoArquivosPorExtencao(extensao) {
  return function (array) {
    return array.filter((el) => el.endsWith(extensao));
  };
}

//remove as linhas do array que tiver o conteudo vazio
function removerLinhasVazias(array) {
  return array.filter((str) => str.trim());
}

// funcao para remover as linhas com intervalos de tempo
function removeLinhasComDeterminadaString(string) {
  return function (array) {
    return array.filter((el) => !el.includes(string));
  };
}

//funcao para remover linhas com apenas numeros
function removeLinhasComNumeros(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());

    return num !== num;
  });
}

//funcao para remover simbolos
function removeSimbolos(simbolos) {
  return function (array) {
    return array.map((el) => {
      let textoSemSimbolo = el;
      simbolos.forEach((simbolo) => {
        textoSemSimbolo = textoSemSimbolo.split(simbolo).join('');
      });
      return textoSemSimbolo;
    });
  };
}

//funcao para mesclar os elementos do array
function mesclarElementos(array) {
  return array.join(' ');
}

//funcao para separa uma string por determinado simbolo
function separarPorDeterminadoSimbolo(simbolo) {
  return function (string) {
    return string.split(simbolo);
  };
}

module.exports = {
  lerDiretorio,
  lerVariosArquivos,
  filtrandoArquivosPorExtencao,
  removerLinhasVazias,
  removeLinhasComDeterminadaString,
  removeLinhasComNumeros,
  removeSimbolos,
  mesclarElementos,
  separarPorDeterminadoSimbolo,
};
