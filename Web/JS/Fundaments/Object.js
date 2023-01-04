/*
    PRINCÍPIOS BÁSICOS

    1. Abstração
    2. Encapsulamento
    3. Herança (prototype)
    4. Polimorfismo

    _________________________________________________________________________________________________________________________________

    REVISÃO DE OBJETO

    --> Coleção dinâmica de pares chave/valor
    --> Tentar acessar uma informação 'undefined' gera um erro
    --> Object.freeze é uma forma de deixar os valores do objeto constantes

    const produto = new Object
    produto.nome = 'Cadeira'
    produto.preco = 220

    const carro = {
        modelo : 'A4',
        valor: 98000,
        endereco: {
            logradouro: 'Rua ABC',
            num: 123
        },
        condutores: [{
            nome: 'João',
            idade: 20
        }, {
            nome: 'Maicon',
            idade: 23
        }]
    }

    delete produto.preco //Exemplo de uma remoção no objeto

    _________________________________________________________________________________________________________________________________

    ESTRATÉGIAS DE CONSTRUÇÃO DE OBJETO

    -- Notação literal
    const obj1 = {}

    -- Object em JS
    const obj2 = new Object

    -- Funções construtoras
    function Produto(nome, preco, desc){
        this.nome = nome
        this.getPrecoComDesconto = () => {
            return preco * (1 - desc)
        }
    }

    -- Função Factory
    function criarFuncionario (nome, salarioBase, faltas){
        return {
            nome, 
            salarioBase,
            faltas,
            getSalario(){
                return (salarioBase/30) * (30 - faltas)
            }
        }
    }

    -- Object.create
    const filha = Object.create(null)
    filha.nome = 'Ana'

    -- Uma função famosa que retorna Objeto
    const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
    console.log(fromJSON.info)

    _________________________________________________________________________________________________________________________________

    GETTERS E SETTERS

    const sequencia = {
        _valor: 1, //Convenção de acesso interno
        get valor(){return this._valor++},
        set valor(valor){
            if(valor > this._valor){
                this._valor = valor
            }
        }
    }

    console.log(sequencia.valor, sequencia.valor)
    sequencia.valor = 1000 //set
    console.log(sequencia.valor, sequencia.valor)

    _________________________________________________________________________________________________________________________________

    FUNÇÕES IMPORTANTES DE OBJECT   

    const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
    }

    console.log(Object.keys(pessoa))
    console.log(Object.values(pessoa))
    console.log(Object.entries(pessoa))

    Object.entries(pessoa).forEach(([chave, valor]) => {
        console.log(`${chave}: ${valor}`)
    })

    Object.defineProperty(pessoa, 'dataDeNascimento', { //Definindo nova propriedade do objeto
        enumerable: true,
        writable: false,
        value: '01/01/2019'
    })

    const dest = {a: 1}
    const o1 = {b: 2}
    const obj = Object.assign(dest, o1) //Contatenação

    _________________________________________________________________________________________________________________________________

    HERANÇA

    const ferrari = {
    modelo: 'F40',
    velMax: 324
    }

    const volvo = {
        modelo: 'V40',
        velMax: 200
    }

    console.log(ferrari.__proto__ === Object.prototype)


    -- Cadeia de atributos
    Object.prototype.attr0 = '0' //evitar de fazer
    const avo = {attr1: 'A'}
    const pai = {__proto__: avo, attr2: 'B', attr3: 'D'}
    const filho = {__proto__: pai, attr3: 'C'}
    console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

    const carro = {
        valAtual: 0,
        velMax: 200,
        
        acelerarMais(delta){
            if(this.valAtual + delta <= this.velMax){
                this.valAtual += delta
            } else {
                this.velAtual = this.velMax
            }
        },
        status(){
            return `${this.velAtual}Km/h de ${this.velMax}Km/h` 
        }
    }

    const ferrari = {
        modelo: 'F40',
        velMax: 324 //shadowing
    }

    const volvo = {
        modelo: 'V40',
        status(){
            return `${this.modelo}: ${super.status()}` //Sobre-escrita de método
        } 
    }

    Object.setPrototypeOf(ferrari, carro) //Definindo a relação de prototipo
    Object.setPrototypeOf(volvo, carro)


    -- Herança parte 3
    const pai = {nome: 'Pedro', corCabelo: 'preto'}
    const filha1 = Object.create(pai)
    filha1.nome = 'Ana'

    const filha2 = Object.create(pai, {
        nome: {value: 'Bia', writable: false, enumerable: true} //Passando valores e 'regras' para o atributo
    })
    console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

    for(let key in filha2){
        filha2.hasOwnProperty(key) ? //Verifica se aquele atributo é herdado ou não
            console.log(key): console.log(`Por herança: ${key}`)
    }


    -- Herança parte 4
    function MeuObjeto() {}
    console.log(MeuObjeto.prototype)

    const obj1 = new MeuObjeto
    const obj2 = new MeuObjeto
    console.log(obj1.__proto__ === obj2.__proto__) //Como um objeto referencia seu protótipo


    -- Herança parte 5
    String.prototype.reverse = function(){
        return this.split('').reverse().join('')
    }
    console.log('Ola Mundo'.reverse())

    Array.prototype.first = function(){
        return this[0]
    }
    console.log([1, 2, 3].first())

    _________________________________________________________________________________________________________________________________

    EVITANDO MODIFICAÇÕES

    >>> Object.preventExtensions - previni o aumento de atributos
    const produto = Object.preventExtensions(
        {nome: 'Qualquer', preco: 1.99, tag: 'promoção'}
    )
    produto.nome = 'Borracha'
    produto.descricao = 'Borracha branca'
    delete produto.tag
    console.log(produto)


    >>> Object.seal - não permiti criar nem excluir atributos do objeto
    const pessoa = Object.seal({
        nome: 'Juliana', idade: 35
    })
    console.log('Selado: ', Object.isSealed(pessoa))

    pessoa.sobrenome = 'Silva'
    delete pessoa.nome
    pessoa.idade = 12
    console.log(pessoa)

    >>> Object.freeze - um absoluto constante; não permite modificação, adição ou remoção de atributos

    _________________________________________________________________________________________________________________________________

    JSON vs Object

    >>> SITES: json validator, JSONLint

    const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c}}
    console.log(JSON.stringify(obj)) //Convertendo em formato JSON

    console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) //Forma correta de criar um objeto a partir de JSON

    console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))

    _________________________________________________________________________________________________________________________________

    CLASSES

    class Lancamento{
        constructor(nome = 'Genérico', valor = 0){
            this.nome = nome
            this.valor = valor
        }
    }

    class CicloFinanceiro {
        constructor(mes, ano){
            this.mes = mes
            this.ano = ano
            this.lancamentos = []
        }

        addLancamentos(...lancamentos){
            lancamentos.forEach(l => this.lancamentos.push(l))
        }

        sumario(){
            let valorConsolidado = 0
            this.lancamentos.forEach(l => {
                valorConsolidado += l.valor
            })
            return valorConsolidado
        }
    }


    const salario = new Lancamento('Salário', 45000)
    const contaDeLuz = new Lancamento('Luz', -240)

    const contas = new CicloFinanceiro(6, 2018)
    contas.addLancamentos(salario, contaDeLuz)
    console.log(contas.sumario())


    >>> Classe com herança
    class Avo{
        constructor(sobrenome){
            this.sobrenome = sobrenome
        }
    }

    class Pai extends Avo{
        constructor(sobrenome, profissao = 'Professor'){
            super(sobrenome) //Para pegar o atributo da classe superior (avo)
            this.profissao = profissao
        }
    }

    class Filho extends Pai{
        constructor(){
            super('Silva')
        }
    }

    const filho = new Filho
    console.log(filho)
*/

