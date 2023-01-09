/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

const isDivisible = (value) =>{
    if (value % 3 === 0){
        return true
    } else {
        return false
    }
}

console.log(isDivisible(3))
console.log(isDivisible(4))
console.log(isDivisible(6))