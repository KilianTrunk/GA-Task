var arrayOfNumbers = [24, 56, 1, 25, 67, 24, 89, 21, 53, 24, 56];

// Return all unique numbers, ordered from larger to smallest

function getUniqueNumbers(array) {
  const uniqueNumbers = array.filter(
    (number, index) => array.indexOf(number) === index
  );

  const sortedNumbers = uniqueNumbers.sort((a, b) => b - a);

  return sortedNumbers;
}

console.log("Unique numbers: " + getUniqueNumbers(arrayOfNumbers));

// Return all numbers, where each of them is multiplied by two

function multiplyNumbersByTwo(array) {
  return array.map((number) => number * 2);
}

console.log("Multiplied numbers: " + multiplyNumbersByTwo(arrayOfNumbers));

// Return all odd numbers

function getOddNumbers(array) {
  return array.filter((number) => number % 2 !== 0);
}

console.log("Odd numbers: " + getOddNumbers(arrayOfNumbers));

// Return sum of all numbers

function getSumOfNumbers(array) {
  return array.reduce((sum, number) => sum + number, 0);
}

console.log("Sum of numbers: " + getSumOfNumbers(arrayOfNumbers));

// Return sum of all numbers that are divisible by 3

function getSumOfNumbersDivisibleByThree(array) {
  return array.reduce((sum, number) => {
    if (number % 3 === 0) {
      return sum + number;
    }
    return sum;
  }, 0);
}

console.log(
  "Sum of numbers that are divisible by 3: " +
    getSumOfNumbersDivisibleByThree(arrayOfNumbers)
);
