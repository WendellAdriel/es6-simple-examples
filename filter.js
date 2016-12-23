// First Example
const products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];

let filteredProducts = products.filter(product => product.type === 'fruit');
console.log(filteredProducts);

// Second Example
let filteredList = products.filter(product => {
  return (product.type === 'vegetable'
    && product.quantity > 0
    && product.price < 10);
});

console.log(filteredList);

// Third Example
const post = { id: 4, title: 'Test Post' };
const comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' }
];

const commentsForPost = (post, comments) => {
  return comments.filter(comment => comment.postId === post.id);
}

console.log(commentsForPost(post, comments));

// Fourth Example => Reject Function
const reject = (array, iteratorFunction) => {
  return array.filter(element => !iteratorFunction(element));
};

const numbers = [10, 20, 30];

const lessThanFifteen = reject(numbers, number => number > 15);
console.log(lessThanFifteen);
