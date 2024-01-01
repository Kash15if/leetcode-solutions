/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {

    if (word1 == null || word1.length == 0) return word2.length;
    if (word2 == null || word2.length == 0) return word1.length;

    // // memoization method
    // let dp = new Array(word1.length).fill(-1).map(item => new Array(word2.length).fill(-1));
    // let w1len = word1.length, w2len = word2.length;
    // return memoize(word1, word2, 0, 0, w1len, w2len, dp);


    return tabular(word1, word2, word1.length, word2.length)
};




function tabular(word1, word2, w1len, w2len) {

    let dp = new Array(w1len + 1).fill(0).map(item => new Array(w2len + 1).fill(0));

    for (let j = 0; j < w2len; j++) {
        dp[w1len][j] = w2len - j;
    }

    for (let i = 0; i < w1len; i++) {
        dp[i][w2len] = w1len - i;
    }

    for (let m = w1len - 1; m >= 0; m--) {
        for (let n = w2len - 1; n >= 0; n--) {

            if (word1[m] == word2[n]) {
                dp[m][n] = dp[m + 1][n + 1];
            }
            else {
                let inc = dp[m][n + 1];
                let del = dp[m + 1][n];
                let rep = dp[m + 1][n + 1];
                dp[m][n] = Math.min(inc, Math.min(del, rep)) + 1;
            }
        }
    }
    return dp[0][0];
}





function memoize(word1, word2, m, n, w1len, w2len, dp) {

    if (m >= w1len) {
        return w2len - n;
    }

    if (n >= w2len) {
        return w1len - m
    }

    if (dp[m][n] != -1)
        return dp[m][n];

    if (word1[m] == word2[n]) {
        return memoize(word1, word2, m + 1, n + 1, w1len, w2len, dp);
    }
    else {

        let inc = memoize(word1, word2, m, n + 1, w1len, w2len, dp);
        let del = memoize(word1, word2, m + 1, n, w1len, w2len, dp);
        let rep = memoize(word1, word2, m + 1, n + 1, w1len, w2len, dp);

        dp[m][n] = Math.min(inc, Math.min(del, rep)) + 1
        return dp[m][n];
    }
}