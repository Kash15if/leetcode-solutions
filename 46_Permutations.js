// Using boolean array and backtracking
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let out = [],
    n = nums.length;
  let selected = [];
  nums.forEach((item, index) => {
    selected[index] = 0;
  });

  getPermutation(nums, selected, [], out, n);

  return out;
};

function getPermutation(nums, selected, arr, out, n) {
  if (arr.length === n) {
    out.push(arr);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (selected[i] === 0) {
      selected[i] = 1;
      arr.push(nums[i]);
      getPermutation(nums, [...selected], [...arr], out, n);
      arr.pop();
      selected[i] = 0;
    }
  }

  return;
}
