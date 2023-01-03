/*
Operadores lógicos
&& -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

//const expressaoAnd = true && true && true && true;
//const expressaoOr = false || true;//false || false; retorna false
//console.log(expressaoOr);
const usuario = 'Eduardo';
const senha = '12345';
//                       True                  False 
const vaiLogar = usuario === 'Eduardo' && senha === '123456';
console.log(vaiLogar);

