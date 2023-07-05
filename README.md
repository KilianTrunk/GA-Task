# Simple Ping-Pong API

This is a simple RESTful API built with Express.js that responds with "pong" when a GET request is made to the "/ping" endpoint.

## Usage

1. Install the dependencies using `npm install`.
2. Start the server by running `node ping-pong.js`.
3. Access the server at `http://localhost:3000/ping` in your browser or any API client.

## Customization

You can customize the API response by adding a query parameter called "username" to the request URL. The API will include the provided username in the response.

For example, to set the username as "Kilian", you can access the server at `http://localhost:3000/ping?username=Kilian`.

If no username is provided, a default value of "GameArt back-end developer" will be used.

## Testing

The API includes tests to ensure its functionality. To run the tests, use the following command:

```bash
npm test
```

## Error Handling

The API includes basic error handling to handle internal server errors. If any error occurs during the processing of a request, an appropriate error response will be sent.

### Internal Server Error

If an internal server error occurs, the API will respond with a status code of 500 and the message "Internal Server Error".

# JavaScript Functions

This code demonstrates various JavaScript functions that make use of `map`, `filter`, and `reduce` to manipulate an array of integers. The array used in the examples is `[24, 56, 1, 25, 67, 24, 89, 21, 53, 24, 56]`.

## Usage

1. Run the code using `node js-functions.js`.
2. Access your IDEs terminal to view the output from the used functions.

## Written Functions

### 1. Returns all unique numbers, ordered from larger to smallest

The function `getUniqueNumbers` takes an array as input and returns a new array containing only the unique numbers from the original array, in descending order.

```javascript
function getUniqueNumbers(array) {
  const uniqueNumbers = array.filter(
    (number, index) => array.indexOf(number) === index
  );

  const sortedNumbers = uniqueNumbers.sort((a, b) => b - a);

  return sortedNumbers;
}
```

### 2. Returns all numbers, where each of them is multiplied by two

The function `multiplyNumbersByTwo` multiplies each number in the input array by two and returns a new array with the multiplied values.

```javascript
function multiplyNumbersByTwo(array) {
  return array.map((number) => number * 2);
}
```

### 3. Returns all odd numbers

The function `getOddNumbers` filters out all the odd numbers from the input array and returns a new array with only the odd values.

```javascript
function getOddNumbers(array) {
  return array.filter((number) => number % 2 !== 0);
}
```

### 4. Returns sum of all numbers

The function `getSumOfNumbers` uses `reduce` to calculate the sum of all numbers in the input array and returns the total sum.

```javascript
function getSumOfNumbers(array) {
  return array.reduce((sum, number) => sum + number, 0);
}
```

### 5. Returns sum of all numbers that are divisible by 3

The function `getSumOfNumbersDivisibleByThree` uses `reduce` to calculate the sum of all numbers in the input array that are divisible by 3.

```javascript
function getSumOfNumbersDivisibleByThree(array) {
  return array.reduce((sum, number) => {
    if (number % 3 === 0) {
      return sum + number;
    }
    return sum;
  }, 0);
}
```
