const simbolosTraducao = {
    ".-": 'A',
    "-...": 'B',
    "-.-.": 'C',
    "-..": 'D',
    ".": 'E',
    "..-.": 'F',
    "--.": 'G',
    "....": 'H',
    "..": 'I',
    ".---": 'J',
    "-.-": 'K',
    ".-..": 'L',
    "--": 'M',
    "-.":'N', 
    "---": 'O',
    ".--.": 'P',
    "--.-": 'Q',
    ".-.": 'R',
    "...": 'S',
    "-": 'T',
    "..-": 'U',
    "...-": 'V',
    ".--": 'W',
    "-..-": 'X',
    "-.--": 'Y',
    "--..": 'Z',
    "-----": '0',
    ".----": '1',
    "..---": '2',
    "...--": '3',
    "....-": '4',
    ".....": '5',
    "-....": '6',
    "--...": '7',
    "---..": '8',
    "----.": '9'
}

function traduzir(letras){
    if(letras !== undefined){;
        let simbolo = letras.split(' ');
        textoTraducao.value = '';

        for(let letra of simbolo){
            const letraTraduzida = simbolosTraducao[letra];
            letraTraduzida === undefined ? textoTraducao.value += '∄' : textoTraducao.value += letraTraduzida;
        }

    }
}