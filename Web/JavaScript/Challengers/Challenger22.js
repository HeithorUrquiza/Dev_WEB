/*19) Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

const menu = (cod, qtd) =>{
    switch (parseInt(cod)) {
        case 100:
            return `${qtd} Cachorro(s) quente(s) \nTotal: R$${(qtd * 3).toFixed(2)}`
        case 200:
            return `${qtd} Hambúrgues(es) simples \nTotal: R$${(qtd * 4).toFixed(2)}`
        case 300:
            return `${qtd} Cheeseburguer(s) \nTotal: R$${(qtd * 5.5).toFixed(2)}`
        case 400:
            return `${qtd} Bauru(s) \nTotal: R$${(qtd * 7.5).toFixed(2)}`
        case 500:
            return `${qtd} Refrigerante(s) \nTotal: R$${(qtd * 3.5).toFixed(2)}`
        case 600:
            return `${qtd} Suco(s) \nTotal: R$${(qtd * 2.8).toFixed(2)}`
        default:
            return 'Código do produto inexistente'
    }
}

console.log(menu(100, 2))
console.log(menu(200, 1))
console.log(menu(300, 4))
console.log(menu(400, 2))
console.log(menu(500, 1))
console.log(menu(600, 6))
console.log(menu(60, 6))