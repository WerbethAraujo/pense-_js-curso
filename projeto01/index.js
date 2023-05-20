const path = require('node:path');

const fn = require('./funcoes');

const caminho = path.join(__dirname, '..', 'legendas');

fn.lerDiretorio(caminho)
  .then((arquivos) => fn.filtrandoArquivosPor(arquivos, '.srt'))
  .then((arquivosSTR) => fn.lerVariosArquivos(arquivosSTR))
  .then(console.log);
