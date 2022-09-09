/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  let res = [];

  for (let i = 0; i < n; i++) {
    if (nums[Math.abs(nums[i]) - 1] > 0) {
      nums[Math.abs(nums[i]) - 1] = -1 * nums[Math.abs(nums[i]) - 1];
    }
  }

  nums.forEach((item, index) => {
    if (item > 0) {
      res.push(index + 1);
    }
  });

  return res;
};
