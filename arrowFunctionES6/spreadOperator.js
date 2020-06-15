const Person = {
  name: "John Doe",
  age: 32,
  gender: "Male",
};

const Career = {
  title: "Developer",
  company: "ABC Software",
};

const update = {
  name: "saurav karki",
};

const personWithCarerr = {
  name: Person.name,
  ...update,
  ...Career,
};

console.log(personWithCarerr);

const numbers = [1, 2, 3, 4, 5];

const newNumbers = [...numbers, 6];

console.log(newNumbers);
