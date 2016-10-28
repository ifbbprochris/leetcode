/**
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0; i< nums.length; i++){
        for(var j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j];
            }
        }
    }
};
console.log(twoSum([0,4,3,0], 0));;
