const path = require("path")

// Basename
// arquivo atual
console.log(path.basename(__filename));

// diretório atual
console.log(path.dirname(__filename));

// extensão do arquivo
console.log(path.extname(__filename));

// criar objeto path
console.log(path.parse(__filename));

// juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "tmp", "produtos.html"))