const texto = document.getElementById("texto-codigo");

let press = false;
let start = Date.now();

window.addEventListener('keypress', (e) => {
    if(!press){
        press = true;
        start = Date.now();
    }
});

window.addEventListener('keyup', (e) => { 
    press = false;
    time = Date.now() - start;
    console.log(time);
    texto.value += morseCode(time);
});

function morseCode(time){
    if(time > 500){
        return "-"
    }
    else{
        return "."
    }
}

const botaoLimpar = document.getElementById("botao-limpar");

botaoLimpar.onclick = ()=>{
    texto.value = '';
}