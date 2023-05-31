// Print smaller number from 3 given numbers.

function findSmallestNumber(num1, num2, num3) {
    if(num1 <= num2 && num1 <= num3){
        return num1;
    }else if(num2 <= num1 && num2 <= num3) {
        return num2;
    }else {
        return num3;
    }

}

var num1 = 10;
var num2 = 5;
var num3 = 8;

var smallestNumber = findSmallestNumber(num1, num2, num3);
console.log(smallestNumber)