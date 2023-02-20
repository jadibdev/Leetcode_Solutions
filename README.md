# 350. Intersection of Two Arrays II
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

### Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

### Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

### Reasoning
My initial thought was to use a brute force approach with nested for loops to iterate over nums1 and nums2 respectively then push smaller number to a result array, this approach worked but it did not take into account that input arrays may not be sorted and the fact there could be duplicates, so it failed test cases because of that. 

Instead I decided to use two different approaches: 
- A hashmap to store all elements from nums1 as keys and all their occurrences count as values, check if an element from nums2 is present in hashmap, if yes push it to the result array.
- A two pointer technique to iterate over both arrays (given they are sorted) and push element to result array when intersection is found.

### Hashmap Implementation steps:

- Create an empty array result to hold the common elements of nums1 and nums2
- Create a new Map object to store the elements of nums1 and their frequencies.
- Loop through each element of nums1:
    - a. If the Map does not have the current element, add it with a frequency of 1.
    - b. If the Map already has the current element, increment its frequency by 1.
- Loop through each element of nums2:
    - a. Check if the Map contains the current element and its frequency is greater than 0.
    - b. If both conditions are true, add the current element to the result array and decrement its frequency in the Map.
- Return the result array containing the common elements.

### Two Pointer Implementation steps:
- Sort the two input arrays nums1 and nums2 in non-decreasing order.
- Initialize two pointers p1 and p2 to the beginning of both arrays.
- Initialize an empty array result to hold the intersection of the two arrays.
- While p1 is less than the length of nums1 and p2 is less than the length of nums2, do the following:
    - a. If the value at index p1 of nums1 is equal to the value at index p2 of nums2, add the value to the result array, and increment both pointers.
    - b. Otherwise, if the value at index p1 of nums1 is less than the value at index p2 of nums2, increment p1.
    - c. Otherwise, if the value at index p1 of nums1 is greater than the value at index p2 of nums2, increment p2.
- Return the result array, which contains the intersection of nums1 and nums2.
