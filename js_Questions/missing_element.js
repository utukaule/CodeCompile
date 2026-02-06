arr = [1, 2, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] !== i + 1) {
    console.log(i + 1);
    break;
  }
}
