const arr = [{ name: "Ravi" }, { name: "Amit" }, { name: "Suresh" }];
let result = arr.sort((a, b) => a.name.localeCompare(b.name));
console.log(result);

const arr3 = ["banana", "apple", "mango"];

const result3 = arr3.sort((a, b) => a.localeCompare(b));
console.log(result3);
