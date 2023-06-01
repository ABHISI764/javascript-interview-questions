// Find the min element from the given int array in javascript

const numbers = [5, 2, 8, 1, 9];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log(min);