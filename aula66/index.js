
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
];
const nomes = pessoas.map(obj => obj.nome); 

console.log(nomes);

// // Dobre os números

// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];
// const numerosEmDobro = numeros.map(function(valor) {
//    return valor * 2;
//     // return`{Eduardo -> ${valor}`;

// });
// console.log(numerosEmDobro);