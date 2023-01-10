const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//leitura sincrona (recomendado para arquivos pequenos)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//leitura assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


const config = require('./arquivo.json')
console.log(config.db)


//lendo uma pasta/diretório
fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})