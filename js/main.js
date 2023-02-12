const texto = document.getElementById("texto-codigo");

let press = false;
let start = Date.now();

window.KeyboardEvent

window.addEventListener('keypress', (e) => {

    if(!press && e.code === 'Space'){
        press = true;
        start = Date.now();
    }else if(e.code === 'Enter'){
        texto.value += '/';
    }
});

window.addEventListener('keyup', (e) => { 
    if(e.code ==='Space'){
        press = false;
        time = Date.now() - start;
        console.log(time);
        texto.value += morseCode(time);
    }
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