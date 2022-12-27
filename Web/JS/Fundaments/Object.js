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
*/

