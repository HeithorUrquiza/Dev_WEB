/* 
    IF / IF-ELSE / IF-ELSE IF    

    - Sempre usar chaves
    - Cuidado com sentenças terminados em ; -> Evitar de usar em estruturas de controle
    - Cuidado com erros causados pela linguagem fracamente tipada
    
    function soBoaNoticia(nota) {
        if (nota >= 7) {
            console.log('Aprovado com ' + nota)        
        }
    }

    function soSeForVerdaderio(valor) {
        if(valor){    //Valores que não são verdade (null, undefined, '', 0, NaN)
            console.log('É verdade... ' + valor)
        }
    }    

    const imprimirResultado = function (nota) {
        if(nota >= 7){ 
            console.log('Aprovado!!')
        } else {
            console.log('Reprovado!!')
        }
    }


    Number.prototype.entre = function (inicio, fim) {
        return this >= inicio && this <= fim
    }

    const exibirResultado = function(nota) {
        if (nota.entre(9, 10)){
            console.log('Quadro de Honra')
        } else if (nota.entre(7, 8.99)){
            console.log('Aprovado')
        } else if (nota.entre(4, 6.99)){
            console.log('Recuperação')
        } else if (nota.entre(0, 3.99)){
            console.log('Reprovado')
        } else {
            console.log('Nota inválida')
        }
    }

    _________________________________________________________________________________________________________________________________

    SWITCH CASE 

    - Pode colocar case's na mesma linha, mas não aceita uso de vírgula ou intervalo

    const imprimirResultado = function(nota){
        switch (Math.floor(nota)) {
            case 10:
            case 9:
                console.log('Quadro de Honra')
                break
            case 8: case 7:
                console.log('Aprovado')
                break
            case 6: case 5: case 4:
                console.log('Recuperação')
                break
            case 3: case 2: case 1: case 0:
                console.log('Reprovado')
                break
            default:
                console.log('Nota inválida')
        }
    }

    _________________________________________________________________________________________________________________________________

    WHILE / DO WHILE   

    function getinteiroAleatorioEntre(min, max) {
        const valor = Math.random() * (max-min) + min
        return Math.floor(valor)
    }

    let opcao = 0

    while (opcao != -1) {
        opcao = getinteiroAleatorioEntre(-1, 10)
        console.log(`Opção escolhia foi ${opcao}`)
    }

    do {
        opcao = valorAleatorio(-1, 10)
        console.log(`Valor escolhido ${opcao}`)
    } while (opcao != -1);

    _________________________________________________________________________________________________________________________________

    FOR / FOR IN

    - Muito útil também para percorrer itens de um Array

    for (let cont = 1; cont < 11; cont++) {
        console.log(`Contador = ${cont}`)
    }

    const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

    for (let i in notas) {
        console.log(i, notas[i])
    }

    const pessoa = {
        nome: 'Ana', sobrenome: 'Silva', idade: '29', peso: 64
    }

    for (let atributo in pessoa){
        console.log(`${atributo} = ${pessoa[atributo]}`)
    }


    _________________________________________________________________________________________________________________________________

    BREAK & CONTINUE

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for (let x in nums){
        if (x == 5){
            break
        }
        console.log(`Índice[${x}] = ${nums[x]}`)
    }

    for (let y in nums){
        if (y == 5){
            continue
        }
        console.log(`Índice[${y}] = ${nums[y]}`)
    }

*/
