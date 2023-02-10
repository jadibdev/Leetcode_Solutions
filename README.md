# 88. Merge Sorted Array
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

### Example 1:

- Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
- Output: [1,2,2,3,5,6]
- Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

### Example 2:

- Input: nums1 = [1], m = 1, nums2 = [], n = 0
- Output: [1]
- Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

### Reasoning
My initial thoughts were to use a temporary array, iterate over nums1 and nums2 respectively and push smaller value into temp until all values are accounted for then copy the temp array into nums1, but this approach turned out to be flawed for several reasons so I ditched it.

Instead I implemented a 3 pointer technique that allowed me to keep track of values in both nums1 and nums2 as well as the appropriate index to insert an element into nums1.

### Solution steps

- Initialize three pointers, p1, p2, and p, which start at the last index of nums1(m), nums2, and nums1(m+n), respectively.
- Create a while loop that continues as long as both p1 and p2 are greater than or equal to zero.
- Within the while loop, compare the values at nums1[p1] and nums2[p2]. If nums2[p2] is larger, the value is copied to nums1[p] and p2 is decremented. If nums1[p1] is larger, the value is copied to nums1[p] and p1 is decremented. After each copy, p is decremented.
- After the first while loop terminates, if p2 is still greater than or equal to zero, another while loop is executed to copy the remaining values from nums2 to nums1.
- After both while loops have completed, the merged and sorted array will be stored in nums1.


