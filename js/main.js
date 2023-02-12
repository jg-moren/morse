const textoConsole = document.getElementById("texto-codigo");
const textoTraducao = document.getElementById("texto-traducao");    

let press = false;
let start = Date.now();
let palavras;

window.KeyboardEvent

window.addEventListener('keypress', (e) => {

    if(!press && e.code === 'Space'){
        press = true;
        start = Date.now();
    }else if(e.code === 'Enter'){
        textoConsole.value += ' ';
        palavras = textoConsole.value.split(' '); 
        traduzir();
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
    if(time > 200){
        return "-"
    }
    else{
        return "."
    }
}

function traduzir(){
    if(palavras!==undefined){
        textoTraducao.value = '';
        for(let i=0; i<palavras.length; i++){
            for(let j=0; j<simbolosTraducao.length; j++){
                if(palavras[i]===simbolosTraducao[j][0]){
                    textoTraducao.value += simbolosTraducao[j][1];
                }
            }
        }
    }
}

const botaoLimpar = document.getElementById("botao-limpar");

botaoLimpar.onclick = ()=>{
    textoConsole.value = '';
    textoTraducao.value = '';
}

const simbolosTraducao = [
    [".-", 'A'],
    ["-...", 'B'],
    ["-.-.", 'C'],
    ["-..", 'D'],
    [".", 'E'],
    ["..-.", 'F'],
    ["--.", 'G'],
    ["....", 'H'],
    ["..", 'I'],
    [".---", 'J'],
    ["-.-", 'K'],
    [".-..", 'L'],
    ["--", 'M'],
    ["-.", 'N'], 
    ["---", 'O'],
    [".--.", 'P'],
    ["--.-", 'Q'],
    [".-.", 'R'],
    ["...", 'S'],
    ["-", 'T'],
    ["..-", 'U'],
    ["...-", 'V'],
    [".--", 'W'],
    ["-..-", 'X'],
    ["-.--", 'Y'],
    ["--..", 'Z'],
    ["-----", '0'],
    [".----", '1'],
    ["..---", '2'],
    ["...--", '3'],
    ["....-", '4'],
    [".....", '5'],
    ["-....", '6'],
    ["--...", '7'],
    ["---..", '8'],
    ["----.", '9']
];
