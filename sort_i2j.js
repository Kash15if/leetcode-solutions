// USING INSERTION SORT

const nums = [1, 3, 2, 5, 4];

let start = 1;
let k = start + 1;
let end = nums.length - 1;

while (start++ < end) {
  let j = start - 1;
  let key = nums[start];

  while (j >= k && nums[j] > key) {
    nums[j + 1] = nums[j];
    j--;
  }

  nums[j + 1] = key;
}

console.log(nums);
