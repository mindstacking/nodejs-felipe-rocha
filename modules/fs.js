const fs = require('fs');
const path = require('path');

// criar uma pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
    if(error){
        return console.log(error)
    }
    console.log("pasta criada")
})

// criar arquivo
fs.writeFile(path.join(__dirname, 'test', 'produtos.txt'), 'hello node!', (error) => {
    if(error){
        return console.log(error)
    }
    console.log('arquivo criado com sucesso')
})