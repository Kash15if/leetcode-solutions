/**
 * @param {number[]} nums
 * @return {number}
 */



var rob = function (nums) {


    // return rec(nums , nums.length)
    return twoPointer(nums, nums.length)
};

function rec(nums, n) {

    let dp = new Array(nums.length + 1).fill(-1);
    dp[0] = 0;
    dp[1] = nums[0];

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
    }

    return dp[n];
}

function twoPointer(nums, n) {

    let max2 = 0, max1 = nums[0];
    for (let i = 1; i < n; i++) {
        let x = max1
        max1 = Math.max(max2 + nums[i], max1)
        max2 = x;
    }
    return max1;
}