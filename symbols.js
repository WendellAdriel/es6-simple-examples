// First Example
const symbol = Symbol('debug');
const anotherSymbol = Symbol('debug');

console.log(symbol === anotherSymbol);

const obj = {
  name: 'max',
  [symbol]: 22
}

console.log(obj);
console.log(obj[symbol]);

// Second Example
const symbol1 = Symbol.for('age');
const symbol2 = Symbol.for('age');

console.log(symbol1 === symbol2);

// Third Example
class Person {}

Person.prototype[Symbol.toStringTag] = 'Person';

const person = new Person();
console.log(person);

// Fourth Example
let numbers = [1, 2, 3];
numbers[Symbol.toPrimitive] = () => 999;
console.log(numbers + 1);
