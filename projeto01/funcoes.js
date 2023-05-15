const fs = require('node:fs');
const path = require('node:path');

function lerDiretorio(caminho) {
  let arquivos = fs.readdirSync(caminho);

  return arquivos.map((arquivo) => path.join(caminho, arquivo));
}

module.exports = {
  lerDiretorio,
};
