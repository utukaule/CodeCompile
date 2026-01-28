let max = -Infinity;
let min = Infinity;

let arr = [1, 3, 5, 223, 42, 6, 7, 2];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log("max", max + " " + "min", min);