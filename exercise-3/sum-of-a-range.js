// const range = (start, end, step = 1) => {
//   const arr = [];
//   const size = Math.abs(start - end) + 1;

//   let currentValue = start;

//   for (let i = 1; i <= size; i++) {
//     arr.push(currentValue);
//     currentValue += step;
//   }

//   return arr;
// };

const range = (start, end, step = 1) => {
  const size = Math.abs(start - end) + 1;
  return new Array(size)
    .fill(start)
    .map((value, index) => value + index * step);
};

const sum = (numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

console.log(range(1, 10));

console.log(range(5, 2, -1));

console.log(sum(range(1, 10)));
