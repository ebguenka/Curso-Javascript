//For in -> lê os indices ou chaves do objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

 for (let chave in pessoa){
     console.log(chave, pessoa[chave]);
 }



// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let index in frutas) {
//     console.log(frutas[index]);
// }