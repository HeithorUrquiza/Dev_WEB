//30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor

let vector = [-1, 2, 3, 4, 1, 0, 2, -2, 17, 3, 87]
/*for (i = 0; i < 15; i++){
    let num = parseInt((Math.random() + 1) * 30)
    vector.push(num)
}*/

const bigAndSmall = (vector) =>{
    let numBig = vector[0] 
    let numSmall = vector[0]
    
    for(i in vector){
        if(vector[i] > numBig){
            numBig = vector[i]
        } else if(vector[i] < numSmall){
            numSmall = vector[i]
        }
    }

    return `Maior número: ${numBig} \nMenor número: ${numSmall}` 
}

console.log(bigAndSmall(vector))