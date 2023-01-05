// Factory function ( Função fábrica)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
           valor = valor.split(' ');
           this.nome = valor.shift(); 
           this.sobrenome = valor.join(' ');
           //console.log(valor);
            // console.log(valor);

        },


        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,

        //Getter

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Eduardo', 'Lopes', 1.7, 80);
const p2 = criaPessoa('Thais', 'Lisa', 1.5, 70);
const p3 = criaPessoa('Augusto', 'Teto', 1.6, 60);
console.log(p1.imc, p1.nome);
console.log(p2.imc);
console.log(p3.imc);


//p1.nomeCompleto = 'Eder Luis';
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.fala());








// function criaPessoa(nome, sobrenome, a, p) {
//     return {
//         nome,
//         sobrenome,
//         fala(assunto) {
//             return `${this.nome} está ${assunto}.`;
//         },
//         altura: a,
//         peso: p,
//         //Getter
//         get imc() {
//             const indice = this.peso / (this.altura ** 2);
//             return indice.toFixed(2);
//         }
//     };
// }
// const p1 = criaPessoa('Eduardo', 'Lopes', 1.7, 80);
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.imc);



// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         fala: function (assunto) {
//             return `${this.nome} está ${assunto}.`;
//         },
//         peso: 80
//     };
// }

// const p1 = criaPessoa('Eder', 'Olavo');
// const p2 = criaPessoa('Maria', 'Rita');
// console.log(p2.fala('falando sobre JS'));


// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         fala: function(assunto) {
//             return `${nome} está ${assunto}.`;
//         }
//     };
// }

// const p1 = criaPessoa('Eduardo', 'Bruno');
// console.log(p1.fala('falando sobre JS'));