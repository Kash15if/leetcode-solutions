var nextPermutation = function (nums) {
  let len = nums.length;

  if (len < 2) {
    return nums;
  }
  let cur = len - 2;
  while (cur >= 0 && nums[cur] >= nums[cur + 1]) {
    cur--;
  }
  let lastMin = len - 1;
  if (cur >= 0) {
    while (lastMin >= 0 && nums[lastMin] <= nums[cur]) {
      lastMin--;
    }
    swap(nums, cur, lastMin);
  }
  reverse(nums, cur + 1, len - 1);
  return nums;
};

function reverse(nums, l, r) {
  while (l < r) {
    swap(nums, l, r);
    l++;
    r--;
  }
}

function swap(nums, x, y) {
  let k = nums[x];
  nums[x] = nums[y];
  nums[y] = k;
}

//-----------------------------------   logic    --------------------------------------
//find the first maxima from behind
//where the value gets decreased. i.e a[i] < a[i+1]. Also it also indicates that the last value is minimum and until now the value is gradually increasing
//when we found its not strictly increasing that means this value is less and the minimum is the last value and and the maximum is the next element ie. i+1
//find the value which is greater than the current coming from right to left
//swap it with the current element and sort the next. i.e. current+1 to length-1
//Also we already know that the value from current+1 to last is in descending order and we need in ascending order to get minimum. So just reverse current+1 to the last

//---------------------------------------------------------------------
//Explained code

// var nextPermutation = function (nums) {
//   let len = nums.length;

//   if (len < 2) {
//     return nums;
//   }

//   let cur = len - 2;

//   while (cur >= 0) {
//     if (nums[cur] < nums[cur + 1]) {
//       break;
//     }

//     cur--;
//   }

//   let lastMin = len - 1;

//   if (cur >= 0)
//     while (lastMin >= 0) {
//       if (nums[lastMin] > nums[cur]) {
//         swap(nums, cur, lastMin);
//         reverse(nums, cur + 1, len - 1);
//         return nums;
//       }

//       lastMin--;
//     }

//   return reverse(nums, 0, len - 1);
// };

// function reverse(nums, l, r) {
//   while (l < r) {
//     swap(nums, l, r);
//     l++;
//     r--;
//   }
// }

// function swap(nums, x, y) {
//   let k = nums[x];
//   nums[x] = nums[y];
//   nums[y] = k;
// }
