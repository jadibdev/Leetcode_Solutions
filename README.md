# 242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Example 1:

- Input: s = "anagram", t = "nagaram"
- Output: true

### Example 2:

- Input: s = "rat", t = "car"
- Output: false

### Reasoning
My initial solution was to convert both strings into arrays, sort them alphabetically and compare them using Javascript built-in functions split(), sort(), toString().

However, this solution was not optimal as it had O(nlog(n)) runtime complexity due to the sort() function using TimeSort algorithm. I then decided to take an alternative approach by counting the occurrences of characters in both strings using a Hashmap.

This solution greatly improved my results, I went from beating only 66% of all submissions runtime to beating over 98% and from 8% to 95% for memory.

The solution is now at worst O(n) complexity since it does not involve sorting which ran in O(nlog(n)) and does take advantage of O(1) look up times by using a Hashmap.

### Solution steps

- Check if the length of s & t are not equal, if not, return false.
- Create an empty object sMap and then iterate through s, add each character to the object, keeping track of its count.
- Iterate through t and check if the character exists in the sMap object, if not return false. If it exists, reduce the count by one.
- After all the characters have been checked, return true.
