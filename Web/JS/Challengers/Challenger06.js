//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

const pow = (base, exp) => {
    if (exp === 0){
        return 1
    } else if (exp === 1){
        return base
    } else {
        let aux = base
        for (let i = 1; i < exp; i++){
            base *= aux
        }
        return base
    }
}

console.log(pow(2, 0))
console.log(pow(2, 1))
console.log(pow(2, 10))