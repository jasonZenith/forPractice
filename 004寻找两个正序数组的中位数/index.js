const findMedianSortedArrays = function (nums1, nums2) {
  const nums = nums1.concat(nums2);
  nums.sort((a, b) => a - b);
  if (nums.length % 2 === 0) {
    let halfIndex = nums.length / 2;
    let evenRes = (nums[halfIndex - 1] + nums[halfIndex]) / 2;
    console.log(evenRes);
    return evenRes;
  } else {
    let halfIndex = nums.length / 2 - 0.5;
    let oddRes = nums[halfIndex];
    console.log(oddRes);
    return oddRes;
  }
};

findMedianSortedArrays([1, 3], [2]);
findMedianSortedArrays([1, 3], [2, 4]);
findMedianSortedArrays([0, 0], [0, 0]);
findMedianSortedArrays([1], []);
findMedianSortedArrays([], [2]);
