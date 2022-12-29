/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

const approved = (cod, note1, note2, note3) =>{
    let med = ((note1 * 4) + (note2 * 3) + (note3 * 3)) / (4 + 3 + 3)
    if (med >= 5){
        return `Código do aluno: ${cod} \nNotas: N1 = ${note1} | N2 = ${note2} | N3 ${note3} \nMédia final: ${med.toFixed(1)} \nStatus: APROVADO`
    } else {
        return `Código do aluno: ${cod} \nNotas: N1 = ${note1} | N2 = ${note2} | N3 ${note3} \nMédia final: ${med.toFixed(1)} \nStatus: REPROVADO`
    }
}

let cod = 5
do {
    
    let notes = [] 
    for (let i = 0; i < 3; i++){
        let note = Math.random() * 10
        notes.push(note.toFixed(1)) 
    }
    console.log(approved(cod, notes[0], notes[1], notes[2]))
    console.log('')
    cod--
} while (cod > 0);