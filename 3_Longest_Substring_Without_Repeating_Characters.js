/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let set = new Set();
    let max = 0, i = 0, j = 0;

    while (j < s.length) {
        if (set.has(s[j])) {

            while (i < j && s[i] != s[j]) {
                set.delete(s[i++]);
            }
            set.delete(s[i++]);
        }

        set.add(s[j++])
        max = Math.max(max, j - i)
    }
    return max;
};





