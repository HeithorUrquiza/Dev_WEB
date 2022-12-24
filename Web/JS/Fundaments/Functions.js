/*
    - Função em JS é First-Class Object (Citizens) ou Higher-order function

    - Forma literal
    function fun1() {}

    - Armazenar em uma variável
    const fun2 = function() {}

    - Armazenar em um Array
    const array = [function (a, b) {return a + b}, fun1]

    - Armazenar em um atributo de objeto
    const obj = {}
    obj.falar = function() {return 'Opa'}

    - Passar função como paramêtro
    function run(fun){
        fun()
    }
    run(function() {console.log('Executando')})

    - Uma função pode retornar/conter uma função
    function soma(a, b) {
        return function(c) {
            console.log(a + b + c)
        }
    }
    soma(2, 3)(4) => Chamada diretam de uma função dentro de outra

    _________________________________________________________________________________________________________________________________

    PARÂMETROS E RETORNO SÃO OPCIONAIS

    function area(larg, alt) {
        const area = larg * alt
        if(area > 20){
            console.log('Valor acima do permitido')
        } else {
            return area
        }
    }


    PARÂMETROS VARIÁVEIS

    function some(){    //Versão mais antiga
        let soma = 0
        for (i in arguments){ //Vetor de argumentos passados em uma função
            soma += arguments[i]
        }
        return soma
    }


    PARÂMETRO PADRÃO

    - Estratégia 1 para gerar valor padrão
    function soma1(a, b, c){
        a = a || 1
        b = b || 1
        c = c || 1
        return a + b + c
    }

    - Estratégia 2, 3, 4 para gerar valor padrão
    function soma2(a, b, c){
        a = a !== undefined ? a : 1
        b = 1 in arguments ? b : 1
        c = isNaN(c) ? 1 : c
    }

    - Valor padrão de es2015
    function soma3(a = 1, b = 1, c = 1){
        return a + b + c
    }

    _________________________________________________________________________________________________________________________________

    THIS -> Varia com uma função tradicional, porém não varia com uma arrow function


    THIS BIND  

    const pessoa = {
        saudacao: "Bom dia!",
        falar(){
            console.log(this.saudacao)
        }
    }
    const falarDePessoa = pessoa.falar.bind(pessoa) //Passando o valor de um atributo para uma variável
    falarDePessoa()

    function Pessoa() { 
        this.idade = 0

        const self = this  //Cravando o valor do this
        setInterval(function(){
            self.idade++
            console.log(self.idade)
        }.#bind(this)#, 1000)
    }
    new Pessoa


    --> This com função arrow ele não varia

    function Pessoa(){
        this.idade = 0
        
        setInterval(() =>{
            this.idade++
            console.log(this.idade)
        }, 1000)
    }
    new Pessoa


    --> Diferenças no uso do This

    let comparaComThis = function(param){  //Mexendo com escopo global
        console.log(this === param)
    }
    const obj = {}
    comparaComThis = comparaComThis.bind(obj)
    comparaComThis(obj)

    let comparaComThisArrow = param => console.log(this === param)  //Aponta para o módulo corrente
    comparaComThisArrow(module.exports)

    _________________________________________________________________________________________________________________________________

    FUNÇÃO ANÔNIMA

    - Basicamente uma função sem nome
    - Funções arrow sempre são anônimas

    const soma = function (x, y){
        return x + y
    }

    const imprimirResultado = function (a, b, operacao = soma){
        console.log(operacao(a, b))
    }
    imprimirResultado(3, 4, (x, y) => x * y)

    _________________________________________________________________________________________________________________________________

    FUNÇÃO CALLBACK

    - Uma função que é chamada dentro de um evento

    --> .forEach()
    const fabricantes = ['Mercedes', 'Audi', 'BMW']
    function imprimir(nome, indice){
        console.log(`${indice + 1}. ${nome}`)
    }
    fabricantes.forEach(imprimir)
    fabricantes.forEach(fabricante => console.log(fabricante))

    --> .filter()
    const notas = [7.1, 3.4, 8.7, 6.2, 6.0]
    const notasBaixas = notas.filter(nota => nota < 7) //Filtra os valores que atendem a condição(true) e add no array
    console.log(notasBaixas)

    _________________________________________________________________________________________________________________________________

    FUNÇÕES CONSTRUTORAS

    class Carro {
    constructor(velocidadeMaxima = 200, delta = 5) { --> forma mais atual

    function Carro(velocidadeMaxima = 200, delta = 5){
        //atributo privado
        let velocidadeAtual = 0

        //Método público
        this.acelerar = () => {
            if (velocidadeAtual + delta <= velocidadeMaxima) {
                velocidadeAtual += delta
            } else {
                velocidadeAtual = velocidadeAtual
            }
        }

        this.getVelocidadeAtual = () => {
            return velocidadeAtual
        }
    }

    const uno = new Carro
    uno.acelerar()
    console.log(uno.getVelocidadeAtual())
    
    const ferrari = new Carro(350, 20)
    ferrari.acelerar()
    ferrari.acelerar()
    ferrari.acelerar()
    console.log(ferrari.getVelocidadeAtual())

    _________________________________________________________________________________________________________________________________

    CLOSURES

    -- É o escopo criado quando uma função é declarada que permite a função acessar e manipular variáveis externas à função 

    const x = 'Global'

    function fora(){
        const x = 'Local'  <-- valor exibido devido ao escopo
        function dentro(){
            return x
        }
        return dentro
    }

    const minhaFuncao = fora()
    console.log(minhaFuncao())

    _________________________________________________________________________________________________________________________________

    FUNÇÃO FACTORY

    --> Responsável por criar um objeto 
    --> Não sofre com erros no browser por não incoporar o this

    - Factory simples
    function criarPessoa(){
        return {
            nome: 'Ana',
            sobrenome: 'Silva'
        }
    }

    - Factory com parâmetros
    function criarProduto(nome, preco){
        const desc = preco * 0.6
        return {
            nome,
            preco,
            desconto: desc
        }
    }

    - Outro exemplo de função construtora
    function Pessoa(nome){
        this.nome = nome //Permite alterar o nome da variável

        this.falar = () => {
            console.log(`Meu nome é ${this.nome}`)
        }
    }
    const p1 = new Pessoa('João')
    p1.falar()

    _________________________________________________________________________________________________________________________________

    IIFE - Função auto-invocada

    (function(){ //Executada assim que o script for lido e foge do escopo global
        console.log('Será executado na hora!!')
        console.log('Foge do escopo mais abrangente')
    })()

    _________________________________________________________________________________________________________________________________

    CALL & APPLY - Outras formas de chamar/invocar uma função

    function getPreco(imposto = 0, moeda = 'R$'){
        return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
    }

    const carro = {preco: 49990, desc: 0.20}

    -- A única diferença está na passagem de parâmetros
    console.log(getPreco.call(carro, 0.17, '$'))
    console.log(getPreco.apply(carro, [0.15, '$']))
*/




