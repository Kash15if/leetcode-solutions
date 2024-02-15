/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

    let out = brutForce(s, numRows);
    return out;

};

function brutForce(s, numRows) {

    if (numRows == 1)
        return s;

    let arr = [];

    let i = 0;

    while (i < s.length) {


        let p = s.substring(i, i + numRows);
        arr.push(p);
        i += numRows

        let t = numRows - 2;
        while (t > 0 && i < s.length) {

            let x = [];
            for (let j = 0; j < numRows; j++)
                x.push("#");

            x[t--] = s[i];
            arr.push(x);
            i++;
        }

    }



    let res = "";



    for (let b = 0; b < numRows; b++) {
        for (let a = 0; a < arr.length; a++) {
            if (arr[a][b] && arr[a][b] !== "#")
                res += arr[a][b];
        }
    }
    return res;

}