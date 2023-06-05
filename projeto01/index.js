const path = require('node:path');

const fn = require('./funcoes');

const caminho = path.join(__dirname, '..', 'legendas');

const simbolos = ['.', '?', '-', ',', '"', '_', '<i>', '</i>', '\r', '♪'];

fn.lerDiretorio(caminho)
  .then(fn.filtrandoArquivosPorExtencao('.srt'))
  .then(fn.lerVariosArquivos)
  .then((conteudo) => conteudo.join('\n'))
  .then((todoConteudo) => todoConteudo.split('\n'))
  .then(fn.removerLinhasVazias)
  .then(fn.removeLinhasComDeterminadaString('-->'))
  .then(fn.removeLinhasComNumeros)
  .then(fn.removeSimbolos(simbolos))
  .then(console.log);
