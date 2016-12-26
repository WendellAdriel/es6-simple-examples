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
