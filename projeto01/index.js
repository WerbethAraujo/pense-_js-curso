const path = require('node:path');

const fn = require('./funcoes');

const caminho = path.join(__dirname, '..', 'legendas');

const simbolos = ['.', '?', '-', ',', '"', '_', '<i>', '</i>', '\r', '♪'];

fn.lerDiretorio(caminho)
  .then((arquivos) => fn.filtrandoArquivosPor(arquivos, '.srt'))
  .then((arquivosSTR) => fn.lerVariosArquivos(arquivosSTR))
  .then((conteudo) => conteudo.join('\n'))
  .then((todoConteudo) => todoConteudo.split('\n'))
  .then((linhas) => fn.removeEmptyLines(linhas))
  .then((linhas) => fn.removeLinhasComTempo(linhas, '-->'))
  .then((linhas) => fn.removeLinhasComNumeros(linhas))
  .then(fn.removeSimbolos(simbolos))
  .then(console.log);
