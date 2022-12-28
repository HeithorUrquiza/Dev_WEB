/*Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo: A: 10%, B: 15%, C:20% Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

const newSalary = (plane, sal) => {
    let a = 0
    switch (plane.toUpperCase()) {
        case 'A':
            a = sal * 1.1
            return a.toFixed(2)
        case 'B':
            a = sal * 1.15
            return a.toFixed(2)
        case 'C':
            a = sal * 1.2
            return a.toFixed(2)
        default:
            return 'Plano não aprovado'
    }
}

console.log(newSalary('a', 200))
console.log(newSalary('b', 200))
console.log(newSalary('c', 200))
console.log(newSalary('d', 1000))
console.log(newSalary('e', 33333))