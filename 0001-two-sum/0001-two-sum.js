/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = [];
        for (let i = 0; i < nums.length; i++) {
            const num1 = nums[i];
            const num2 = target - num1;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] === num2) {
                    result.push(i);
                    result.push(j);
                    return result;
                }
            }
        }
        return result;
    }