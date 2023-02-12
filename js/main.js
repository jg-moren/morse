const textoConsole = document.getElementById("texto-codigo");
const textoTraducao = document.getElementById("texto-traducao");   
const barraTempo = document.getElementById("barra-tempo"); 

let press = false;
let start = Date.now();

window.KeyboardEvent

window.addEventListener('keydown', (e) => {
    console.log(e.code);
    if(!press && e.code === 'Space'){
        press = true;
        start = Date.now();
    }else if(e.code === 'Enter'){
        textoConsole.value += ' ';
        traduzir(textoConsole.value);
    }else if(e.code === 'Backspace'){
        textoConsole.value = textoConsole.value.slice(0, -1);
    }
});

window.addEventListener('keyup', (e) => { 
    if(e.code ==='Space'){
        press = false;
        time = Date.now() - start;
        textoConsole.value += morseCode(time);
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

const botaoLimpar = document.getElementById("botao-limpar");

botaoLimpar.onclick = ()=>{
    textoConsole.value = '';
    textoTraducao.value = '';
}


