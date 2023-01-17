// defineProperty -> Getter e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
       // value: estoaque, // Não utilizar
       // writable: false, // Não utilizar
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
              console.log('Bad value');
              return;
            }

            estoquePrivado = valor;
        }
    });
}
const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1);
p1.estoque = 5555;
console.log(p1.estoque);



function criaProduto(nome) {
    return {
        get nome() {
            return nome;

        },
        set nome(valor) {
            valor = valor.replace('coisa.', '');
            nome = valor;

        }
    };
}
const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);