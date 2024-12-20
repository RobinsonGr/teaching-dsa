def threeSum(nums):
    # Sort the array
    nums.sort()
    result = []

    # Iterate through the sorted array
    for i in range(len(nums) - 2):
   
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        # Set up two pointers
        left, right = i + 1, len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == 0:
                result.append([nums[i], nums[left], nums[right]])

                # Move pointers and skip duplicates
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1

                # Move both pointers for the next possible triplet
                left += 1
                right -= 1

            elif total < 0:
                left += 1  # Increase sum by moving left pointer
            else:
                right -= 1  # Decrease sum by moving right pointer

    return result
