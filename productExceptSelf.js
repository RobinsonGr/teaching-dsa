function productExceptSelf(nums) {
    const length = nums.length;
    const answer = new Array(length).fill(1);

    let leftProduct = 1;
    for (let i = 0; i < length; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
}

// Example usage:
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0, 0, 9, 0, 0]
