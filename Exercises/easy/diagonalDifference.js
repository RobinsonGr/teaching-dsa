

//my solution using two pointers
function diagonalDifference(arr) {
    let leftDiagonal = 0;
    let rightDiagional = 0;
    
    let leftPointer = 0
    let rightPointer = arr[0].length - 1;
    
    arr.forEach((subArr) => {
        leftDiagonal += subArr[leftPointer];
        rightDiagional += subArr[rightPointer];
        
        leftPointer++
        rightPointer--
    });
    
    const result =  leftDiagonal - rightDiagional
    
    return result < 0 ? -result : result
}

// other solution
  function diagonalDifference(arr) {
     let d1 = 0;
     let d2 = 0;
     let j = arr.length-1;

     for( let i = 0; i< arr.length; i++){      
        d1 += arr[i][i];       
        d2 += arr[i][j];      
        j--;
     }

     return Math.abs(d1-d2);
  }



///////////////
// In this challenge, the task is to debug the existing code to successfully execute all provided test files.

// Given an array of  distinct integers, transform the array into a zig zag sequence by permuting the array elements. A sequence will be called a zig zag sequence if the first  elements in the sequence are in increasing order and the last  elements are in decreasing order, where . You need to find the lexicographically smallest zig zag sequence of the given array.

// Example.


// Now if we permute the array as , the result is a zig zag sequence.

// Debug the given function findZigZagSequence to return the appropriate zig zag sequence for the given input array.

// Note: You can modify at most three lines in the given code. You cannot add or remove lines of code.

// To restore the original code, click on the icon to the right of the language selector.

// Input Format

// The first line contains  the number of test cases. The first line of each test case contains an integer , denoting the number of array elements. The next line of the test case contains  elements of array .

// Constraints


//  ( is always odd)

// Output Format

// For each test cases, print the elements of the transformed zig zag sequence in a single line.


function processData(n) {
   
   const numbers = n.split('\n')[2].split(' ')
   const halfDivision = (numbers.length)/2
   
   const secondHalf = numbers.slice(halfDivision).sort((a,b) => b - a)
    
    const zigZag = [...numbers.slice(0, halfDivision), ...secondHalf].join(' ')
    
    console.log(zigZag)

} 
