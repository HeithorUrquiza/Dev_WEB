/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/

const vector = [1.2, 3, 10, 7, 5.2, 2, 1]

const multVector1 = (vector, numInt) =>{
    const newVector = []
    for(i in vector){
        newVector.push(vector[i] * numInt)
    }
    return newVector
}

const multVector2 = (vector, numInt) =>{
    const newVector = []
    for(i in vector){
        if (vector[i] > 5) {
            newVector.push(vector[i] * numInt)
        } else {
            newVector.push(vector[i])
        }
    }
    return newVector
}

console.log(multVector1(vector, 5))
console.log(multVector2(vector, 5))
