/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let out = [],
    n = candidates.length;

  candidates.sort((a, b) => a - b);
  findCombination(0, [], target, out, candidates, n);

  return out;
};

function findCombination(i, arr, target, out, candidates, n) {
  if (target == 0) {
    out.push(arr);
    return;
  }

  if (target < 0 || i >= n) {
    return;
  }

  for (let j = i; j < n; j++) {
    let tp = candidates[j];

    if (j > i && candidates[j - 1] === tp) continue;

    arr.push(tp);
    findCombination(
      j + 1,
      [...arr],
      target - candidates[j],
      out,
      candidates,
      n
    );
    arr.pop();
  }
}

//using while bottom of for loop to get atleast the first element, if using continue then atleast 1 element should be taken thatswhy j > i

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let out = [],
    n = candidates.length;

  candidates.sort((a, b) => a - b);
  // console.log(candidates)
  findCombination(0, [], target, out, candidates, n);

  return out;
};

function findCombination(i, arr, target, out, candidates, n) {
  if (target == 0) {
    out.push(arr);
    return;
  }

  if (target < 0 || i >= n) {
    return;
  }

  for (let j = i; j < n; j++) {
    let tp = candidates[j];

    arr.push(tp);
    findCombination(
      j + 1,
      [...arr],
      target - candidates[j],
      out,
      candidates,
      n
    );
    arr.pop();

    while (j < n - 1 && candidates[j + 1] === tp) j++;
  }
}
