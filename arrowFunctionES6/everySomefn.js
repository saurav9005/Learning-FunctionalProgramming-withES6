const employee = [
  {
    name: "john Doe",
    salary: "100000",
  },
  {
    name: "saurav karki",
    salary: 2000000,
  },
];

const isMillion = (employee) => employee.salary > 1000000;

const iAmMillionaire = employee.some(isMillion);

console.log(iAmMillionaire);

const person = ["hello", "Namesty", "Parnam", "Nihow", ""];

const isEmpty = (string) => !!string;

const Iam = person.every(isEmpty);

console.log(Iam);
