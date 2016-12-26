// First Example
const person = {
  age: 24,
  name: 'Wendell'
}

const handler = {
  get (target, name) {
    return name in target ? target[name] : 'Non existant';
  },

  set (target, property, value) {
    if (value.length >= 2) {
      Reflect.set(target, property, value);
    }
  }
};

const proxy1 = new Proxy(person, handler);
console.log(proxy1.age);
console.log(proxy1.birthday);

/**
 * Can follow this approach too:
 * const proxy1 = new Proxy({}, handler);
 * Reflect.setPrototypeOf(person, proxy1);
 */

console.log(proxy1);
proxy1.name = 'W';
console.log(proxy1);
proxy1.name = 'Wendell Adriel';
console.log(proxy1);

// Second Example
const log = message => {
  console.log(`Log entry created, message: ${message}`);
};

const newHandler = {
  apply (target, thisArg, argumentList) {
    if (argumentList.length == 1) {
      return Reflect.apply(target, thisArg, argumentList);
    }
  }
};

const newProxy = new Proxy(log, newHandler);
log('Hello');
newProxy('Hi');
newProxy('Testing', 10);

// Third Example
const car = {
  model: 'Corolla'
};

const otherHandler = {
  get (target, property) {
    return Reflect.get(target, property);
  }
};

const {proxy, revoke} = Proxy.revocable(car, otherHandler);
console.log(proxy.model);
revoke();
console.log(proxy.model);
