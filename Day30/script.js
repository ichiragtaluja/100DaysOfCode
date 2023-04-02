// 1. Write an ES6 function that takes an array of numbers and returns a new array with only the odd numbers.

export const getOddNumbers = (arrayOfNumbers) => {
    // Your ES6 code here
    let arrayOfOddNumbers = [];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      if (arrayOfNumbers[i] % 2 !== 0) {
        arrayOfOddNumbers.push(arrayOfNumbers[i]);
      }
    }
    return arrayOfOddNumbers;
  };
  
  console.log(getOddNumbers([2, 6, 7, 3, 8, 9, 13])); // [7, 3, 9, 13]






  // 2. Write an ES6 function which takes an array of digits and return the sum of all digits present at odd indices. Avoid using in-built methods.

export const sumDigitsAtOddIndices = (arrayOfNumbers) => {
    // Your ES6 code here
    let sumOfDigitsAtOddPlaces = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      if (i % 2 === 1) {
        sumOfDigitsAtOddPlaces += arrayOfNumbers[i];
      }
    }
  
    return sumOfDigitsAtOddPlaces;
  };
  
  console.log(sumDigitsAtOddIndices([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 20






  // 3. Write an ES6 function to reverse a string in JavaScript without using in-built methods.

export const reverseString = (inputString) => {
    // Your ES6 code here
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }
    return reversedString;
  };
  
  console.log(reverseString("neoG Camp")); // pmaC Goen








  // 4. Write an ES6 function that takes an array of strings and returns the shortest string in the array.

export const getShortestString = (arrayOfStrings) => {
    // Your ES6 code here
    if (arrayOfStrings.length > 0) {
      let shortestString;
      let lengthOfShortestString = arrayOfStrings[0].length;
      for (let i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length < lengthOfShortestString) {
          lengthOfShortestString = arrayOfStrings[i].length;
          shortestString = arrayOfStrings[i];
        }
      }
      return shortestString;
    }
  };
  
  console.log(getShortestString(["primary", "secondary", "education", "exams"])); // exams










  // 5. Write an ES6 function that takes two array of numbers of equal length and returns a new array with the sum of each corresponding element in the two arrays. Avoid using in-built methods.

export const sumArrays = (firstArray, secondArray) => {
    // Your ES6 code here
    const sumArray = [];
    for (let i = 0; i < firstArray.length; i++) {
      sumArray.push(firstArray[i] + secondArray[i]);
    }
    return sumArray;
  };
  
  console.log(sumArrays([1, 2, 3, 4], [1, 2, 3, 5])); // [2, 4, 6, 9]








// 6. Write an ES6 function that takes an object with x and y properties and returns an array containing the values of x and y.

export const getCoordinates = ({ x, y }) =>
  // Your ES6 code here
  [x, y];
const point = { x: 5, y: 10 };
console.log(getCoordinates(point)); // [5, 10]








// 7. Write an ES6 function that takes an object representing a car and returns its make, model, and year using object destructuring.

export const getCarDetails = ({ make, model, year, color }) =>
  // Your ES6 code here`
  `Make: ${make}, Model: ${model}, Year: ${year}`;

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2015,
  color: "gray"
};

console.log(getCarDetails(car)); // Make: Toyota, Model: Corolla, Year: 2015






// 8. Write an ES6 function that takes an object with title and author properties and returns a string in the format "{title} by {author}". Do this with least amount of characters.

export const getBookInfo = ({ title, author }) =>
  // Your ES6 code here
  `${title} by ${author}`;

const book = { title: "The Hobbit", author: "J.R.R. Tolkien" };
console.log(getBookInfo(book)); // The Hobbit by J.R.R. Tolkien






// 9. Write an ES6 function that takes two strings as input and determines if they are the same or not.

export const areStringsEqual = (firstString, secondString) => {
    // Your ES6 code here
    if (firstString.length === secondString.length) {
      for (let i = 0; i < firstString.length; i++) {
        if (firstString[i] !== secondString[i]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  };
  
  console.log(areStringsEqual("Apple", "Apple")); // true
  console.log(areStringsEqual("Apple", "apple")); // false
  console.log(areStringsEqual("Papaya", "Watermelon")); // false
  







  // 10. Write an ES6 function that takes an array of objects, each with name and age properties, and returns an array containing the names of all people whose age is greater than or equal to 60. Avoid using in-built methods.

export const getNamesOfAdults = (arrayOfPeople) => {
    // Your ES6 code here
    let arrayOfNames = [];
    for (let i = 0; i < arrayOfPeople.length; i++) {
      if (arrayOfPeople[i].age >= 60) {
        arrayOfNames.push(arrayOfPeople[i].name);
      }
    }
    return arrayOfNames;
  };
  
  const people = [
    { name: "Alice", age: 69 },
    { name: "Bob", age: 47 },
    { name: "Charlie", age: 70 }
  ];
  console.log(getNamesOfAdults(people)); // ["Alice", "Charlie"]
  

  
  

  
  