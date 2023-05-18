// Print bigger number from 2 given numbers

function printBiggerNumber(num1, num2) {
    if (num1 > num2) {
      console.log(num1 + " is the bigger number.");
    } else if (num2 > num1) {
      console.log(num2 + " is the bigger number.");
    } else {
      console.log("Both numbers are equal.");
    }
  }
  

  printBiggerNumber(50, 70); // Output: 70 is the bigger number.
 
  