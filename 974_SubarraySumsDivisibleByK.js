/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let n = nums.length,
    count = 0,
    sum = 0;
  let obj = {
    0: 1,
  };

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    let rem = sum % k;

    // Since the property of remainder is 0 <= r <= divisor
    // therefore remainder for negative numbers, if the remainder is less than 0 then K should be added to it
    // ex-> -36 Dividend , 7 divisor then quotient will be -5 and as per formulae
    // -> -36 = (7*-6) + r  => r = 6
    if (rem < 0) rem += k;

    if (obj[rem]) {
      count += obj[rem];
      obj[rem] += 1;
    } else {
      obj[rem] = 1;
    }
  }

  return count;
};
