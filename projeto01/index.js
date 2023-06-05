const path = require('node:path');

const fn = require('./funcoes');

const caminho = path.join(__dirname, '..', 'legendas');

const simbolos = ['.', '?', '-', ',', '"', '_', '<i>', '</i>', '\r', '♪'];

fn.lerDiretorio(caminho)
  .then(fn.filtrandoArquivosPorExtencao('.srt'))
  .then(fn.lerVariosArquivos)
  .then(fn.mesclarElementos)
  .then(fn.separarPorDeterminadoSimbolo('\n'))
  .then(fn.removerLinhasVazias)
  .then(fn.removeLinhasComDeterminadaString('-->'))
  .then(fn.removeLinhasComNumeros)
  .then(fn.removeSimbolos(simbolos))
  .then(fn.mesclarElementos)
  .then(fn.separarPorDeterminadoSimbolo(' '))
  .then(fn.removerLinhasVazias)
  .then(console.log);
