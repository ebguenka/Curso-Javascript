// Array / splice remover e adicionar elementos 
const nomes = ['Maria', 'Ana', 'Janaina', 'Rita', "Jair"];

const removidos = nomes.splice(3, 0, 'Ronaldo');
console.log(nomes, removidos);

// Unshift elemento no começo do indice
//nomes.splice(0, 0, 'Eder', 'Tati');

//*******************************************
// Push Adicionar elemento
//nomes.splice(nome.length, 0, 'Eder');
//*******************************************
//pop remover o último elemento
// const removidos = nomes.splice(-1, 1);

//*******************************************
//shift remover o primeiro elemento
//const removidos = nomes.splice(0, 1);

//*******************************************
// const removidos = nomes.splice(-2, Number.MAX_VALUE);
// console.log(nomes, removidos);
// console.log(Number.MAX_VALUE);

//********************************************
// const removidos = nomes.splice(-2, 1);
// console.log(nomes, removidos);