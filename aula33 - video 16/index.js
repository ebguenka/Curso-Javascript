const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const { nome = '', sobrenome } = pessoa;
//const { nome, sobrenome } = pessoa;
//const nome = pessoa.nome;
console.log(nome, sobrenome);
