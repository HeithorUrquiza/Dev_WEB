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


*/

const aprovados = []