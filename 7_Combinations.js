/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let out = [];

  combination(1, k, [], out, n);

  return out;
};

function combination(x, k, arr, out, n) {
  if (k <= 0) {
    out.push(arr);
    return;
  }

  for (let i = x; i <= n - k + 1; i++) {
    arr.push(i);
    combination(i + 1, k - 1, [...arr], out, n);
    arr.pop();
  }

  return;
}
