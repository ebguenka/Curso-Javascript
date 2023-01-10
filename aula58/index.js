// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Privadas
    const ID = 123456;
    const metodoInterno = function() {

    };
    // Atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um metodo');
    };
}

const p1 = new Pessoa('João', 'Ricardo');
const p2 = new Pessoa('Maria', 'Oliveira');
//console.log(p1);

p2.metodo();