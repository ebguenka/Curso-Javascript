// Filter, map, reduce

// Retorne os números maiores que 10 
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 11, 15, 22, 24];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);


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