const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers.slice(3, 8).reverse());
// console.log(numbers);
// console.log(numbers.slice());

// Sort function

const mixedNumbers = [3, 6, 8, 4, 7, 2, 1, 5, 9, 10];

const ascendingOrder = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const decendingOrder = (a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
};

const sortedNumbers = mixedNumbers.slice().sort(ascendingOrder);
const sortedNumbers1 = mixedNumbers.slice().sort(decendingOrder);
console.log(sortedNumbers);
console.log(sortedNumbers1);

// Reduce

const sum = mixedNumbers.reduce((acc, x) => {
  console.log(`acc is ${acc}`);
  console.log(`x is ${x}`);
  return acc + x;
}, 0);

console.log(sum);
