/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let n = candidates.length;
  let out = [];

  getSumArray(candidates, 0, target, [], out);

  return out;
};

function getSumArray(candidates, i, target, arr, result) {
  if (target === 0) {
    result.push(arr);
    return;
  }

  if (i >= candidates.length || target < 0) {
    return;
  }

  let element = candidates[i];

  if (target - element >= 0) {
    getSumArray(candidates, i, target - element, [...arr, element], result);
  }

  getSumArray(candidates, i + 1, target, arr, result);
}
