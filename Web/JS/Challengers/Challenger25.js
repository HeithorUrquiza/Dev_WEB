/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

const annuityPay = (month, value) =>{
    switch (parseInt(month)) {
        case 1:
            return `Anuidade: R$${(value).toFixed(2).toString().replace('.', ',')}`
        case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12:
            return `Anuidade: R$${(value * Math.pow((1 + 0.05), (month - 1))).toFixed(2).toString().replace('.', ',')}`
        default:
            return 'Mês inválido'
    }
}

console.log(annuityPay(1, 3000))
console.log(annuityPay(2, 3000))
console.log(annuityPay(4, 3000))
console.log(annuityPay(12, 3000))
