//1 Given an array of numbers, write a function that returns the sum of all the even numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sumOfEvenNumbers = arrayOfNumbers => arrayOfNumbers.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0)




//2 Given an array of numbers, write a function that returns the difference between the largest and smallest numbers.
const numbers = [10, 2, 7, 14, 5];

Note: you may use inbuilt
function
if you want

const difference = arr => arr.reduce(() => {}, {
    min: arr[0],
    max: arr[0]
})


//2 Given an array of numbers, write a function that returns the difference between the largest and smallest numbers.
const numbers = [10, 2, 7, 14, 5];

// Note: you may use inbuilt function if you want

const difference = arr => arr.reduce((acc, num) => {
    if (num < acc.min) {
        acc.min = num
    }
    if (num > acc.max) {
        acc.max = num
    }
    return acc

}, {
    min: arr[0],
    max: arr[0]
})

console.log(difference(numbers).max - difference(numbers).min)



//3 Given an array of objects representing students, use the reduce function to find the student name with the highest grade.

const students = [{
        name: 'Alice',
        grade: 85
    },
    {
        name: 'Bob',
        grade: 70
    },
    {
        name: 'Charlie',
        grade: 90
    },
    {
        name: 'Dave',
        grade: 80
    }
]


const aff = arr => arr.reduce((acc, obj) =>
    obj.grade > acc.grade ? obj : acc, students[0]).name

console.log(aff(students))






//4 Given an array of strings, use the reduce function to find the total length of all the strings combined.

const totalLengthOfStrings = arrayOfStrings => arrayOfStrings.reduce((total, el)=>{

    return total + el.length
},0)