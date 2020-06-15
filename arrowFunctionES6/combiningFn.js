const employees = [
  {
    name: "Thahacha karki",
    age: 27,
    jobTitle: "developer",
    salary: 50000,
  },
  {
    name: "kakura karki",
    age: 54,
    jobTitle: "developer",
    salary: 80000,
  },
  {
    name: "Hora karki",
    age: 50,
    jobTitle: "HR",
    salary: 60000,
  },
  {
    name: "Honi karki",
    age: 50,
    jobTitle: "CEO",
    salary: 950000,
  },
];

const isDeveloper = (employees) => employees.jobTitle === "developer";

const developers = employees.filter(isDeveloper);

//const filterDeveloper = developers => de

const developerSalaries = developers.map((developer) => developer.salary);

const totalDeveloperSalaries = developerSalaries.reduce((acc, x) => acc + x);

const averageDeveloperSalaries =
  totalDeveloperSalaries / developerSalaries.length;

// console.log(developers);

// console.log(developerSalaries);

// console.log(totalDeveloperSalaries);

console.log(averageDeveloperSalaries);

// Non Developer Filter Salary Average

const nonDevelopers = employees.filter(
  (employees) => employees.jobTitle !== "developer"
);

const NonDeveloperSalaries = nonDevelopers.map(
  (nonDeveloper) => nonDeveloper.salary
);

const totalNonDeveloperSalaries = NonDeveloperSalaries.reduce(
  (acc, x) => acc + x
);

const averageNonDeveloperSalaries =
  totalNonDeveloperSalaries / NonDeveloperSalaries.length;

// console.log(nonDevelopers);

// console.log(NonDeveloperSalaries);
// console.log(totalNonDeveloperSalaries);
console.log(averageNonDeveloperSalaries);

// challange

const map = (arr, func) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const result = func(arr[i]);
    newArray.push(result);
  }
  return newArray;
};

console.log(map([1, 2, 3], (x) => x * 2));

// Reduce Function - The Best

const mappy = (arr, func) => arr.reduce((acc, x) => [...acc, func(x)], []);

console.log(mappy([1, 2, 3], (x) => x * 2));
