//Global
//Closure escopo lexico
function retornaFuncao(nome) {
    // const nome = 'Bruno';
     return function () {
         return nome;
     };
 }
 
 const funcao = retornaFuncao('Bento');
 const funcao2 = retornaFuncao('Pedro');
 console.log(funcao);
 console.log(funcao2);
 
 console.log(funcao(), funcao2());