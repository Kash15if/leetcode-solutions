/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

    let dpMemo = new Array(m).fill(-1).map(() => new Array(n).fill(-1));

    let dpTab = new Array(m).fill(0).map(() => new Array(n).fill(0));


    return tabular(m, n, 0, 0, dpTab);
    // return memoization(m, n, 0, 0, dpMemo);
    // return recurse(m, n, 0, 0);
};



function memoization(m, n, i, j, dp) {

    if (i == m - 1 && j == n - 1) {
        return 1;
    }

    if (i >= m || j >= n) {
        return 0;
    }

    if (dp[i][j] == -1)
        dp[i][j] = memoization(m, n, i + 1, j, dp) + memoization(m, n, i, j + 1, dp);

    return dp[i][j];
}




function recurse(m, n, i, j) {
    if (i == m - 1 && j == n - 1) {
        return 1;
    }
    if (i >= m || j >= n) {
        return 0;
    }
    return recurse(m, n, i + 1, j) + recurse(m, n, i, j + 1);
}

function tabular(m, n, i, j, dp) {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (i == 0 || j == 0)
                dp[i][j] = 1;
            else
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1];
}