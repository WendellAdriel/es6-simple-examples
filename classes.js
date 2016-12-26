// First Example
class Car {
  constructor ({model}) {
    this.model = model;
  }

  drive () {
    console.log('vroom');
  }
}

const car = new Car({ model: 'Focus' });
console.log(car);
car.drive();

// Second Example
class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }

  honk () {
    console.log('beep');
  }
}

const toyota = new Toyota({ color: 'red', model: 'Corolla' });
console.log(toyota);
toyota.honk();

// Third Example => Static methods
class Helper {
  static logTwice (message) {
    console.log(message);
    console.log(message);
  }
}

Helper.logTwice('Testing');

// Fourth Example => Getters and Setters
class Person {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  set name (value) {
    this._name = value;
  }
}

const person = new Person('Wendell');
console.log(person.name);
person.name = 'Testing';
console.log(person.name);
