//Criando prototype meu mapa:

Array.prototype.myMap = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray;
}

// let teste = [1, 2, 3];
// let testeMyProto = teste.myMap(n => n*2)
// let testeProto = teste.map(n => n*2)
// console.log(testeMyProto);
// console.log(testeProto);

// Criando prototype meu filter:

Array.prototype.myFilter = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

// let teste = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let testeMyProto = teste.myFilter(n => n%2 === 0);
// let testeProto = teste.filter(n => n%2 === 0);
// console.log(testeMyProto);
// console.log(testeProto);

// Criando prototype meu reduce:

Array.prototype.myReduce = function (callback, initialValue) {

    let accumulator;
    let i;
    const hasInitialValue = arguments.length > 1;

    if (hasInitialValue) {
        accumulator = initialValue;
        i = 0;
    } else {
        accumulator = this[0];
        i = 1;
    }

    for (i; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }

    return accumulator;
}

// const teste = [1, 2, 3, 4, 5];
// const testeMyProto = teste.myReduce((n1, n2) => n1 + n2, 5);
// const testeProto = teste.reduce((n1, n2) => n1 + n2, 10);
// console.log(testeMyProto);
// console.log(testeProto);

// Criando prototype meu forEach:

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

// const testeProto = [1, 2, 3, 4, 5];
// const testeMyProto = [1, 2, 3, 4, 5];
// testeProto.forEach((n, i, array) => array[i] = n + 100);
// testeMyProto.myForEach((n, i, array) => array[i] = n + 1000);
// console.log(testeProto);
// console.log(testeMyProto);

// Criando prototype meu Find:

Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
}

// const teste = [
//     { nome: 'Enzo', idade: 20 },
//     { nome: 'Felipe', idade: 25 },
//     { nome: 'Cintia', idade: 25 }
//   ];
//   const testeMyProto = teste.myFind(pessoa => pessoa.nome === 'Felipe');
//   const testeProto = teste.find(pessoa => pessoa.nome === 'Cintia');
//   console.log(testeMyProto);
//   console.log(testeProto);

//Teste geral dos prototypes:
let teste = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('================TESTES================');
const testeMyMap = teste.myMap(n => n*2);
console.log(testeMyMap);
console.log('=======================================');
const testeMyFilter = teste.myFilter(n => n%2 != 0);
console.log(testeMyFilter);
console.log('=======================================');
const testeMyReduce = teste.myReduce((n1, n2) => n1 * n2);
console.log(testeMyReduce);
console.log('=======================================');
teste.myForEach(n => console.log(n));
console.log('=======================================');
const testeMyFind = teste.myFind(n => n === 7);
console.log(testeMyFind);