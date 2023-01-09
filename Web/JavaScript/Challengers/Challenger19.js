/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

const calculator = (num1, sinal, num2) => {
    switch (sinal) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 'Equação não reconhecida'
    }
}

console.log(calculator(2, '+', 2))
console.log(calculator(3, '-', 6))
console.log(calculator(4, '*', 8))
console.log(calculator(30, '/', 5))
console.log(calculator(4, '^', 8))
