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
*/

