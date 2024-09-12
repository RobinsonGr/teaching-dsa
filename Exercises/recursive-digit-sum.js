function superDigit(n, k) {
    
    const recursiveSum = (sNum) => {
        //base case whenever it has just one caracter (it's an string), stop and return it
        if(sNum.length === 1 ) return Number(sNum)
        
       let sum = sNum.split('').reduce((acc, current) => acc + Number(current), 0)
       
       return recursiveSum(sum.toString());
    }
    
    let totalSum = n.toString().split('').reduce((acc, digit) => acc + Number(digit), 0) * k 
    
   return recursiveSum(totalSum.toString())
    
}
