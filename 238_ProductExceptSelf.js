//using leftProd array and reightProd array
var productExceptSelf = function (nums) {
  let lprod = [nums.length];
  lprod[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    lprod[i] = lprod[i - 1] * nums[i];
  }

  let rprod = [nums.length];
  rprod[nums.length - 1] = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    rprod[i] = rprod[i + 1] * nums[i];
  }

  return nums.map((item, index) => {
    if (index === 0) {
      return rprod[index + 1];
    } else if (index === nums.length - 1) {
      return lprod[index - 1];
    } else {
      return lprod[index - 1] * rprod[index + 1];
    }
  });
};
