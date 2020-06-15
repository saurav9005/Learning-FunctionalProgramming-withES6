const x = 5;

const numbers = [1, 2, 3, 4, 5];

numbers[0] = 100;

numbers.reverse();

const person = {
  name: "John Doe",
  age: 34,
};

person.name = "Bob";

console.log(person);

console.log(`My name is ${person.name}`);

console.log(numbers);

console.log("My name is " + person.name);
