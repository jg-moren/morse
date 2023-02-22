const textoConsole = document.getElementById("texto-codigo");
const textoTraducao = document.getElementById("texto-traducao");   
const barraTempo = document.getElementById("controle-velocidade"); 
const audio = document.getElementById("audio-morse");

let press = false;
let start = Date.now();

window.KeyboardEvent

window.addEventListener('keydown', (e) => {
    console.log(e.code);
    if(!press && e.code === 'Space'){
        press = true;
        start = Date.now();
        audio.play();
    }else if(e.code === 'Enter'){
        traduzir(textoConsole.value);
        textoConsole.value += ' ';
    }else if(e.code === 'Backspace'){
        textoConsole.value = textoConsole.value.slice(0, -1);
    }
});

window.addEventListener('keyup', (e) => { 
    if(e.code ==='Space'){
        press = false;
        time = Date.now() - start;
        textoConsole.value += morseCode(time);
        audio.pause();
    }
});

function morseCode(time){
    if(time > barraTempo.value){
        return "-"
    }
    else{
        return "."
    }
}

