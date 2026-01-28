let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let highest = 0;
let secondHighest = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > highest) {
    secondHighest = highest
    highest = arr[i]
}
}
console.log(secondHighest)
