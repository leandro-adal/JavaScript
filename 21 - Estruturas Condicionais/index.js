/*
if - Se algo predefino ocorrer
else if - Se a condição anterior não ocorrer e se ocorrer algo predefino
else - Se nenhuma da outra condições ocorrer então executa o que está dentro deste bloco
*/
const hora = 50;
if ((hora >= 5) && (hora <= 11)) {
    console.log('Bom dia!');
} else if ((hora > 12) && (hora <= 17)) {
    console.log('Boa tarde!');
} else if (((hora >= 18) && (hora <= 23)) && ((hora >= 0) && (hora <= 4))) {
    console.log('Boa tarde!');
} else {
    console.log('Hora errada!');
}


