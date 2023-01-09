/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).*/

const listScores = '30, 40, 50, 30, 15, 23, 60, 0'

const statusPlayer = (listScores) =>{
    let scores = listScores.split(', ')
    let breakRecord = 0
    let worstGame = 0
    let bestScore = scores[0]
    let worstSocre = scores[0]

    for (i in scores){
        if (scores[i] > bestScore){
            bestScore = scores[i]
            breakRecord += 1
        } else if (scores[i] < worstSocre){
            worstSocre = scores[i]
            worstGame = ++i
        }
    }

    return `Total de jogos: ${scores.length}\nN° de quebra de recordes: ${breakRecord} \nPior jogo: ${worstGame}°`
}

console.log(statusPlayer(listScores))