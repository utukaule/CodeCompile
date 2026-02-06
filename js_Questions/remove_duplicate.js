let arr = [1, 2, 2, 3, 4, 4];

let obj = {};
let result = [];
for (let i = 0; i < arr.length; i++) {
  let ch = arr[i];
  if (obj[ch]) {
    obj[ch] = obj[ch] + 1;
  } else {
    obj[ch] = 1;
  }
}
console.log(obj);

for (x in obj) {
  if (obj[x] == 1) {
    result.push(x);
  }
}
console.log(result);
