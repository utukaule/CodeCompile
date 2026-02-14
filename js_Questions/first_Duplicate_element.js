let str = "swiss";
let obj = {};
let reslut = "";
for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  if (obj[ch]) {
    obj[ch] = obj[ch] + 1;
  } else {
    obj[ch] = 1;
  }
}

console.log(obj);

for (x in obj) {
  if (obj[x] > 1) {
    result = x;
    break;
  }
}

console.log(result);
