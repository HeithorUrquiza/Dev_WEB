/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/

const changeValues = (vectorA, vectorB) => {
    if(vectorA.length === vectorB.length){
        for(let i = 0; i < vectorA.length; i++){
            vectorA[i] = vectorA[i] + vectorB[i]
            vectorB[i] = vectorA[i] - vectorB[i]
            vectorA[i] = vectorA[i] - vectorB[i]
        } 
    } else {
        return 'Vetores de tamanhos diferentes'
    }

    return `Novo vetor A: ${vectorA} \nNovo vetor B: ${vectorB}`
}

const vA = [1, 3, 5]
const vB = [10, 6, 7] 
console.log(changeValues(vA, vB))
