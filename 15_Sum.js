/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    nums.sort((a, b) => a - b);
    let result = [], target = 0, n = nums.length;

    for (let i = 0; i < n; i++) {

        let temp = [];
        temp.push(nums[i]);
        twoSum(nums, target - nums[i], i + 1, nums.length, result, temp);

        while (i < n - 1 && nums[i] === nums[i + 1]) i++;

    }

    return result;


};



function twoSum(nums, target, index, n, result, currentArray) {

    let i = index, j = n - 1;

    while (i < j) {

        if (target - nums[i] == nums[j]) {

            let temp1 = [...currentArray];
            temp1.push(nums[i]);
            temp1.push(nums[j]);

            result.push(temp1);

            while (i < j && nums[i] === nums[i + 1]) i++;
            while (i < j && nums[j] === nums[j - 1]) j--;
            i++;
            j--;

        }
        else if (target - nums[i] < nums[j]) {
            j--;
        }
        else {
            i++;
        }
    }

    return result;
};
