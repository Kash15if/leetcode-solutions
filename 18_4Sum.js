// foursum using the concept of 2sum and 3sum just increased a for loop

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let n = nums.length;
  nums.sort((a, b) => a - b);

  let out = [];
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let l = j + 1;
      let r = n - 1;

      while (l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r];

        if (sum === target) {
          let quad = [nums[i], nums[j], nums[l], nums[r]];
          out.push(quad);

          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        } else if (sum < target) {
          l++;
        } else {
          r--;
        }
      }
    }
  }

  return out;
};

// -----------------------------------------------------------------------------------
// -----------------------------------
//with ksum approach and using 2sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let out = [];
  nums.sort((a, b) => a - b);
  getKSum(nums, target, 4, out, [], -1);

  return out;
};

var getKSum = function (nums, target, k, out, arr, index) {
  if (k === 2) {
    twoSum(nums, target, out, arr, index + 1);
  } else {
    for (let i = index + 1; i <= nums.length - k; i++) {
      if (i > index + 1 && nums[i] === nums[i - 1]) continue;

      arr.push(nums[i]);
      getKSum(nums, target - nums[i], k - 1, out, arr, i);
      arr.pop();
    }
  }
};

var twoSum = function (nums, target, out, arr, index) {
  let r = nums.length - 1;
  let l = index;

  while (l < r) {
    let sum = nums[l] + nums[r];
    if (sum === target) {
      let tempArr = [...arr, nums[l], nums[r]];
      out.push(tempArr);
      while (l < r && nums[l] === nums[l + 1]) {
        l++;
      }
      while (l < r && nums[r] === nums[r - 1]) {
        r--;
      }
      l++;

      r--;
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
};
