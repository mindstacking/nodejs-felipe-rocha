const fs = require("fs");
const path = require("path");

// criar uma pasta
/*fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    console.log("Error: " + error);
  }

  console.log("Pasta criada com sucesso.");
});*/

// criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello Node.js",
  (error) => {
    if (error) {
      return console.log("Error: " + error);
    }
    console.log("Arquivo criado com sucesso");
  }
);
