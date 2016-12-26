// First Example
class Person {
  constructor (name) {
    this.name = name;
  }
}

function TopObj () {
  this.age = 24;
}

const person = Reflect.construct(Person, ['Wendell'], TopObj);
console.log(person);

// Second Example
class NewPerson {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  greet () {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const newPerson = Reflect.construct(NewPerson, ['Wendell', 24]);
console.log(newPerson);
Reflect.apply(newPerson.greet, newPerson, []);
Reflect.apply(newPerson.greet, { name: 'Peter' }, []);

// Third Example
class OtherPerson {
  constructor () {
    this.name = 'Wendell';
  }
}

OtherPerson.prototype.age = 24;
const proto = {
  age: 30,
  greet () {
    console.log('Hello!');
  }
};

const otherPerson = new OtherPerson();
console.log(Reflect.getPrototypeOf(otherPerson));

Reflect.setPrototypeOf(otherPerson, proto);
console.log(Reflect.getPrototypeOf(otherPerson));

Reflect.apply(otherPerson.greet, null, []);

// Fourth Example
class Car {
  constructor (model, color) {
    this.model = model;
    this.color = color;
  }
}

const car = new Car('Focus', 'Red');
console.log(Reflect.get(car, 'model'));

Reflect.set(car, 'model', 'Pajero');
console.log(car);

console.log(Reflect.has(car, 'model'));
console.log(Reflect.has(car, 'type'));

console.log(Reflect.ownKeys(car));

Reflect.defineProperty(car, 'price', {
  writable: true,
  value: 20000
});

console.log(car.price);
Reflect.deleteProperty(car, 'color');
console.log(car);

Reflect.preventExtensions(car);
console.log(Reflect.isExtensible(car));
