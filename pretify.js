/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let n = nums.length;
  return getMinJump(nums, 0, 0, n);
};

var getMinJump = function (nums, i, count, n) {
  // console.log(i, count)
  if (i >= n - 1) {
    return count;
  } else {
    let nextCt = 100000;

    for (let j = i; j < n - nums[i]; j++) {
      let thisVal = getMinJump(nums, j, count + 1, n);

      if (nextCt > thisVal) {
        nextCt = thisVal;
      }
      console.log(thisVal);
    }

    if (nextCt !== 100000) count += nextCt;
  }

  return count;
};
