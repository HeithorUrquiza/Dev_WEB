/*  TIPO DE DADOS

    - String
    - Number: int(12), reais ou float(12.4), Nan(Not a Number) e Infinity
    - Boolean: true or false
    - Undefined: indefinido / Null: nulo, objeto sem nada dentro dentro
    - Object: atributos e métodos, {"propriedade" : valor} 
    - Array: ['Maicon', 36]

    * Primitivos: Não sofrem alterações

    * const -> Palavra chave para criar uma constante no programa

    ------------------------------------------------------------------------------

    TEMPLATE STRING

    `Olá ${nome}!`

    ------------------------------------------------------------------------------

    FUNÇÃO EM JS

    - Função sem retorno
    function imprimirSoma(a, b) {
        console.log(a + b)
    }

    - Função com retorno
    function soma(a, b = 0) {
        return a + b
    }

    - Armazenando função em uma variável
    const somarValores = function (a, b){
        console.log(a + b)
    }
    
    - Armazenando função arrow em uma variável
    const soma = (a, b) => {
        return a + b
    }

    - Retorno implícito (valido para funções de uma única linha)
    const subtracao = (a, b) => a - b

    ------------------------------------------------------------------------------

    VARIÁVEL VAR

    - 2 escopos: Ou global (visível para todos), ou função (visível e acessada apenas dentro da função)
    - Evitar o escopo global (variáveis globais)
    - Pode ter seu valor acessado apesar de ser usado em um laço de repetição
    - Hoisting: efeito de issamento. A variável é "jogada para cima" e executada antes (não recomendado usar)

    
    VARIÁVEL LET
    
    - É afetado pelo escopo de bloco {}
    - 3 escopos: Global, de função e de bloco
    - Não pode ter seu valor acessado se usado em um laço de repetição

    ------------------------------------------------------------------------------

    OPERADORES

    - Destructuring
    const pessoa = {
        nome: 'Ana',
        idade: 5,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 121
        }
    }

    const {nome: n, idade: i} = pessoa //Extraindo dados do objeto
    const {sobrenome, bemHumorada = true} = pessoa //Predefinindo valores 
    const {endereco: {logradouro, numero} } = pessoa //Desestruturando um dado aninhado
    const [n1, n2, n3,n4, n5, n6 = 0] = [10, 9, 7 ,8] //Desestruturando um array

    */


    




