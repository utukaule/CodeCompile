let arr = [1,2,2,3,4,4]

let result = arr.filter((item)=> arr.indexOf(item) == arr.lastIndexOf(item) )
console.log(result)