// First Example
function* shopping () {
  const stuffFromStore = yield 'cash';
  const cleanClothes = yield 'laundry';
  return [stuffFromStore, cleanClothes];
}

const gen = shopping();
console.log(gen.next());
console.log(gen.next('groceries'));
console.log(gen.next('clean clothes'));

// Second Example
function* colors () {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}
console.log(myColors);

// Third Example
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
};

function* TeamIterator (team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;

  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator;
}

function* TestingTeamIterator (team) {
  yield team.lead;
  yield team.tester;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}
console.log(names);
