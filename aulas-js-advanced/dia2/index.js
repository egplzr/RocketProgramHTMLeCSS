// let obj = {name: 'Enzo'};
// console.log(obj);

// function Pessoa(nome) {
//     this.nome = nome;
// }

// Pessoa.prototype.falar = function() {
//     console.log(`Meu nome é ${this.nome}`);
// }

// const pessoa = new Pessoa('Enzo');
// console.log(pessoa);

// let proto = {
//     falar() {
//         console.log(`Meu nome é ${this.nome}`);
//     }
// };

// let pessoa = Object.create(proto);
// pessoa.nome = 'Enzo';
// pessoa.falar();

const frase = 'ola mundo teste letras iniciais maiusculas';

String.prototype.toCapitalize = function() {
    const parts = this.split(' ');
    return parts
    .map((part)=>{
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
    .join(' ');
}

console.log(frase.toCapitalize());