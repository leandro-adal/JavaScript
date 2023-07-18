// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';


// Relembrando o encurtamento de código usando falsy
const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; // Enquanto o usuário não definir uma cor ela será a preta
console.log(nivelUsuario, corPadrao);