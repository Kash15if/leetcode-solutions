/**
 * @param {number[]} nums
 * @return {number}
 */


var longestNiceSubarray = function (nums) {

    let max = 1, j = 0;

    for (let i = 1; i < nums.length; i++) {

        let k = j;
        while (k < i && !(nums[i] & nums[k])) k++;

        if (k === i) {
            max = Math.max(max, i - j + 1);
        }
        else {
            while (k < i && (nums[i] & nums[k]) !== 0)
                k++;
            j = k;
        }

    }
    return max;
};