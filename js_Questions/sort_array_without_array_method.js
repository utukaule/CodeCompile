const nums = [5, 2, 4, 1, 3];

let result = [];

for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > nums[j + 1]) {
      let temp = nums[j];
      nums[j] = nums[j + 1];
      nums[j + 1] = temp;
    }
  }
}

console.log(nums);
