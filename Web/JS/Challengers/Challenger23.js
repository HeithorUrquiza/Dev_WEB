/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

const atm = (value) =>{
    let aux = 0
    let ballot100 = 0
    let ballot50 = 0
    let ballot10 = 0
    let ballot5 = 0
    let ballot1 = 0
    
    if (value % ballot100 !== 0){
        ballot100 = parseInt(value / 100)
        aux = value % 100
    } else { 
        ballot100 = value / 100
    }

    if (aux % ballot50 !== 0){
        ballot50 = parseInt(aux / 50)
        aux %= 50
    } else { 
        ballot50 = aux / 50
    }

    if (aux % ballot10 !== 0){
        ballot10 = parseInt(aux / 10)
        aux %= 10
    } else { 
        ballot10 = aux / 10
    }

    if (aux % ballot5 !== 0){
        ballot5 = parseInt(aux / 5)
        aux %= 5
    } else { 
        ballot5 = aux / 5
    }

    if (aux % ballot1 !== 0){
        ballot1 = parseInt(aux / 1)
        aux %= 1
    } else { 
        ballot1 = aux / 1
    }

    return `Valor do saque: R$${value} \nCedúlas: ${finalMsg(ballot100, ballot50, ballot10, ballot5, ballot1)}`
}


const finalMsg = (ballot100, ballot50, ballot10, ballot5, ballot1) =>{
    let msg = ''
    if(ballot100 > 0){
        msg += `${ballot100} nota(s) de R$100. `
    }

    if(ballot50 > 0){
        msg += `${ballot50} nota(s) de R$50. `
    }

    if(ballot10 > 0){
        msg += `${ballot10} nota(s) de R$10. `
    }

    if(ballot5 > 0){
        msg += `${ballot5} nota(s) de R$5. `
    }

    if(ballot1 > 0){
        msg += `${ballot1} nota(s) de R$1. `
    }

    return msg
}

console.log(atm(200))
console.log(atm(500))
console.log(atm(230))