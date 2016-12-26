// First Example
const set = new Set([1, 1, 1]);
set.add(3);
set.add(3);

for (element of set) {
  console.log(element);
}

// Second Example
console.log(set);
set.delete(1);
console.log(set);

set.add(1);
console.log(set);

set.clear();
console.log(set);

console.log(set.has(1));
