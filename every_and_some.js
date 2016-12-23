// First Example
const computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

// All the computers have more than 16 of ram?
console.log(computers.every(computer => computer.ram > 16));
// At least one of the computers has more than 16 of ram?
console.log(computers.some(computer => computer.ram > 16));

// Second Example
const names = ['Alexandria', 'Matthew', 'Joe'];

// All the names have 4 or more letters?
console.log(names.every(name => name.length >= 4));
// At least one of the names has 4 or more letters?
console.log(names.some(name => name.length >= 4));

// Third Example
class Field {
  constructor (value) {
    this.value = value;
  }

  validate () {
    return this.value.length > 0;
  }
}

const username = new Field('2cool');
const password = new Field('secret');
const fields = [username, password];

let formIsValid = fields.every(field => field.validate());
console.log(formIsValid);

if (formIsValid) {
  // Allow user to submit...
}
