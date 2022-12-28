/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

const fruits = (fruit) => {
    switch (fruit.toLowerCase()) {
        case 'maçã':
            return 'Não vendemos essa fruta aqui'
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
        case 'melancia':
            return 'Aqui está, são R$3 o Kg'
        default:
            return 'Fruta inexistente'
    }
}

console.log(fruits('Maçã'))
console.log(fruits('Kiwi'))
console.log(fruits('Melancia'))
console.log(fruits('Pera'))
