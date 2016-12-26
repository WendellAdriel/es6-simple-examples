// First Example
const expense = {
  type: 'Business',
  amount: '$45 USD'
};

const {type, amount} = expense;
console.log(type);
console.log(amount);

// Second Example
const savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};

const fileSummary = ({name, extension, size}) => `The file ${name}.${extension} is of size ${size}`;
console.log(fileSummary(savedFile));

// Third Example
const companies = ['Google', 'Facebook', 'Uber'];
const [firstCompany] = companies; // Same as: const firstCompany = companies[0]
console.log(firstCompany);
const [first, second] = companies;
console.log(first);
console.log(second);
const [company, ...companyList] = companies;
console.log(company);
console.log(companyList);

// Fourth Example
const companiesList = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];

const [{location}] = companiesList; // Same as: const location = companiesList[0].location
console.log(location);

// Fifth Example
const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

const {locations: [firstLocation]} = Google; // Same as: const firstLocation = Google.locations[0]
console.log(firstLocation);

// Sixth Example
const signup = ({username, email, password, dateOfBirth, city}) => {
  console.log(username);
  console.log(email);
  console.log(password);
  console.log(dateOfBirth);
  console.log(city);
};

const user = {
  username: 'myname',
  password: 'secret',
  email: 'myemail@example.com',
  dateOfBirth: '1/1/1990',
  city: 'New York'
};

signup(user);

// Seventh Example
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

const formated = points.map(([x, y]) => {
  return {x, y};
});
console.log(formated);
