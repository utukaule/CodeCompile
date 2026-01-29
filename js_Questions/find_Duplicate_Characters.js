// let str = "this is wrong";
// let charCount = {};
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   let ch = str[i];
//   if (charCount[ch]) {
//     charCount[ch] = charCount[ch] + 1;
//   } else {
//     charCount[ch] = 1;
//   }
// }

// console.log(charCount);

// for (x in charCount) {
//   console.log(x);

//   // shows the string but removed with duplicate items
//   // result = result + x

//   // shows the duplicate items in string
//   if (charCount[x] > 1) {
//     result = result + x;
//   }
// }
// console.log(result);

let str = "this is wrong";
let charCount = {};
let result = "";

for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  if (charCount[ch]) {
    charCount[ch] = charCount[ch] + 1;
  } else {
    charCount[ch] = 1;
  }
}

// console.log(charCount)

for (x in charCount) {
  if (charCount[x] > 1  ) {
    result = result + x;
  }
}

console.log(result);
