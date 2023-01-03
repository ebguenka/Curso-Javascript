const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {
   
    console.log(numero);
    if (numero === 7){
        console.log('7 encontrado, saindo');
        break;
    }
    
}

// const numeros = [1,2,3,4,5,6,7,8,9];

// for (let numero of numeros) {
   
//     if (numero ===2 || numero ===5){
//         console.log('Pulei o número 2 e 5');
//         continue;
//     }
//     console.log(numero);