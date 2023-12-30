/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(-1);
    let n = coins.length;
    let ans = rec(coins, amount, n, dp);
    return (ans == Number.MAX_VALUE) ? -1 : ans;
    // return tabular(coins , amount , n , dp)
};


function rec(coins, amount, n, dp) {

    if (amount <= 0)
        return 0;

    if (dp[amount] != -1)
        return dp[amount];

    let min = Number.MAX_VALUE;
    for (let i = 0; i < n; i++) {
        if (amount >= coins[i]) {
            let inc = rec(coins, amount - coins[i], n, dp);

            if (inc != Number.MAX_VALUE && inc < min - 1)
                min = 1 + inc;
        }
    }
    dp[amount] = min;
    return dp[amount];
}
