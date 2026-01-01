// map filter join reduce find findIndex

let user = [
  { name: "utkarsh", age: 29, price: 200 },
  { name: "mama", age: 40, price: 2400 },
  { name: "suvarna", age: 54, price: 2100 },
  { name: "rutuj", age: 27, price: 600 },
];

// map
let mapResult = user.map((user) => user.name.toUpperCase());
console.log(mapResult);

// filter
let filterResult = user.filter((user) => user.age > 30);
console.log(filterResult);

// map filter
let filterMapResult = user
  .filter((user) => user.age > 30)
  .map((user) => user.name.toUpperCase());

console.log(filterMapResult);

// join (convert into string)
let joinResult = filterMapResult.join(", ");
console.log(joinResult);

// split (convert string to array)
let splitResult = joinResult.split(", ");
console.log(splitResult);

// find and findIndex
let findResult = user.find((user) => user.age > 50);
console.log(findResult);

let findIndexResult = user.findIndex((user) => user.age > 50);
console.log(findIndexResult);

// reduce
let reduceResult = user.reduce((sum, user) => sum + user.price, 0);
console.log(reduceResult);

let reduceResult2 = user.reduce(
  (multi, user) => (multi * user.price)/1000,
  user[0].price
);
console.log(reduceResult2);

let reduceRivision = user.reduce((subtract, user) => user.price - subtract, 0);
console.log(reduceRivision);
