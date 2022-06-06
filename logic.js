//reponse function
function returnRandom() {
   return Math.floor(Math.random() * 7)
}

function returnMessage(num) {
    switch(num){
        case 1:
            return 'Talvez ano que vem';
        case 2:
            return 'Pode crer mano'
        case 3:
            return 'Basta você acreditar' 
        case 4:
            return 'Repense um pouco sua pergunta'
        case 5:
            return 'Você tem certeza que quer saber isso'
        case 6:
            return 'É mais fácil jogar no bicho'
        case 7:
            return 'Tem coisas que nem a bola sabe'
        default:
            return 'iiih sei não viu'
    }
}

console.log(returnMessage(returnRandom()))

//accessing the DOM

function showText() {
    const input = document.getElementById('input-box')
    const answer = document.getElementById('answer-place');

    if (!input.innerHTML) {
        answer.innerHTML = 'Para saber você tem que perguntar!'
    } else {
        answer.innerHTML = returnMessage(returnRandom())
    }

    function removeText() {
        answer.innerHTML = ''
    }
setTimeout(removeText, 2000)

}


