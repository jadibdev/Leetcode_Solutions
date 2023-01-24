var twoSum = function(nums, target) {
    let numsMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (numsMap[target - nums[i]] !== undefined) {
            return [numsMap[target - nums[i]], i];
        }
        numsMap[nums[i]] = i;
    }
    return false;
};