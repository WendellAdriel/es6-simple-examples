// First Example
const promise = new Promise((resolve, reject) => {
  resolve();
});

promise
  .then(() => console.log('promise resolved ok'))
  .then(() => console.log('second function ran'))
  .catch(() => console.log('too bad...'));

// Second Example
const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(), 3000);
});

newPromise.then(() => console.log('Finished'));

// Third Example => Using Fetch
const url = 'https://pokeapi.co/api/v2/pokemon/150';

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
