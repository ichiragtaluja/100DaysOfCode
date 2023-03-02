// Write a function that takes an array and returns all the numbers in a new array increased by 10.

const arrayOfNumbers = [1, 2, 3, 4, 5]

const increaseNumberBy10 = num => num + 10

console.log(arrayOfNumbers.map(increaseNumberBy10))



// Write a function that takes an array and returns a new array having even numbers multiplied by 20 and odd numbers multiplied by 30.

const arrayOfNumbers = [1, 2, 3, 4, 5]

const manupulateArray = num => num % 2 === 0 ? num20 : num30

console.log(arrayOfNumbers.map(manupulateArray))



// Write a function that takes an array and returns a new array having even indexes numbers subtracted by 2 and odd indexes numbers added by 3.

const arrayOfNumbers = [1, 2, 3, 4, 5]

const manupulateArray = (num, index) => index % 2 === 0 ? num - 2 : num + 3
console.log(arrayOfNumbers.map(manupulateArray))


// const obj = {
//     a: 10,
//     b: 12,
//     arr: [10, 8, 15, 14]
// }
// Write a program using destructing to find a number in this object which is divisible both by 3 and 5

const checkFunction = ({
    a,
    b,
    arr
}) => {

    let newArr = []

    a % 15 === 0 ? newArr.push(a) : null
    b % 15 === 0 ? newArr.push(b) : null

    const pushIfDivisibleBy15 = num => num % 15 === 0 ? newArr.push(num) : null

    arr.map(pushIfDivisibleBy15)


    return newArr
}

console.log(checkFunction(obj))



// const obj = {
//     details: [{name: 'Ankit', company: 'Chalo'},
//           {name: 'Rohan', company: 'Razorpay'},
//              {name: 'Shivam', company: 'No Broker'}
//                                  ]
// Write a function that takes the above object and returns a new array containing the company names.
// // Output: ['Chalo', 'Razorpay', 'No Broker']

const obj = {
    details: [{
            name: 'Ankit',
            company: 'Chalo'
        },
        {
            name: 'Rohan',
            company: 'Razorpay'
        },
        {
            name: 'Shivam',
            company: 'No Broker'
        }
    ]
}

const extractCompny = ({
    company
}) => company
const anonymousFunction = ({
    details
}) => details.map(extractCompny)

console.log(anonymousFunction(obj))



// const obj = {
//     details: [{name: 'Ankit', company: 'Chalo'},
//           {name: 'Rohan', company: 'Razorpay'},
//           {name: 'Shivam', company: 'No Broker'}
//                                  ]
//     }
// Write a function that takes the above object and returns a new array containing the company names for people having names starting with A.

const obj = {
    details: [{
            name: 'Ankit',
            company: 'Chalo'
        },
        {
            name: 'Rohan',
            company: 'Razorpay'
        },
        {
            name: 'Shivam',
            company: 'No Broker'
        }
    ]
}

const extractCompny = ({
    name,
    company
}) => name[0] === "A"


const findCompany = obj => obj.company


const anonymousFunction = ({
    details
}) => details.filter(extractCompny).map(findCompany)

console.log(anonymousFunction(obj))