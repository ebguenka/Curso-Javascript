// argumentos que sustenta todos os argumentos enviados
// argumentos são valores que enviamos para os parametros
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);

// function funcao() {
//     console.log(arguments);

// }
// funcao('Valor', 1, 2, 3, 4, 5);