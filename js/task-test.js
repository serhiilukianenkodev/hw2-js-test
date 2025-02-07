const arr = [25, 2, 3, 4];

const sum = arr.reduce((total, item) => {
  console.log(total);
  return total + item;
}, 0);

console.log('sum = ', sum);
