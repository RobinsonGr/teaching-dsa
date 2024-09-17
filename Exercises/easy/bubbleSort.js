
//with array normal
const sortArray = (arr: number[]): number[] => {
  // Get the length of the array
  const n = arr.length;
  // Flag to track if any swaps occurred in a pass
  let swapped: boolean;

  // Outer loop: controls the number of passes
  // We need at most n-1 passes, as after each pass, at least one element is in its correct position
  for (let i = 0; i < n - 1; i++) {
    // Reset the swapped flag at the start of each pass
    // If no swaps occur in a pass, the array is already sorted
    swapped = false;

    // Inner loop: performs comparisons and swaps in each pass
    // n-i-1: reduces the range in each pass as the last i elements are already in place
    // -1 is used because we compare j with j+1, so we stop one element before the end
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        // This moves larger elements towards the end of the array
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        
        // Mark that a swap occurred in this pass
        swapped = true;
      }
    }

    // If no swaps occurred in this pass, the array is already sorted
    // We can break out of the outer loop early, optimizing for already sorted portions
    if (!swapped) {
      break;
    }
  }

  // Return the sorted array
  return arr;
}

// Test the function with a sample array
console.log(sortArray([1, 2, 3, 8, 10, 2, 50, 3, 4, 58]));
