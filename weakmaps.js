// Example
const cardAce = { name: 'Ace of Spades' };
const cardKing = { name: 'King of Clubs' };

const key1 = { a: 1 };
const key2 = { b: 2 };

const deck = new WeakMap();
deck.set(key1, cardAce);
deck.set(key2, cardKing);

console.log(deck);
console.log(deck.get(key1));
