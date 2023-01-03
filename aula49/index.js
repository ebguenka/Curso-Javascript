// As funções sao objetos de primeira classe First-class objects


//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

//function expression
const souUmDado = function() {
    console.log('sou um dado.');
};
souUmDado();


//declaração classica de função (Function hoisting)
function falaOi() {
    console.log('Oie');
}

falaOi();

//Dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando....');
    }
};
obj.falar();