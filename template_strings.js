// First Example
const getMessage = () => {
  const year = new Date().getFullYear();
  return `The year is ${year}`;
}
console.log(getMessage());

// Second Example
const getGreetingMessage = (name, yearOfBirth) => {
  return `Hello, my name is ${name}. I'm ${new Date().getFullYear() - yearOfBirth} years old!`;
}
console.log(getGreetingMessage('Wendell Adriel', 1992));
