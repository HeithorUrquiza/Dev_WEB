/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

const division = (divid, divisor) => {
    return `Resultado: ${divid/divisor} \nResto: ${divid%divisor}`
}

console.log(division(8, 4))
console.log(division(10, 6))