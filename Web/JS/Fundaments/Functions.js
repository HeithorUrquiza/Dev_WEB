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

    _________________________________________________________________________________________________________________________________
*/



