/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

const compareHeight = (height1, txGrow1, height2, txGrow2) =>{
    let year = 0
    let smallKid
    let tallKid

    if (height1 === height2){
        return `As crianças possuem o mesmo tamanho`
    } else if (height1 > height2){
        smallKid = height2
        tallKid = height1
        
        while (true) {
            tallKid += txGrow1
            smallKid += txGrow2
            year += 1

            if(smallKid > tallKid){
                return `Demorou ${year} anos para a criança menor ultrapassar a maior \nAlturas: Menor[${smallKid.toFixed(2)}] | Maior [${tallKid.toFixed(2)}]`
            }
        }
    } else {
        smallKid = height1
        tallKid = height2
        
        while (true) {
            tallKid += txGrow2
            smallKid += txGrow1
            year += 1

            if(smallKid > tallKid){
                return `Demorou ${year} anos para a criança menor ultrapassar a maior \nAlturas: Menor[${smallKid.toFixed(2)}] | Maior [${tallKid.toFixed(2)}]`
            }
        }
    }
     
}

console.log(compareHeight(0.95, 0.1, 0.90, 0.12))

