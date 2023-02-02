const nome = 'Bruno';
const sobrenome = 'Silva';

const falaNome = () => nome + ' ' + sobrenome;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;
// console.log(module.exports);

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.quaquerCoisa = 'O que eu quiser exportar';
//console.log(exports);
