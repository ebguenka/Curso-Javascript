
const pontuacaoUSuario = 1000;
const nivelUSuario = pontuacaoUSuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUSuario);


const corUsuario = 'Branca';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUSuario, corPadrao);


// if (pontuacaoUSuario >= 1000){
//    console.log('Usuario VIP');
    
// } else {
//    console.log('Usuario normal');
// }