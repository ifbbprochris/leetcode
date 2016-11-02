/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var arry = (nums1.concat(nums2)).sort(function(a, b) {return a - b;});
    console.log(arry);
    if(arry.length % 2){
        return arry[Math.floor(arry.length / 2)];
    } else {
        return (arry[(arry.length / 2) - 1] + arry[(arry.length / 2)]) / 2;
    }
};
findMedianSortedArrays([1],[2,3,4,5,6,7,8,9,10]);
