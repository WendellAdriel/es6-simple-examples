// First Example
const cardAce = { name: 'Ace of Spades' };
const cardKing = { name: 'King of Clubs' };

const deck = new Map();
deck.set('as', cardAce);
deck.set('kc', cardKing);

console.log(deck);
console.log(deck.get('as'));

deck.delete('as');
console.log(deck.size);

deck.set('as', cardAce);
console.log(deck);

deck.clear();
console.log(deck);

// Second Example
console.log(deck.keys());
for (let key of deck.keys()) {
  console.log(key);
}

console.log(deck.values());
for (let value of deck.values()) {
  console.log(value);
}

console.log(deck.entries());
for (let entry of deck) {
  console.log(entry);
}
