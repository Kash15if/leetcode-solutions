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
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = 0,
    n = nums.length;
  let arr = new Array(n);
  let sum = 0;

  for (let j = 0; j < n; j++) {
    sum += nums[j];
    arr[j] = sum;
  }

  max = dp(arr, n);

  return max;
};

function dp(arr, n) {
  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      max = Math.max(max, arr[j] - arr[i]);
    }
  }

  return max;
}
