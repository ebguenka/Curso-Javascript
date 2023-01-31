const { reject } = require("lodash");

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
        reject(false);       
        return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + '- Passei na promise');
            
        }, tempo);
    });
}

const promises = [
    
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 500),
    esperaAi('promise 3', 5000),
   //esperaAi(1000, 1000),
    

];

Promise.race(promises)
   .then(function(valor) {
       console.log(valor);
       
   })
   .catch(function(erro) {
    console.log(erro);
   });