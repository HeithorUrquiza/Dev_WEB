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
    - Não vai direto para o window assim como uma CONST

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

    function rand({min = 0, max = 1000}){     //Destructuring em uma função com objeto
        const valor = Math.random() * (max - min) + min
        return Math.floor(valor)
    }
    const obj = {max: 50, min: 40}
    

    - Aritméticos
    const [a, b, c, d] = [3, 5, 1, 15]
    const soma = a + b + c + d //Soma
    const subtracao = d - b //Subtração
    const multiplicacao = a * b //Multiplicação
    const divisao = d / a //Divisão
    const modulo = a % 2 //Modulo


    - Relacionais
    console.log('01)', '1' == 1)
    console.log('02)', '1' === 1) //Extritamente igual (leva em consideração o tipo de dado)
    console.log('03)', '3' != 3)
    console.log('04)', '3' !== 3) //Extritamente diferente
    console.log('05)', 3 < 2) //Menor
    console.log('06)', 3 > 2) //Maior
    console.log('07)', 3 <= 2) //Menor ou igual
    console.log('08)', 3 >= 2) //Maior ou igual


    - Lógicos
    function compras(job1, job2) {
        const comprarSorvete = job1 || job2     //ou
        const comprarTv50 = job1 && job2    //e
        //const comprarTv32 = !!(job1 ^ job2) bitwise xor
        const comprarTv32 = job1 != job2    //xor simplificado pela diferença
        const manterSaudavel = !comprarSorvete //negação lógica
        
        return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} //Omitindo o nome da chave no objeto o nome da variável é usado no lugar
    }


    - Unários
    num++ ou num--  //pós
    ++num ou --num  //pré


    - Ternário
    const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'  //Expressão lógica, ação caso verdade, ação caso falso
    console.log(resultado(8))

    ------------------------------------------------------------------------------

    TRATAMENTO DE EXCESSÃO/ERRO

    function tratarErroELancar(erro) {
        throw new Error("....")     //Retona uma possível mensagem para o usuário 
    }

    function imprimirNomegritado(obj) {
        try { 
            console.log(obj.name.toUpperCase() + '!!!')
        } catch (e) {
            tratarErroELancar(e)
        } finally {     //Executado caso dê erro no TRY
            console.log('Final')
        }
    }

    const obj = {Nome: 'Roberto'}
    console.log(imprimirNomegritado(obj))

    */

