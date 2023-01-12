// Filter, map, reduce

const pessoas = [
    {nome: 'Luiz', idade:62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Leticia', idade: 19 },
    {nome: 'Rosangela', idade: 32 },
    {nome: 'Wallace', idade: 47 },
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);

// const pessoasComNomeGrande = pessoas.filter(function(obj){
//     return obj.nome.length >= 7;
//});
console.log(pessoasComNomeGrande);

// Retorne os números maiores que 10 
// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 11, 15, 22, 24];
// const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);


//*************************************************************

// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 11, 15, 22, 24];

// const numerosFiltrados = numeros.filter(function(valor) {
//     return valor > 10;
// });

// console.log(numerosFiltrados);


//********************************************************

// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 11, 15, 22, 24];

// function callbackFilter(valor, indice, array) {
//     return valor > 10;

//     }

// const numerosFiltrados = numeros.filter(callbackFilter);
// console.log(numerosFiltrados);