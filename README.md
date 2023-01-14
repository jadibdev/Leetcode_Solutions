# 217. Contains Duplicates
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

# Example 1:

Input: nums = [1,2,3,1]
Output: true

# Example 2:

Input: nums = [1,2,3,4]
Output: false

# Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

# Reasoning
When I encountered this Leetcode problem, I initially thought of creating an additional array to store the distinct values then compare them to the values in array nums using Javascript built-in function includes(). 

This approach would lead to O(n^2) complexity as we must step through each element of nums then through each element of the newly created array to check whether a value is included.

A better approach would be to use a Javascript Set to store the unique values as it provides O(1) complexity to look up values, the steps would go as follows:

- Create a new Set to store unique values
- Step through each element in nums, if new Set already has element return true otherwise add element to new Set
- Return false if all nums elements are unique


