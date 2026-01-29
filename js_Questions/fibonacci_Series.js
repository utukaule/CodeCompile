// let num = 4;
// let start = 1;

// for (let i = 0; i < 4; i++) {
//   start += i - 1;
// }
// console.log(start);

let num = 4;
// 0 1 1 2 3 5 8
let start = 1;

for (let i = 0; i < num; i++) {
  start = start + i - 1;
  // console.log(start);
}

console.log(start);
