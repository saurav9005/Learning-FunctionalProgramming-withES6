const numbers = [1, 2, 3, 4, 5];

// var evenNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[1] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   } else {
//     return null;
//   }
// }

// simple filter fn
const even = (x) => x % 2 === 0;

const evenNumbers = numbers.filter(even);

console.log(evenNumbers);
