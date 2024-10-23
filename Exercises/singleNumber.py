def singleNumber(nums):
    count = {}
    
    for num in nums:
        if num in count:
            del count[num]  # Remove if the number appears twice
        else:
            count[num] = 1  # Add to dictionary if seen for the first time
    
    # At the end, the dictionary will contain only the single number
    return list(count.keys())[0]


nums = [4, 1, 2, 1, 2]
print(singleNumber(nums))  # Output: 4
