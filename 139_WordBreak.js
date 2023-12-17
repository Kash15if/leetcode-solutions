/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {

    let n = wordDict.length;
    let sLen = s.length;

    let dp = Array.from({ length: sLen + 1 }, () => false);
    dp[sLen] = true;

    for (let i = sLen - 1; i >= 0; i--) {

        for (let j = 0; j < n; j++) {

            let curWord = wordDict[j]
            let curLen = curWord.length;
            let sWord = s.substring(i, i + curLen);
            let sWLen = sWord.length;

            if (i + curLen <= sLen && sWLen === curLen && sWord == curWord) {
                dp[i] = dp[i + curLen] || dp[i];
            }
        }
    }
    return dp[0];
};
