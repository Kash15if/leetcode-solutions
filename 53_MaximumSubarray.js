// Using Kadens algo

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -100001,
    n = nums.length;
  let i = 0,
    j = 0,
    sum = 0;

  while (j < n) {
    sum += nums[j];

    max = Math.max(sum, max);

    //wherever the sum becomes negative then the subarray is of no use , i.e kadens algo
    if (sum < 0) {
      sum = 0;
    }

    j++;
  }

  return max;
};

// ----------------------------------------------------------------------------------------------------------

// using dp
