const path = require("path");

// nome do arquivo atual
console.log(path.basename(__filename));

// nome do diretório atual
console.log(path.dirname(__filename));

// extensão do arquivo
console.log(path.extname(__filename));

// criar objeto Path
console.log(path.parse(__filename));

// juntar caminhos de arquivos
console.log(path.join(__dirname, "teste", "legal.html"));
