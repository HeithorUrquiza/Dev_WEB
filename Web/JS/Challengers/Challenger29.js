//26) Fazer um programa para encontrar todos os pares entre 1 e 100

let cont = 1
let pair = []
while(cont <= 100){
    if (cont % 2 === 0) {
        pair.push(cont)
    }
    cont++
}
console.log(`Números pares ${pair}`)