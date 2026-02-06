let arr = [
  ["name", "Utkarsh"],
  ["age", 24],
  ["city", "Pune"],
];

let result = arr.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});

console.log(result);

let result2 = arr.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
});
console.log(result2);

const arr2 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

// {
//   1: { id: 1, name: "A" },
//   2: { id: 2, name: "B" }
// }

let result3 = arr2.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
},{});
console.log(result3);
