/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.*/

const isLeap = (year) => {
    if (year % 100 !== 0 && year % 400 === 0 || year % 4 === 0){ //O ano deve ser divisível por 4 ou 400
        return true
    } else {
        return false
    }
}

console.log(isLeap(2016))
console.log(isLeap(2024))
console.log(isLeap(2022))