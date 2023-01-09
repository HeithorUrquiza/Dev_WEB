/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

const beginEnd = (begin = 0, end = 100) =>{
    const numOdd = []
    let aux
    
    if (begin > end){
        aux = end
        end = begin
        begin = aux
    }
    
    for(let i = begin; i <= end; i++){
        if(i % 2 !== 0){
            numOdd.push(i)
        }
    }
    return numOdd
}

console.log(beginEnd())
console.log(beginEnd(100, 200))
console.log(beginEnd(60, 30))

