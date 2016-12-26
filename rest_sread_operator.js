// First Example => Rest Operator: get all arguments and put them into an array
const addNumbers = (...numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};

console.log(addNumbers(1,2,3,4,5,6,7));

// Second Example => Spread Operator: get all elements of an array out of it individually
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const allColors = ['blue', ...defaultColors, ...userFavoriteColors];
console.log(allColors);

// Third Example => Using Rest and Spread Operators
const validateShoppingList = (...items) => {
  if (items.indexOf('milk') < 0) return ['milk', ...items];
  return items;
};

console.log(validateShoppingList('oranges', 'bread', 'eggs'));

// Fourth Example
const MathLibraty = {
  calculateProduct (...values) {
    console.log('Please use the multiply method instead');
    return this.multiply(...values);
  },
  multiply (a, b) {
    return a * b;
  }
};

console.log(MathLibraty.calculateProduct(3, 2));
