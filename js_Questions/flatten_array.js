let arr = [1, [2, [3]]];
// [1, [2, [3]]]

// function flatternArray(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flatternArray(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log(flatternArray(arr));

function flatternArray(arr) {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatternArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flatternArray(arr));
