const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');


const p1 = new Pessoa('João');
console.log(p1);

// const p1 = new Pessoa('Luiz');
// console.log(p1);








/*********************** Exemplo *************************/

// const { nome, sobrenome, falaNome } = require('./mod1');
// console.log(nome, sobrenome);
// console.log(falaNome());


// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(falaNome());


// const mod1 = require('./mod1');
// console.log(mod1.falaNome());


// const falaNome = require('./mod1').falaNome;
// console.log(falaNome());