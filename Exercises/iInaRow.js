function either404(numbers) {
    let zeroNextToZero = false;
    let fourNextToFour = false;

    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === 0 && numbers[i + 1] === 0) {
            zeroNextToZero = true;
        }
        if (numbers[i] === 4 && numbers[i + 1] === 4) {
            fourNextToFour = true;
        }

        // If both patterns are found, return false immediately
        if (zeroNextToZero && fourNextToFour) {
            return false;
        }
    }

    return zeroNextToZero || fourNextToFour;
}


//the easy bizzbuzz

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    // Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } 
    // Check if the number is divisible by 3
    else if (i % 3 === 0) {
      console.log("Fizz");
    } 
    // Check if the number is divisible by 5
    else if (i % 5 === 0) {
      console.log("Buzz");
    } 
    // If none of the conditions match, print the number
    else {
      console.log(i);
    }
  }
};

fizzBuzz();
