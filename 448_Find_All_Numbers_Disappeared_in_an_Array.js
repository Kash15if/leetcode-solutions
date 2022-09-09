// ------------------------------------------------ Optimised method in O(n)--------------------------------------------
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

// ---------------------------------------Conventional method---------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  let res = [];

  nums.sort((a, b) => a - b);

  if (nums[0] !== 1) {
    let x = nums[0] - 1;
    while (x > 0) {
      res.push(x);
      x--;
    }
  }

  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1] && nums[i] - 1 != nums[i - 1]) {
      let x = nums[i] - 1;
      while (x > nums[i - 1]) {
        res.push(x);
        x--;
      }
    }
  }

  if (nums[n - 1] !== n) {
    let x = n;
    while (x > nums[n - 1]) {
      res.push(x);
      x--;
    }
  }

  return res;
};
