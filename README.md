# 53. Maximum Subarray
Given an integer array nums, find the subarray with the largest sum, and return its sum.

### Example 1:

- Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
- Output: 6
- Explanation: The subarray [4,-1,2,1] has the largest sum 6.


### Example 2:

- Input: nums = [1]
- Output: 1
- Explanation: The subarray [1] has the largest sum 1.

### Example 3

- Input: nums = [5,4,-1,7,8]
- Output: 23
- Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

### Reasoning
My initial thoughts were to iterate over the input array, slice all possible subarrays, create a hashmap to store the subarray sums as keys and the subarrays themselves as values then return the highest key in the hashmap as the solution, however this solution had O(n^2) time and memory complexity.

Instead I used the kadane algorithm approach by initializing two variables, one to keep track of the current sum and the other to keep track of the max sum seen so far in the array, this solution had O(n) time complexity and a O(1) memory complexity and is the most optimal solution for solving this problem.

### Solution steps

- Initialize two variables, currentSum and maxSum, with the first element of the input array nums.
- Start a for loop, starting from the second element of the input array nums (index 1) and ending at the last element of the array.
- In each iteration of the loop, update the value of currentSum to be the maximum of the current element of the array and the current element plus the previous currentSum.
- Update the value of maxSum to be the maximum of the current maxSum and the current currentSum
- After the loop, return the maxSum.