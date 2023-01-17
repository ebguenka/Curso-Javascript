const pessoa1 = new Object();
pessoa1.nome = 'Eduardo';
pessoa1.idade = 29;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);

};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;

};
console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());








// const pessoa = {
//     nome: 'Bruno',
//     sobrenome:'Felipe'
// };
// console.log(pessoa['nome']);
// console.log(pessoa['sobrenome']);