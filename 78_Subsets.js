/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  //     backtracking
  let n = nums.length;
  let out = [];
  getArray(nums, 0, [], out);

  return out;
};

var getArray = function (nums, i, arr, out) {
  if (i >= nums.length) {
    out.push(arr);
    return;
  }

  getArray(nums, i + 1, [...arr, nums[i]], out);
  getArray(nums, i + 1, arr, out);
  return;
};
