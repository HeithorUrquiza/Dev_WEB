/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

const rand = num => {
    switch (num) {
        case 0: return '0'
        case 1: return '2'
        case 2: return '2'
        case 3: return '3'
        case 4: return '4'
        case 5: return '5'
        case 6: return '6'
        case 7: return '7'
        case 8: return '8'
        case 9: return '9'
        case 10: return '10'
        default: return 'Número fora do intervalo'
    }
}

for (let i = 0; i < 11; i++){
    let a = parseInt(Math.random() * 15)
    console.log(rand(a))
}