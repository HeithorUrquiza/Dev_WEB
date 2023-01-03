/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

const concepNotes = (vectorNotes) => {
    for(i in vectorNotes){
        if(vectorNotes[i] >= 0.0 && vectorNotes[i] <= 4.9){
            console.log(`\nNota: ${vectorNotes[i]} \nConceito: D`)
        } else if(vectorNotes[i] >= 5.0 && vectorNotes[i] <= 6.9){
            console.log(`\nNota: ${vectorNotes[i]} \nConceito: C`)
        } else if(vectorNotes[i] >= 7.0 && vectorNotes[i] <= 8.9){
            console.log(`\nNota: ${vectorNotes[i]} \nConceito: B`)
        } else if(vectorNotes[i] >= 9.0 && vectorNotes[i] <= 10.0){
            console.log(`\nNota: ${vectorNotes[i]} \nConceito: A`)
        }
    }
}

concepNotes([1.0, 5.8, 7.9, 9.3, 3.4])