/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {

    let n = nums.length;
    let dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return dp.reduce(
        (accumulator, currentValue) => Math.max(accumulator, currentValue),
        0,
    );
};









// ---------------------------     Memoiation -------------------------------------------------

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var lengthOfLIS = function(nums) {
//     let dp = new Array(nums.length).fill(-1).map(()=> new Array(nums.length).fill(-1));
//     return recursion(nums, nums.length , 0 , -1 , dp);
     
// };



// function recursion(nums, n , i , j, dp){
    
//     if(i >= n)
//         return 0;
    
//     if(j > -1 && dp[i][j+1] !== -1){
//         return dp[i][j+1];
//     }
    
    
//     let max = 0;
//     if(j == -1 || nums[i] > nums[j]){
//        max = recursion(nums, n , i + 1 , i , dp) + 1
//        }
     
//     max = Math.max(max, recursion(nums, n , i + 1 , j, dp));
     
//     dp[i][j+1] = max;
//     return dp[i][j+1];
// }