/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

    let res = [];
    let dp = new Array(n + 1).fill("").map(row => new Array(n + 1).fill(""));
    rec(n, n, res, "", dp)
    return res;
};



function rec(op, cl, res, cur) {


    if (cl < op || (cl <= 0 && op > 0))
        return;

    if (op <= 0) {
        while (cl) {
            cur += ')';
            cl--;
        }
        res.push(cur);
        return;
    }


    rec(op, cl - 1, res, cur + ')');
    rec(op - 1, cl, res, cur + '(');
    return;

}