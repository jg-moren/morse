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





function traduzir(palavra){
    if(palavra!==undefined){
        const letras = palavra.split(' '); 
        letras.pop();
        console.log(letras);
        textoTraducao.value = '';

        for(let letra of letras){
            const letraTraduzida = simbolosTraducao[letra];
            if(letraTraduzida === undefined){
                textoTraducao.value += '∄';
            }else{
                textoTraducao.value += letraTraduzida;
            }
            
        }

    }
}