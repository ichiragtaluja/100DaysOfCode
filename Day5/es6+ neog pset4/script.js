// Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

const getMaxElement = (array) => {
  let maximumNumber = 0;
  for (let i = 0; i <= array.length; i++) {
    maximumNumber = array[i] > maximumNumber ? array[i] : maximumNumber;
  }
  return maximumNumber;
};

let array = [4, 78, 8, 3, 6, 0, 12, 34];
console.log(getMaxElement(array)); // 78

// Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.

const calculateAverage = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  const average = sum / array.length;
  return average.toFixed(2);
};

console.log(calculateAverage([1, 2, 3, 4, 3, 6])); // 3

// write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number.

const convertEvenToOdd = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? newArr.push(arr[i] + 1) : newArr.push(arr[i]);
  }
  return newArr;
};

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]

// write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.
const filterWords = (words) => {
  let newArray = [];
  for (let i = 0; i < words.length; i++) {
    words[i].length > 5 ? newArray.push(words[i]) : newArray;
  }
  return newArray;
};

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)); // ["repeat", "community"]

// 2. Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

const capitalizeWords = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].toUpperCase());
  }
  return newArray;
};

console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));
// ["EAT", "SLEEP", "CODE", "REPEAT"]

// Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. Avoid using in-built methods.

const getValues = (array, propName) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i][propName]);
  }
  return newArray;
};

console.log(
  getValues(
    [
      { name: "John", age: 21 },
      { name: "Mary", age: 22 },
      { name: "Peter", age: 23 },
    ],
    "age"
  )
); // ["John", "Mary", "Peter"]

// Write an ES6 function that takes the users' details and returns the data with team ID. Avoid using in-built methods.

const podAndTeamAllocation = (obj) => {
  obj.teamId = 667543;
  return obj;
};

const userData = { firstName: "John", lastName: "Dee" };
console.log(podAndTeamAllocation(userData));
// {firstName: 'John', lastName: 'Dee', teamId: 667543}

// Write an ES6 function which checks if a student already has a team. If team is not given then add them to team “A” and return the object else do nothing and return the same object. Avoid using in-built methods
//m1
const checkForTeam = (obj) => {
  obj.hasOwnProperty("team") ? obj : (obj.team = "A");
  return obj;
};

//m2
const checkForTeam = (obj) => {
  for (let key in obj) {
    if (key === "team") {
      return obj;
    }
  }
  obj.team = "A";
  return obj;
};

console.log(checkForTeam({ firstName: "Penn", lastName: "Ma" }));
// {firstName: 'Penn', lastName: 'Ma', team: A}

console.log(checkForTeam({ firstName: "John", lastName: "Dee", team: "B" }));
// {firstName: 'John', lastName: 'Dee', team: B}

console.log(checkForTeam({ firstName: "Priya", lastName: "Raj" }));
// {firstName: 'Priya', lastName: 'Raj', team: A}

// Destructure the following code to get the desired outputs. Avoid using in-built methods.

const book = {
  title: "JavaScript: The Definitive Guide",
  authors: [
    { name: "David Flanagan", age: 49 },
    { name: "Yukihiro Matsumoto", age: 57 },
  ],
  publisher: { name: "O'Reilly Media", location: "CA" },
};

// Your ES6 code here
const {
  title,
  authors: [{ name: author1 }, { name: author2 }],
  publisher: { name: publisherName },
} = book;

console.log(title); // JavaScript: The Definitive Guide
console.log(author1); // David Flanagan
console.log(author2); // Yukihiro Matsumoto
console.log(publisherName); // O'Reilly Media

// Write an ES6 function that takes an array of objects and returns the sum of all ages.

const sumOfAges = (arr) => {
  let sumOfAge = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfAge += arr[i].age;
  }
  return sumOfAge;
};

var array = [
  {
    name: "Jay",
    age: 60,
  },
  {
    name: "Gloria",
    age: 36,
  },
  {
    name: "Manny",
    age: 16,
  },
  {
    name: "Joe",
    age: 9,
  },
];

console.log(sumOfAges(array)); // 121
