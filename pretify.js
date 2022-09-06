// Using greedy approach

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let n = nums.length;

  let l = 0,
    r = 0;

  while (r < n - 1) {
    let maxDist = 0;

    while (l < r + 1) {
      maxDist = Math.max(maxDist, l + nums[l]);
      if (maxDist >= n - 1) {
        return true;
      }

      l++;
    }

    //check if it goes beyond the farthest border or not
    if (maxDist <= r) {
      return false;
    }

    //set left boundary next to right, since all the element betweeen the ranges are being covered
    l = r + 1;
    r = maxDist;
  }

  //check r went to the last index or not
  if (r >= n - 1) {
    return true;
  }
  return false;
};
