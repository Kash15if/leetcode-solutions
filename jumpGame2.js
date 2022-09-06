/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let n = nums.length;

  let count = 0;

  let l = 0,
    r = 0;

  while (r < n - 1) {
    let maxDist = 0;

    while (l < r + 1) {
      maxDist = Math.max(maxDist, l + nums[l]);
      l++;
    }

    l = r + 1;
    r = maxDist;
    count++;
  }

  return count;
};
