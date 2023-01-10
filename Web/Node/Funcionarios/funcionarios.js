// Requisição em cima da url para obter os dados
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const fromChina = ch => ch.pais === 'China'
const isWoman = w => w.genero === 'F'
const lowerSal = (func, funcCurrently) => {
    return func.salario < funcCurrently.salario ? func : funcCurrently
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    //Desafio -- Achar a mulher chinesa com o menor salário
    console.log(funcionarios.filter(fromChina).filter(isWoman).reduce(lowerSal))
})