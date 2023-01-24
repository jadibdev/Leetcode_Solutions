# 1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Example 1:

- Input: nums = [2,7,11,15], target = 9
- Output: [0,1]
- Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

### Example 2:

- Input: nums = [3,2,4], target = 6
- Output: [1,2]

### Example 3:

- Input: nums = [3,3], target = 6
- Output: [0,1]

### Reasoning
My initial thought when looking at this problem was to use a Two Pointers approach curr and next, check if they add up to the target, if so I’ll return their indexes otherwise I’ll move curr and next accordingly to do the same for the next value, even though this approach has a O(n) time complexity and only O(1) memory complexity, it is optimal for this problem only if both the input array is sorted and its elements are unique which is not the case.

I decided to use a hashmap instead to store the elements and their corresponding indices, then check if the difference is present in the hashmap, if so I would know the two numbers that add up to the target.

### Solution steps

- Create an empty hashmap
- Iterate over the input array nums
- For each element in nums, calculate its complement by subtracting it from the target
- Check if the complement exists in the hashmap
- If the complement exists, return an array containing the index of the current element and the value of the complement in the hashmap
- If the complement doesn’t exist, add the current element and its index to the hashmap
- If no complement is found, return false

