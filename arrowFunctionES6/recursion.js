const countDown = (x) => {
  if (x < 0) return;
  console.log(x);
  countDown(x - 1);
};

const countUp = (x, max) => {
  if (x > max) return;
  console.log(x);
  countUp(x + 1, max);
};

countDown(10);

countUp(0, 10);
