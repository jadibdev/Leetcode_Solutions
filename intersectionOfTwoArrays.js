// Hashmap Implementation
var intersect = function(nums1, nums2) {
    let result = [];
    let map = new Map();
    for (let i = 0; i < nums1.length; i++) {
        if (!map.has(nums1[i])) {
            map.set(nums1[i], 1);
        } else {
            map.set(nums1[i], map.get(nums1[i]) + 1)
        }
    }
    for (let j = 0; j < nums2.length; j++) {
        if (map.has(nums2[j]) && map.get(nums2[j]) > 0) {
            result.push(nums2[j]);
            map.set(nums2[j], map.get(nums2[j]) - 1)
        }
    }
    return result;
};

// Two pointer implementation
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let p1 = 0;
    let p2 = 0;
    let result = [];
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] === nums2[p2]) {
            result.push(nums1[p1]);
            p1++;
            p2++;
        } else if (nums1[p1] < nums2[p2]) {
            p1++;
        } else {
            p2++;
        }
    }
    return result;
};