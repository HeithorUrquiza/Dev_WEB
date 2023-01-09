/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

const vector = [-4, -9, 8, -6, -1, 0, 10, -5]

const contNegNumebers = () =>{
    let contNeg = 0
    for (i in vector){
        if(vector[i] < 0){
            contNeg++
        }
    }
    return `Qtd de números negativos é ${contNeg}`
}

console.log(contNegNumebers(vector))