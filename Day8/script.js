//1. Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

const numbers = [1, 2, 3, 4, 5];

//Method 1
const increaseBy3 = (number) => number + 3;

const incrementNumbers = (arrayOfNumbers) => arrayOfNumbers.map(increaseBy3);

//Method 2
const incrementNumbers = (arrayOfNumbers) =>
  arrayOfNumbers.map((individualNumber) => individualNumber + 3);

console.log(incrementNumbers(numbers));
// Output: [4, 5, 6, 7, 8]

//2. Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

const capitalizeLetter = (word) => word.toUpperCase();

const capitalizeArray = (arrayOfWords) => arrayOfWords.map(capitalizeLetter);

const myArray = ["apple", "banana", "cherry"];

console.log(capitalizeArray(myArray));
// Output: ["APPLE", "BANANA", "CHERRY"]

//3. Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

// Your ES6 function here

const extractAge = (personInformation) => {
  return personInformation.age;
};

const getAges = (arrayOfPeopleInfo) => {
  return arrayOfPeopleInfo.map(extractAge);
};

const people = [
  {
    name: "Ankit",
    age: 25,
  },
  {
    name: "Vinit",
    age: 24,
  },
  {
    name: "Shashi",
    age: 29,
  },
];

const ages = getAges(people);

console.log(ages); // Output: [25, 24, 29]

//4. Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.

const uncapitaliseNameOfProductInObject = (object) => object.name.toLowerCase();

const getProductNamesInLowerCase = (productsArray) =>
  productsArray.map(uncapitaliseNameOfProductInObject);

const products = [
  {
    name: "Lip Balm",
    stock: 100,
  },
  {
    name: "PERFUME",
    stock: 400,
  },
  {
    name: "Socks",
    stock: 200,
  },
];

console.log(getProductNamesInLowerCase(products));
// Output: ["lip balm", "perfume", "socks"]

//5.Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.

// Your ES6 function here

const getNameFromCityObject = (city) => city.name;

const getCityNames = (citiesArray) => citiesArray.map(getNameFromCityObject);

const cities = [
  {
    name: "New York",
    population: 8538000,
  },
  {
    name: "Los Angeles",
    population: 3976000,
  },
  {
    name: "Bangalore",
    population: 13608000,
  },
];

console.log(getCityNames(cities));
// Output: ["New York", "Los Angeles", "Bangalore"]

//6. Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5.

const lengthGreaterThan5 = (nameofString) => nameofString.length > 5;

const filterLongStrings = (arrayOfStrings) =>
  arrayOfStrings.filter(lengthGreaterThan5);

const fruits = ["apple", "banana", "cherry", "watermelon", "pineapple"];
console.log(filterLongStrings(fruits));
// Output: ["banana", "watermelon", "pineapple"]

//7. Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.

// Your ES6 code here
const isDivisibleBy15 = (number) => number % 15 === 0;

const isDivisibleBy3and5 = (arrayOfNumbers) =>
  arrayOfNumbers.filter(isDivisibleBy15);

const numbers = [1, 2, 30, 4, 15];
console.log(isDivisibleBy3and5(numbers));
// Output: [30, 15]

//8. Write an ES6 function that takes an array of objects with the properties name and age, and returns an array with only the objects that have an age greater than 30.

const isAgeGreaterThan30 = (personObject) => personObject.age > 30;

const filterByAge = (arrayOfPersons) =>
  arrayOfPersons.filter(isAgeGreaterThan30);

const people = [
  {
    name: "Rahul",
    age: 25,
  },
  {
    name: "Raj",
    age: 35,
  },
  {
    name: "Vijay",
    age: 45,
  },
];

console.log(filterByAge(people));
// Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]

//9. Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with only the objects that have a score greater than 80.

const isScoreGreaterThan80 = (personDetails) => personDetails.score > 80;

const filterByScore = (arrayOfStudents) =>
  arrayOfStudents.filter(isScoreGreaterThan80);

const students = [
  {
    name: "Aditya",
    score: 85,
  },
  {
    name: "Bob",
    score: 75,
  },
  {
    name: "Charlie",
    score: 90,
  },
];

console.log(filterByScore(students));
// Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]

//10. Write an ES6 function that takes an array of objects with the properties name, age and city, and returns an array with only the objects that have a city property of "Indore" and age greater than 70.

const isCityIndoreAndAgeGreaterThan70 = (personDetails) =>
  personDetails.age > 70 && personDetails.city === "Indore";

const filterByCityAndAge = (arrayOfPeople) =>
  arrayOfPeople.filter(isCityIndoreAndAgeGreaterThan70);

const people = [
  {
    name: "Ridhima",
    age: 75,
    city: "Indore",
  },
  {
    name: "Akshay",
    age: 60,
    city: "Delhi",
  },
  {
    name: "Udit",
    age: 80,
    city: "Indore",
  },
  {
    name: "Venki",
    age: 80,
    city: "Bangalore",
  },
];
const filteredPeople = filterByCityAndAge(people);
console.log(filteredPeople);
// Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }]

//11. Write an ES6 function that takes an array of objects containing book information (title, author, genre) and returns an array with only the books of "Science Fiction".

// Your ES6 code here
const isGenreScienceFiction = (book) => book.genre === "Science Fiction";

const filterByGenre = (arrayOfBooks) =>
  arrayOfBooks.filter(isGenreScienceFiction);

const books = [
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Science Fiction",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Science Fiction",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
  },
];

const filteredBooks = filterByGenre(books, "Science Fiction");
console.log(filteredBooks);
// Output: [{title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"}, {title: "1984", author: "George Orwell", genre: "Science Fiction"}]

//12. Write an ES6 function that takes an array of objects containing employee information (name, age, salary) and returns an array with only the employees who earn a salary above 22000 and age is above 25

// Your ES6 code here
const filterBySalary = (arrayOfEmployees, salary, age) =>
  arrayOfEmployees.filter(
    (person) => person.age > age && person.salary > salary
  );

const employees = [
  {
    name: "Abhay",
    age: 25,
    salary: 20000,
  },
  {
    name: "Joice",
    age: 30,
    salary: 35000,
  },
  {
    name: "Reena",
    age: 35,
    salary: 15000,
  },
  {
    name: "Jeena",
    age: 40,
    salary: 50000,
  },
];

const filteredEmployees = filterBySalary(employees, 22000, 25);
console.log(filteredEmployees);
// Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary: 50000}]
