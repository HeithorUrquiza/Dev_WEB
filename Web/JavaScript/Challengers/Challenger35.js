//32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const vector = []
for(let i = 0; i <= 20; i++){
    let num = Math.random() * 20
    vector.push(num)
}

let med = 0
let sum = 0
for(i in vector){
    sum += vector[i]
}
med = sum / vector.length

console.log(med.toFixed(2))
