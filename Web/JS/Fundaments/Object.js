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
*/

