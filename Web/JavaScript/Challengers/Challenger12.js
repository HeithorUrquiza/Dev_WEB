/*Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.*/

const list = []
for (i = 1; i <= 20; i++){
    list.push(5 * i)
}

const passedStudent = (note) => {
    if (note % 5 === 0){
        if (note < 40){
            return 'Reprovado'
        } else {
            return 'Aprovado ' +note
        }
    } else {
        if (note < 38){
            return 'Reprovado'
        }
        for (i in list){
            if (list[i] - note > 0 && list[i] - note < 3){
                note = list[i]
            }
        }
        return 'Aprovado ' +note
    }
}

console.log(passedStudent(25))
console.log(passedStudent(35))
console.log(passedStudent(77))
console.log(passedStudent(78))