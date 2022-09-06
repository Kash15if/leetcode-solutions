/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let l = k - 1,
    r = cardPoints.length - 1;

  let max = 0,
    lSum = 0,
    rSum = 0;

  for (let i = 0; i < k; i++) {
    lSum += cardPoints[i];
  }
  max = lSum;

  while (l >= 0 && l <= r) {
    lSum = lSum - cardPoints[l];
    rSum += cardPoints[r];
    max = Math.max(lSum + rSum, max);
    r--;
    l--;
  }

  return max;
};
