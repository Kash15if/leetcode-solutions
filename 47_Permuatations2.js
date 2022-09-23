/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let out = [],
    n = nums.length;
  nums.sort((a, b) => a - b);

  findPermutation(nums, 0, out, n);

  return out;
};

function findPermutation(nums, pivot, out, n) {
  if (pivot >= n) {
    out.push(nums);
    return;
  }

  for (let i = pivot; i < n; i++) {
    if (i !== pivot && nums[i] === nums[pivot]) continue;

    swap(i, pivot, nums);
    findPermutation([...nums], pivot + 1, out, n);
  }
}

function swap(i, pivot, nums) {
  let temp = nums[pivot];
  nums[pivot] = nums[i];
  nums[i] = temp;
}
