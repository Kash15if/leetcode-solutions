/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

    // let visited = new Array(nums.length).fill(false);
    // return memoize(nums ,visited ,nums.length, 0 , 0) 

    return twoPointer(nums, nums.length)
};



function twoPointer(nums, n) {

    if (n === 1) {
        return nums[0]
    }

    let max2 = 0, max1 = nums[0];
    for (let i = 1; i < n - 1; i++) {
        let x = max1
        max1 = Math.max(max2 + nums[i], max1)
        max2 = x;
    }

    let max4 = 0, max3 = nums[1];
    for (let i = 2; i < n; i++) {
        let x = max3
        max3 = Math.max(max4 + nums[i], max3)
        max4 = x;
    }
    return Math.max(max1, max3);
}




function memoize(nums, visited, n, i, sum) {

    if (i >= n || i == n - 1 && visited[0])
        return sum;

    if ((i > 0 && visited[i - 1]) || (i < n - 1 && visited[i + 1])) {
        return memoize(nums, visited, n, i + 1, sum);
    }
    let newArr = [...visited]
    newArr[i] = true;
    return Math.max(memoize(nums, newArr, n, i + 1, sum + nums[i]), memoize(nums, visited, n, i + 1, sum))
}

