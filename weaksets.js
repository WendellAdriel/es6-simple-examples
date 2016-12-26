// Example
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const set = new WeakSet([obj1, obj2, obj2]);

console.log(set);
console.log(set.has(obj2));
console.log(set.has({ b: 2 }));

set.delete(obj2);
console.log(set);

set.add(obj2);
console.log(set);
