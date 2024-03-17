/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var longestOnes = function (nums, k) {

    let zeros = 0, slow = 0, n = nums.length, max = 0;

    for (let fast = 0; fast < n; fast++) {

        if (nums[fast] == 0) zeros++;

        if (zeros > k) {
            while (slow <= fast && nums[slow] != 0) slow++;
            //reached first zero, now go forward and reduce 1 from zero
            slow++
            zeros--;
        }
        //checking if zeros are less than k
        if (zeros <= k) max = Math.max(max, fast - slow + 1);
    }

    return max;

};