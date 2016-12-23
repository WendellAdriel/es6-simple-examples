// First Example
const numbers = [1, 2, 3];

let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

// Second Example
const cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'EXPENSIVE' }
];

let prices = cars.map(car => car.price);
console.log(prices);

// Third Example => Pluck Function
const pluck = (array, property) => {
  return array.map(element => element[property]);
};

const persons = [
  { name: 'John', lastname: 'Smith' },
  { name: 'Marie', lastname: 'Green' }
];

console.log(pluck(persons, 'lastname'));
