let digit = 123;
let result = 0;

while (digit > 0) {
  result += digit % 10;
  digit = Math.floor(digit / 10);
}

console.log(result)