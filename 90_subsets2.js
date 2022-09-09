/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let out = [];
  nums.sort((a, b) => a - b);

  getAllSubsets(nums, 0, [], out);

  return out;
};

var getAllSubsets = function (nums, i, arr, out) {
  if (i >= nums.length) {
    out.push(arr);
    return;
  }

  getAllSubsets(nums, i + 1, [...arr, nums[i]], out);
  while (i < nums.length - 1 && nums[i] === nums[i + 1]) i++;
  getAllSubsets(nums, i + 1, arr, out);
  return;
};
