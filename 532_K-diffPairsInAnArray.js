/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  let obj = {},
    count = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
  }

  if (k === 0) {
    Object.keys(obj).forEach((item) => {
      if (obj[item] > 1) count += 1;
    });
  } else {
    Object.keys(obj).forEach((item) => {
      if (obj[item - k]) count += 1;
    });
  }

  return count;
};
