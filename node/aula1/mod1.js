class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Edu';
const sobreNome = 'Bruno';

module.exports = {
    nome, sobreNome, Pessoa
};


// exportando a classe comandos abaixo

// exports.Pessoa = Pessoa;
// exports.Pessoa = Pessoa;
// this.sobreNome = 'Qualquer coisa que eu quiser. ';











/********************** Exemplo ***********************/


// const nome = 'Eduardo';
// const sobrenome = 'Bruno';

// const falaNome = () => nome + ' ' + sobrenome;


// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';
//console.log(exports);