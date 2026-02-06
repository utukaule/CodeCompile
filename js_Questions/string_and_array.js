let arr = [1, "2", "hello", 3, "5"];

let str = arr.filter((el) => typeof el == "string");
let num = arr.filter((el) => typeof el == "number");

console.log(str);
console.log(num);
