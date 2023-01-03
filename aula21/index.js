/*
Operadores de comparação / seria uma pergunta retorna, retorna boolean 
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade ( valor ) não utilizar
=== igualdade estrita - valor e tipo
!= diferente estrito não utilizar
!== diferente estrito (valor e tipo)
*/

/*
const comp = 10 > 5;
console.log(comp);
//console.log(10>5); 
*/

/*
const comp = 10 >=11;
console.log(comp);
*/

/*
const comp = 15 < 11;
//const comp = 10 <= 11;
console.log(comp);
*/

/*
 const num1 = 10; // number
 const num2 = '10'; //string
 const comp = num1 === num2; // === vai checar o valor e tipo / == só vai checar o valor vai dá true
 console.log(comp);
*/

 const num1 = 10; // number
 const num2 = 10; 
 const comp = num1 !== num2; 
 console.log(comp);

/*
function parimp(n) {
    if(n%2==0) {
        console.log('par');
    }else {
        console.log('impar');
    }
}
let ret =parimp(15);
*/

let v = function(x) { 
    return x*2
}

console.log(v(5));
