 Original solution
function flattenArray(arr: number[]) {
  let newArray: number[] = [];

  function recursiveArray(array: any[]) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        recursiveArray(array[i]);
      } else {
        newArray.push(array[i]);
      }
    }
  }

  recursiveArray(arr);
  return newArray;
}

// Test cases
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, 2, [3, 4, [5, 6, [7, 8]]]])); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(flattenArray([])); // []
console.log(flattenArray([1, 2, 3])); // [1, 2, 3]

// Improved version
function improvedFlattenArray<T>(arr: (T | T[])[]): T[] {
  return arr.reduce((flat: T[], current: T | T[]) => {
    return flat.concat(Array.isArray(current) ? improvedFlattenArray(current) : current);
  }, []);
}

// Test cases for improved version
console.log(improvedFlattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
console.log(improvedFlattenArray([1, 2, [3, 4, [5, 6, [7, 8]]]])); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(improvedFlattenArray([])); // []
console.log(improvedFlattenArray([1, 2, 3])); // [1, 2, 3]
console.log(improvedFlattenArray(['a', ['b', ['c', 'd'], 'e'], 'f'])); // ['a', 'b', 'c', 'd', 'e', 'f']
