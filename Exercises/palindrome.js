const checkPalindrome = (string: string): Boolean => {
  // Time complexity: O(n), where n is the length of the input string.
  // Space complexity: O(n), as we are storing the cleaned string and its reverse.

  // Step 1: Clean the string by removing non-alphanumeric characters and converting to lowercase.
  const cleanedString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  // Time complexity: O(n) for the regex replacement operation.
  // Space complexity: O(n) for storing the cleaned string.

  // Step 2: Reverse the cleaned string.
  const reverseString = cleanedString.split('').reverse().join('');
  // Time complexity: O(n) for split, reverse, and join operations.
  // Space complexity: O(n) for storing the reversed string.

  // Step 3: Compare the cleaned string with its reversed version.
  // Time complexity: O(n) for comparison.
  
  if (cleanedString === reverseString) {
    return true;
  } 

  return false;
};
