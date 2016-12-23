// First Example
const users = [
  { name: 'Jill' },
  { name: 'John' },
  { name: 'Peter' }
];

let wantedUser = users.find(user => user.name === 'John');
console.log(wantedUser);

// Second Example
class Car {
  constructor (model) {
    this.model = model;
  }
}

const cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

let wantedCar = cars.find(car => car.model === 'Focus');
console.log(wantedCar);

// Third Example => findWhere Function
const findWhere = (array, criteria) => {
  const property = Object.keys(criteria)[0];
  return array.find(element => element[property] === criteria[property]);
};

const ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

console.log(findWhere(ladders, { height: 25 }));
