// Array / splice remover e adicionar elementos 
const nomes = ['Maria', 'Ana', 'Janaina', 'Rita', "Jair"];

const removidos = nomes.splice(3, 0, 'Ronaldo');
console.log(nomes, removidos);



//*******************************************
// const removidos = nomes.splice(-2, Number.MAX_VALUE);
// console.log(nomes, removidos);
// console.log(Number.MAX_VALUE);

//********************************************
// const removidos = nomes.splice(-2, 1);
// console.log(nomes, removidos);