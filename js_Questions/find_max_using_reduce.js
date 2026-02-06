const arr = [10, 5, 25, 8, 30];

const result = arr.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
}, arr[0]);

console.log(result)