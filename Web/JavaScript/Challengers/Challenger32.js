/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

let vector = []
for(let i = 0; i < 30; i++){
    let num = parseInt(Math.random() * 50)
    vector.push(num)
}


const lookingInRange = (vector) =>{
    let contInRange = 0
    let contOutRange = 0
       
    for(i in vector){
        if(vector[i] >= 10 && vector[i] <= 20){
            contInRange++
        } else {
            contOutRange++
        }
    }
    return `Qtd dentro do intevalo: ${contInRange} \nQtd fora do intervalo: ${contOutRange}`
}

console.log(lookingInRange(vector))
