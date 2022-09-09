/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  nums.sort();
  let n = nums.length;
  let res = [];

  for (let i = 0; i < n; i++) {
    if (i != parseInt(nums[i], 2)) return dec2bin(i, nums[i].length);
  }

  return dec2bin(n, nums[0].length);
};

function dec2bin(dec, l) {
  let out = "";

  let bin = (dec >>> 0).toString(2);
  while (l - bin.length >= 1) {
    out += "0";
    l--;
  }

  return out + bin;
}
