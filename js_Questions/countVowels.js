let count = 0;
let vowel = "aeiou";
let str = "this is string";

// for(let i = 0 ; i < str.length ; i++){
//     if(vowel.includes(str[i])){
//         count++
//     }
// }

// console.log(count)

for (let i = 0; i < str.length; i++) {
  if (vowel.includes(str[i])) {
    count++;
  }
}

console.log(count);
