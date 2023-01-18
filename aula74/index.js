// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + '' + this.sobrenome;

}
Pessoa.prototype.estouAqui =   'Hahahahaha';


// instância
const pessoa1 = new Pessoa('Bete', 'O.'); // Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // Pessoa = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);