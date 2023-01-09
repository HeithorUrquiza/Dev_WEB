/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares*/

let vector = []
for(let i = 0; i < 30; i++){
    let num = parseInt(Math.random() * 100)
    vector.push(num)
}

let contOdd = 0
let contPair = 0
for (i in vector){
    if(vector[i] % 2 === 0){
        contPair++
    } else {
        contOdd++
    }
}

console.log(`Qtd de N° pares: ${contPair} \nQtd de N° ímpares: ${contOdd}`)