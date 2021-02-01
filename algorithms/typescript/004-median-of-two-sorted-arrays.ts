function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const nums: number[] = nums1.concat(nums2);
    nums.sort((a, b) => a - b);
    if (nums.length % 2 === 0) {
        const i: number = nums.length / 2;
        return (nums[i - 1] + nums[i]) / 2;
    }
    const i: number = Math.floor(nums.length / 2) + 1;
    return nums[i - 1];
};
