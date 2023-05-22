// Print middle number from 3 given numbers.

function findMiddleNumber(num1, num2, num3) {
    if ((num1 >= num2 && num1 <= num3) || (num1 <= num2 && num1 >= num3)) {
      return num1;
    } else if ((num2 >= num1 && num2 <= num3) || (num2 <= num1 && num2 >= num3)) {
      return num2;
    } else {
      return num3;
    }
  }
  

  var num1 = 10;
  var num2 = 5;
  var num3 = 8;
  
  var middleNumber = findMiddleNumber(num1, num2, num3);
  console.log("The middle number is: " + middleNumber);