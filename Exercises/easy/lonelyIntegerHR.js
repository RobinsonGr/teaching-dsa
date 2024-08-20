/*
Given an array of integers, where all elements but one occur twice, find the unique element.

Example

a = [1,2,3,4,3,2,1]

The unique element is 4

Function Description
 = [1,2,3,4,3,2,1]

The unique element is 4

Function Description = [1,2,3,4,3,2,1]

The unique element is 4

Function Description
Complete the lonelyinteger function in the editor below.

lonelyinteger has the following parameter(s):

int a[n]: an array of integers
Returns

int: the element that occurs only once
Input Format

The first line contains a single integer, , the number of integers in the array.
The second line contains  space-separated integers that describe the values in .
*/


function lonelyinteger(a) {
    const frequencyMap = {};

    // Populate the frequency map
    for (let num of a) {
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        } else {
            frequencyMap[num] = 1;
        }
    }

    // Find the element with a count of 1
    for (let num in frequencyMap) {
        if (frequencyMap[num] === 1) {
            return parseInt(num); 
        }
    }
}


//binary option
function lonelyinteger(a) {
    let uniqueElement = 0;
    
    for (let num of a) {
        uniqueElement ^= num; // XOR each element with the uniqueElement
    }
    
    return uniqueElement;
}


