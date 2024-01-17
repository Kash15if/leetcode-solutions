/**
 * @param {number[]} nums
 * @return {number}
 */




var maxProduct = function (nums) {

    let n = nums.length, max = nums[0], left = 1, right = 1, i = 0;

    while (i < n) {

        left = left == 0 ? nums[i] : nums[i] * left;
        right = right == 0 ? nums[n - 1 - i] : nums[n - 1 - i] * right;

        max = Math.max(max, Math.max(left, right));
        i++;
    }

    return max;
};