//using two pointervar removeElement = function(nums, val) {

    let k = 0;

    for(let i = 0; i < nums.length; i++) {
        
        if(nums[i] !== val) {
            //while they're different from values
            //k and i will increase in the same way
            nums[k] = nums[i] 
            k++
        };
    };
    //k will act  as a pointer and  a counter for the elements !== val
    return k
};
