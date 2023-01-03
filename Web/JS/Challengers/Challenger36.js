/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

const vectorInt = [1, 2, 3, 4]
const vectorString = ['a', 'b', 'c', 'd']
const vectorDouble = [2.3, 4.3, 2.1, 1.3]

//Forma 1
let newVector1 = vectorInt.concat(vectorDouble)
newVector1 = newVector1.concat(vectorString)

console.log(newVector1)


//Forma 2
let newVector2 = vectorInt.concat(vectorDouble, vectorString)
console.log(newVector2)