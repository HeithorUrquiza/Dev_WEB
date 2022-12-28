// 12) Faça um algoritmo que calcule o fatorial de um número.

const fat = num =>{
    let aux = num
    for (let i = (num-1); i > 0; i--){
        aux *= i
    }
    return aux
}

console.log(fat(10))