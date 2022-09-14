/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n = Math.abs(n);
  }

  return n % 2 == 0 ? myPow(x * x, n / 2) : x * myPow(x * x, (n - 1) / 2);
};

// in O(n)
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let pow = 1,
    N = n;

  while (n != 0) {
    if ((n & 1) != 0) pow *= x;

    x *= x;
    n >>>= 1;
  }

  if (N < 0) {
    return 1 / pow;
  } else return pow;
};
