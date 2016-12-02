/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height === null || height.length === 0) return 0;
    var max = 0;
    var i = 0,
        j = height.length - 1;
    while (i < j) {
        max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
        if (height[i] < height[j]) {
            var k;
            for (k = i + 1; k < j && height[k] <= height[i]; ++k) {}
            i = k;
        } else {
            var k;
            for (k = j - 1; k > i && height[k] <= height[j]; --k) {}
            j = k;
        }
    }
    return max;
};

console.log(maxArea([2, 3, 45, 6, 7, 9, 7, 7]));
