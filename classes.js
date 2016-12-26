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
