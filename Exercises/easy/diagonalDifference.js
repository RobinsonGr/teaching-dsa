

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
