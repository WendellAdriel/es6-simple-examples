// First Example
const numbers = [10, 20, 30];

let sum = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(sum);

// Second Example
const primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

let colors = primaryColors.reduce((previous, primaryColor) => {
  previous.push(primaryColor.color);
  return previous;
}, []);

console.log(colors);

// Third Example
const balancedParens = string => {
  return !string.split('').reduce((previous, char) => {
    if (previous < 0) return previous;
    if (char === '(') return ++previous;
    if (char === ')') return --previous;
    return previous;
  }, 0);
};

console.log(balancedParens('(((('));

// Fourth Example => Unique Function
const unique = array => {
  return array.reduce((previous, element) => {
    if (previous.find(value => value === element)) return previous;
    previous.push(element);
    return previous;
  }, []);
};

console.log(unique([1, 1, 2, 3, 4, 4]));
