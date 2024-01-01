/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    let values = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let out = []

    backtrack(digits, values, out, "", 0, digits.length);
    return out;
};



function backtrack(digits, values, out, currSt, index, size) {

    if (index >= size) {
        if (currSt)
            res.push(currSt);
        return;
    }

    let str = val[parseInt(digits[index])];
    for (let j = 0; j < str.length; j++) {
        backtrack(digits, values, out, currSt + str[j], index + 1, size);
    }

    return;
}