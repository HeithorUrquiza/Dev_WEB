/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

const typeTriangle = (a, b, c) => {
    if (a === b && b === c){
        return 'Este é um triângulo EQUILÁTERO'
    } else if ((a === b && a !== c) || (b === c && b !== a) || (a === c && a !== b)) {
        return 'Este é um triângulo ISÓSCELES'
    } else {
        return 'Este é um triângulo ESCALENO'
    }
}

console.log(typeTriangle(1, 2, 3)) 
console.log(typeTriangle(11, 11, 11))
console.log(typeTriangle(2, 2, 3))
console.log(typeTriangle(2, 3, 2))
console.log(typeTriangle(3, 2, 2))