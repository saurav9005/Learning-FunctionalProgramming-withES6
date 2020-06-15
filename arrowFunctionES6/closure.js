const myClosure = () => {
  const myNumber = 28;
  return () => {
    console.log(`My favroite number is ${myNumber}`);
  };
};
const printer = myClosure();

printer();

// Implement the private variable

const Person = ({ name, age, job }) => {
  var _name = name;
  var _age = age;
  var _job = job;
  return {
    getName: () => _name,
    getJob: () => _job,

    setJob: (newJob) => (_job = newJob),
  };
};

const me = Person({
  name: "John Doe",
  age: 26,
  job: "developer",
});

console.log(me.getName());
console.log(me.getJob());
me.setJob("senior Developer");
console.log(me.getJob());
