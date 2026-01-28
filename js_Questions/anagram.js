let str1 = "silent";
let str2 = "listen";

function anagram(a, b) {
  if (a.length != b.length) {
    return 0;
  }
  let count = {};

  for (let i = 0; i < a.length; i++) {
    let ch = a[i];

    if (count[ch]) {
      count[ch] = count[ch] + 1;
    } else {
      count[ch] = 1;
    }
  }

    console.log(count);

  for (let j = 0; j < b.length; j++) {
    let ch = b[j];

    if (!count[ch]) {
      return 0;
    }
    count[ch] = count[ch] - 1;
  }
  console.log(count)
  return 1;

}

console.log(anagram(str1, str2));
