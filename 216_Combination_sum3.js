/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let out = [];

  findComb3(1, k, n, [], out);

  return out;
};

function findComb3(start, k, sum, arr, out) {
  if (k === 0 && sum === 0) {
    out.push(arr);
    return;
  }

  for (let i = start; i <= sum && i <= 9; i++) {
    arr.push(i);
    findComb3(i + 1, k - 1, sum - i, [...arr], out);
    arr.pop();
  }

  return;
}
