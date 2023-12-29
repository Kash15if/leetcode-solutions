/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {

    let m = text1.length, n = text2.length;
    let dp = new Array(m).fill(-1).map(row => new Array(n).fill(-1));

    // return memoize(text1, text2 , m , n , 0 , 0 ,dp)
    return tabular(text1, text2, m, n, 0, 0);
};



function tabular(text1, text2, m, n, i, j) {

    let dp = new Array(m + 1).fill(0).map(row => new Array(n + 1).fill(0));

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let max = Math.max(dp[i + 1][j], dp[i][j + 1]);

            if (text1[i] == text2[j])
                max = Math.max(max, dp[i + 1][j + 1] + 1)

            dp[i][j] = max;

        }
    }

    return dp[0][0]
}



function memoize(text1, text2, m, n, i, j, dp) {

    if (i >= m || j >= n) {
        return 0;
    }


    if (dp[i][j] != -1)
        return dp[i][j];

    let res = Math.max(memoize(text1, text2, m, n, i + 1, j, dp), memoize(text1, text2, m, n, i, j + 1, dp));

    if (text1[i] == text2[j]) {
        res = Math.max(memoize(text1, text2, m, n, i + 1, j + 1, dp) + 1, res);
    }

    dp[i][j] = res
    return dp[i][j];
}