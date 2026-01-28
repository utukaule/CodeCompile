let str = "madam";

let modified = str.split("").reverse().join("");
if (str == modified) {
  console.log(true);
} else {
  console.log(false);
}
