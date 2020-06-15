const double = (x) => x * 2;
const subtractOne = (x) => x - 1;
const triple = (x) => x * 2;
const add5 = (x) => x + 5;

const myFunction = [double, subtractOne, triple, add5];

var number = 4;

myFunction.forEach((func) => (number = func(number)));

console.log(number);

// Passing function as Arguments

const myArgument = (fn) => fn(2);

myArgument(double);
myArgument(subtractOne);

console.log(myArgument(double));

// Returning Function
// new way
const createPrinter = () => () => console.log("hello");

// Old way to do above function

// const createPrinter = function () {
//   return function () {
//     console.log("hello");
//   };
// };

// example

// const double1 = x => x * 2;
// const triple1 = x => x * 3;
// const quadruple = x => x * 4;

const createMultipler = (y) => (x) => x * y;

const double1 = (x) => createMultipler(2);
const triple1 = (x) => createMultipler(3);
const quadruple = (x) => createMultipler(4);

const double2 = double1();

console.log(double2);
