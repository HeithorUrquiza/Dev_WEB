/*

    UM POUCO DE REVISÃO

    let aprovados = ['Ana', 'Bia', 'Carlos', 'Pedro']
    delete aprovados[1] //Uma forma de excluir um elemento do array sem reordena-lo
    aprovados.splice(1, 2, 'Elemento1', 'Elemento2') //Método útil para excluir e/ou adicionar elementos
    console.log(aprovados)
    
    _________________________________________________________________________________________________________________________________

    MÉTODOS IMPORTANTES

    const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
    pilotos.pop() //retira o último elemento
    console.log(pilotos)

    pilotos.push('Verstappen') //Adiciona elemento na última posição
    console.log(pilotos)

    pilotos.shift() //remove o primeiro elemento
    pilotos.unshift('Hamilton') //adiciona elemento na primeira posição

    const algunsPilotos1 = pilotos.slice(2) //novo array a partir do índice oferecido
    const algunsPilotos2 = pilotos.slice(1, 4)
    console.log(algunsPilotos2)

    _________________________________________________________________________________________________________________________________

    FOREACH >> Forma 1 de pecorrer o array

    const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

    aprovados.forEach(function(nome, indice){ //Parametros: 1° Valor, 2° indice do elemnto, 3° o próprio array
        console.log(`${indice + 1}) ${nome}`)
    })

    aprovados.forEach(nome => console.log(nome)) //Percorre somente os valores do array

    const exibirAprovados = aprovado => console.log(aprovado)
    aprovados.forEach(exibirAprovados)


    >>> Implementando um forEach próprio
    Array.prototype.forEach2 = function(callback){
        for(i = 0; i < this.length; i++){
            callback(this[i], i, this)
        }
    }

    const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

    aprovados.forEach2(function(nome, indice){ //Parametros: 1° Valor, 2° indice do elemnto, 3° o proprío array
        console.log(`${indice + 1}) ${nome}`)
    })

    _________________________________________________________________________________________________________________________________

    MAP >> Forma 2 de percorrer um array   
    
    const nums = [1, 2, 3, 4, 5]

    let resultado = nums.map(function(e){ //Gera um novo array
        return e * 2
    })

    const soma10 = e => e + 10
    const triplo = e => e * 3
    const paraDinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.',',')}`

    console.log(resultado.map(soma10).map(triplo).map(paraDinheiro)) //Chamadas sucessivas


    >> Desafio
    const carrinho = [
        '{"nome": "Borracha", "preco": 3.45}',
        '{"nome": "Caderno", "preco": 13.90}',
        '{"nome": "Kit de lápis", "preco": 41.22}',
        '{"nome": "Caneta", "preco": 7.50}'
    ]

    const paraObjeto = json => JSON.parse(json)
    const apenasPreco = produto => produto.preco

    const resultado = carrinho.map(paraObjeto).map(apenasPreco)
    console.log(resultado)


    >> Implementando um Map
    const array1 = [1, 2, 3, 4]

    Array.prototype.map2 = function(callback){
        const newArray = []
        for(i = 0; i < this.length; i++){
            newArray.push(callback(this[i], i, this))
        }
        return newArray
    }

    const soma2 = e => e + 2
    console.log(array1.map2(soma2))

    _________________________________________________________________________________________________________________________________

    FILTER >> Forma 3 de percorrer um array

    const produtos = [
        {nome: 'Notebook', preco: 2499, fragil: true},
        {nome: 'iPad Pro', preco: 4199, fragil: true},
        {nome: 'Copo de vidro', preco: 12.49, fragil: true},
        {nome: 'Copo de plástico', preco: 18.99, fragil: false}
    ]

    const prodCaro = p => p.preco > 500 
    const prodFragil = p => p.fragil 

    console.log(produtos.filter(prodCaro).filter(prodFragil)) //O resultado para formar o novo array precisa ser true


    >> Implementando um Filter
    Array.prototype.filter2 = function(callback){
        const newArray = []
        for(let i = 0; i < this.length; i++){
            if(callback(this[i], i , this)){
                newArray.push(this[i])
            }
        }
        return newArray
    }

    _________________________________________________________________________________________________________________________________

    REDUCE >> Forma 4 de percorrer um array

    const alunos = [
        {nome: 'João', nota: 7.3, bolsista: false},
        {nome: 'Maria', nota: 9.2, bolsista: true},
        {nome: 'Pedro', nota: 9.8, bolsista: false},
        {nome: 'Ana', nota: 8.7, bolsista: true},
    ]

    const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
        console.log(acumulador, atual)
        return acumulador + atual
    })


    >> Dasafio 1 -- Todos os alunos são bolsistas?
    const tdsBolsistas = (resultado, bolsista) => resultado && bolsista
    console.log(alunos.map(a => a.bolsista).reduce(tdsBolsistas))

    >> Dasafio 2 -- Algum aluno é bolsista?
    const algBolsista = (resultado, bolsista) => resultado || bolsista
    console.log(alunos.map(a => a.bolsista).reduce(algBolsista))


    >> Implementando um Reduce
    Array.prototype.reduce2 = function(callback, valorInicial = this[0]){
        const indiceInicial = valorInicial ? 0 : 1
        let acumulador = valorInicial
        for(let i = indiceInicial; i < this.length; i++){
            acumulador = callback(acumulador, this[i], i, this)
        }
        return acumulador
    }

    _________________________________________________________________________________________________________________________________

    IMPERATIVO vs DECLARATIVO

*/


const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

//Imperativo
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)