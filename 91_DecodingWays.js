/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {

    let n = s.length;
    let dp = new Array(n + 1).fill(-1);
    // return memoize(s, n, 0, dp);
    return tabular(s, n);
};




function memoize(s, n, i, dp) {

    if (i >= n)
        return 1;

    if (s[i] == '0')
        return 0;

    if (dp[i] > -1) {
        return dp[i];
    }

    if (i < n - 1 && ((parseInt(s[i]) == 1) || ((s[i]) == 2 && parseInt(s[i + 1]) <= 6))) {
        dp[i] = memoize(s, n, i + 1, dp) + memoize(s, n, i + 2, dp);
    }
    else {
        dp[i] = memoize(s, n, i + 1, dp);
    }
    return dp[i];
}




function tabular(s, n) {

    let dp = new Array(n + 1).fill(0);
    dp[n] = 1;

    for (let i = n - 1; i >= 0; i--) {
        if (s[i] != '0')
            if (i < n - 1 && ((parseInt(s[i]) == 1) || ((s[i]) == 2 && parseInt(s[i + 1]) <= 6))) {
                dp[i] = dp[i + 1] + dp[i + 2];
            }
            else {
                dp[i] = dp[i + 1];
            }
    }
    return dp[0];
}