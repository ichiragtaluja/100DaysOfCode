// 1. Given an array of objects representing people, use the reduce function to find the average age of all the people.
const people = [{
        name: 'Alice',
        age: 25
    },
    {
        name: 'Bob',
        age: 30
    },
    {
        name: 'Charlie',
        age: 35
    },
    {
        name: 'Dave',
        age: 40
    }
];
// Output - 32.5


const averageAgeOfPeople = people => people.reduce((avgAge, peeps, index) => (avgAge * index + peeps.age) / (index + 1), 0)






//2. Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.
const arr = [2, 4, 5, 7, 9, 17, 34, 65, 90]

// Output - 2,4

const anonymousFunction = array => array.reduce((returnArray, num) => num < 8 && num % 2 === 0 ? [...returnArray, num] : returnArray, [])





//3. Given an array of numbers, write a function that returns the sum of the cubes of all odd numbers in the array.
const numbers = [1, 2, 3, 4, 5];
// Output: 153
// hint: use pow inbuilt function

const anomymousFunction = numbers => numbers.reduce((sumOfCubes, num) => num % 2 !== 0 ? sumOfCubes + Math.pow(num, 3) : sumOfCubes, 0)





//4.  Given an array of objects representing students, where each object has a name property and a grades property (an array of numbers), write a function that returns an array of objects representing the students who have an average grade of at least 90.

const students = [{
        name: 'Alice',
        grades: [90, 95, 92]
    },
    {
        name: 'Bob',
        grades: [80, 85, 87]
    },
    {
        name: 'Charlie',
        grades: [92, 88, 94]
    },
    {
        name: 'David',
        grades: [75, 80, 82]
    },
];
// Output: [{ name: 'Alice', averageGrade: 92.33333333333333 }, { name: 'Charlie', averageGrade: 91.33333333333333 }]


const findIntelligentStudents = students => students.reduce((smartStudents, {
    name,
    grades
}) => {
    let sum = 0
    for (let grade of grades) {
        sum += grade
    }
    let averageGrade = sum / grades.length
    return averageGrade > 90 ? [...smartStudents, {
        name,
        averageGrade
    }] : smartStudents

}, [])



//4 Given an array of strings, write a function that returns an object representing the frequency of each character in the array. The keys of the object should be the characters themselves, and the values should be the number of times the character appears in the array.

const strings = ['apple', 'banana', 'cherry'];

// Output: { a: 4, p: 2, l: 1, e: 2, b: 1, n: 2, c: 1, h: 1, r: 2, y: 1}


const frequencyFunction = strings => strings.reduce((newLetters, fruit) => {
    let newArray = fruit.split("");
    return [...newLetters, ...newArray]
}, []).reduce((acc, letter) => {
    if ([letter] in acc) {
        acc[letter] += 1
        return acc
    } else {
        acc[letter] = 1
        return acc
    }
}, {})