/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let obj = {};

  nums.forEach((item) => {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
  });

  let res = [];
  Object.entries(obj).forEach(([key, val]) => {
    if (val === 2) {
      res.push(key);
    }
  });

  return res;
};

// -------------------------------Using Array-----------------------------------------------
