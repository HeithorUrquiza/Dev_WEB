/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

const jSimp = (cpI, txj, temp) =>{
    let m = cpI * (txj / 100) * temp
    return m
}

const jComp = (cpI, txj, temp) =>{
    let m = cpI * Math.pow(1 + (txj / 100), temp)
    return m.toFixed(2)
}

console.log(jSimp(100, 10, 3))
console.log(jComp(100, 10, 3))