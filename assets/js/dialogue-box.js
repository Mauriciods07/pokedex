function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showText() {
    $dialogueBox = document.querySelector(".dialogue-box");
    $dialogueBox.style.display = "block";

    $dialogueText = document.querySelector(".dialogue-text");
    rotomLine = "¡Hola, soy Rotom! ¿Qué pokémon deseas buscar hoy?";
    rotomLineHTML = ""
    for(i=0; i<rotomLine.length; i++){
        rotomLineHTML += rotomLine[i];
        $dialogueText.innerText = rotomLineHTML;
        await sleep(50);
    }
}

setTimeout(showText, 800);