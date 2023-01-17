// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
     this.nome = nome;
     this.preco = preco;
   
    
    Object.defineProperty(this, 'estoque', {
       enumerable: true, // mostra a chave
       value: estoque, // valor
       writable: true, // pode alterar true = sim | false = não
       configurable: true // configuravel
    });

    // Object.defineProperty(this, 'estoque', {
    //      enumerable: true, // mostra a chave
    //      value: estoque, // valor
    //      writable: true, // pode alterar true = sim | false = não
    //     configurable: false // configuravel
    //   });

    // Object.definedProperties(this, {
    //     nome: {
    //         enumerable: true,
    //         value: estoque,
    //         writable: true,
    //         configurable: true
    //     },
    // });
 }


const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 51000;
console.log(p1);
//console.log(Object.keys(p1));

// for(let chave in p1 ) {
//     console.log(chave);
//}

// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;
//     this.estoque = estoque;
    
//     Object.defineProperty(this, 'estoque',  {
        
//     });
// }

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);