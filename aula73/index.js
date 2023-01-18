/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)


Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

//Object.entries
const produto = { nome: 'Produto', preco: 1.8, material: 'procelana' };
for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave,':', valor);
}

//console.log(Object.entries(produto));
// for(let entry of Object.entries(produto)) {
//     console.log(entry);
// }



//******************************************************************

// //Object.values retorna o valor
// const produto = { nome: 'Produto', preco: 1.8 };
// console.log(Object.values(produto)); 

//******************************************************************

// // Object.getOwnPropertyDescriptor(o, 'prop')
// const produto = { nome: 'Produto', preco: 1.8 };
// Object.defineProperty(produto, 'nome', {
//     writable: true,
//     configurable: true,
//     value: 'Qualquer outra coisa',

// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome' ));
// console.log(produto);

//******************************************************************

// const produto = { nome: 'Produto', preco: 1.8 };
// Object.freeze(produto);
// produto.nome = "Outro nome";
// const caneca = { nome: produto.nome, preco: produto.preco };
// console.log(produto);

//******************************************************************
// //Object.keys
// const produto = { nome: 'Produto', preco: 1.8 };
// const caneca = { nome: produto.nome, preco: produto.preco };
// produto.nome = "teste";

// console.log(Object.keys(caneca.nome));

//******************************************************************

// //Object.assign(des, any)
// const produto = { nome: 'Caneca', preco: 1.8};
// //const caneca = { nome: produto.nome, preco: produto.preco }; 
// const caneca = Object.assign({}, produto, { material: 'porcelana'} );
// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;

// console.log(produto);
// console.log(caneca);

//******************************************************************

//Object.freeze
// var obj = { prop: function () { }, name: 'Adam' };

// console.log(obj);

// obj.name = 'Billy';
// delete obj.prop;
// console.log(obj);
// var o = Object.freeze(obj);
// obj.name = 'chris';
// console.log(obj);

//******************************************************************

// const produto = { nome: 'Produto', preco: 1.8};
// //spread operator
// const caneca = { 
//     ...produto,
//     material: 'porcelana'

// }; 
// //produto.nome = 'Bruno Carlos';
// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;

// console.log(produto);
// console.log(caneca);