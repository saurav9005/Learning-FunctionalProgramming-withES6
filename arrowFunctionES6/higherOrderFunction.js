const divide = (x, y) => x / y;

const secondArgument = (func) => (...args) => {
  if (args[1] === 0) {
    console.log("error divided by zero");
    return null;
  }
  return func(...args);
};

const divideSafe = secondArgument(divide);

console.log(divideSafe(2, 3));
console.log(divideSafe(2, 0));
