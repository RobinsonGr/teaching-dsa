// 26 leetcode

var removeDuplicates = function(nums) {
    
    let uniqueNumIdx = 0

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[uniqueNumIdx]) {
            uniqueNumIdx++
            nums[uniqueNumIdx] = nums[i]
        }
    }
    return uniqueNumIdx + 1
};
