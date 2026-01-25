let arr = [1,1,1,1,1,1,8]
let result = arr.filter((element)=> arr.indexOf(element) === arr.lastIndexOf(element))
console.log(result)