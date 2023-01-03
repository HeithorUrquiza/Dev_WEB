/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

const compareStrings = (String1, String2) =>{
    let firstStr = String1
    let secondStr = String2
    let cont = 0

    for(i in String1){
        if(String1[i] === String2[i]){
            cont++
        }
    }

    if(cont === String1.length){
        return true
    } else {
        return false
    }
}

console.log(compareStrings('saca', 'casa'))