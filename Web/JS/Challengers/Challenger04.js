/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

const operations = (a, b) => {
    console.log(`\nPara os valore informados (${a} e ${b}) temos: \nSoma: ${a + b} \nSubtração: ${a - b} \nMultiplicação: ${a * b} \nDivisão: ${a / b}`)
}

operations(7, 8)
operations(20, 16)
