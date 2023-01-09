/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

const pA = (n, a1, r) =>{
    const nums = [a1]
    let aux = a1
    for(let i = 1; i < n; i++){
        aux += r
        nums.push(aux)
    }
    let sum = (a1 + nums[nums.length - 1]) * n / 2
    
    return `Termos da PA: ${nums} \nSoma dos termos: ${sum}`
}

const pG = (n, a1, q) =>{
    const nums = [a1]
    let aux = a1
    for(let i = 1; i < n; i++){
        aux *= q
        nums.push(aux)
    }
    let sum = a1 * (Math.pow(q, n) - 1) / (q - 1)

    return `Termos da PA: ${nums} \nSoma dos termos: ${sum}`
}


console.log(pA(4, 2, 3))
console.log(pG(4, 2, 3))