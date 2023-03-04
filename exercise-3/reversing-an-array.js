// const reverseArray = (arr) => {
//   const reversedArray = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i]);
//   }

//   return reversedArray;
// };

const reverseArray = (arr) => {
  const copyArr = [...arr];
  return new Array(arr.length).fill(0).map(() => copyArr.pop());
};

// const reverseArrayInPlace = (arr) => {
//   const savedArr = [...arr];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     const idx = Math.abs(i - (arr.length - 1));
//     arr[i] = savedArr[idx];
//   }
// };

const reverseArrayInPlace = (arr) => {
  const middle = Math.floor(arr.length / 2);

  const lastIndex = arr.length - 1;

  for (let i = 0; i < middle; i++) {
    const temp = arr[i];
    arr[i] = arr[lastIndex - i];
    arr[lastIndex - i] = temp;
  }
};

// I believe that the reverseArray function will be more reuseble, because it will not change the actual array and we
// don't need to care about it.
// The reverseArrayInPlace runs faster because we don't need to allocate an extra data to create a copy from the array.
