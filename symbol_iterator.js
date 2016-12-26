// First Example
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}
console.log(names);

// Second Example
class Comment {
  constructor (content, children = []) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator] () {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('good comment'),
  new Comment('bad comment'),
  new Comment('meh')
];

const tree = new Comment('Great post!', children);
console.log(tree);

const values = [];
for (let node of tree) {
  values.push(node);
}

console.log(values);
