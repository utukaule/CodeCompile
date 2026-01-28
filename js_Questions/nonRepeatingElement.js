let arr = [1, 1, 1, 1, 4, 1, 8];
let result = arr.filter(
  (element) => arr.indexOf(element) === arr.lastIndexOf(element),
);
console.log(result);

// non repeatin element
let arr1 = [1, 1, 11, 1, 1, 1, 8];
let resule2 = arr1.filter((item) => arr1.indexOf(item) === arr1.lastIndexOf(item));
console.log(resule2);
