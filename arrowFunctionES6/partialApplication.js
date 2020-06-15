const add = (x, y, z) => x + y + z;

const addPartial = (x) => (y, z) => add(x, y, z);

const addPatial2 = (x) => (y) => (z) => add(x, y, z);

const add5 = addPartial(5);

const sum = add5(5, 6, 7);

const sum1 = addPatial2(7)(8)(9);
console.log(sum);
console.log(sum1);
