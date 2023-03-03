// Write a function that takes a string of words separated by space and 
// returns an array with the string of word separated by its length.

input = 'apple ban'
output = ["apple 5", "ban 3"]

input = 'you will win'
output = ["you 3", "will 4", "win 3"]

const anonymousFunction = string => string.split(" ").map(word => $ {
        word
    }
    $ {
        word.length
    })

console.log(anonymousFunction('you will win'))





// Given an array of objects, write a code for "getOutput" function to return the first object that contains a specific given key-value pair.
// eg:

const arr = [{
    name: "John",
    age: 25
}, {
    name: "Sarah",
    age: 30
}, {
    name: "Bob",
    age: 20
}]
const key = "age"
const value = 25

console.log(getOutput(arr, key, value)); // Output: {name: "John", age: 25}

const getOutput = (arr, key, value) => arr.find(object => object[key] === value





        // Given an array of strings, use the filter method to return a new array containing only the strings that are palindromes.
        Input: ["racecar", "banana", "level", "apple"] Output: ["racecar", "level"]


        const isStringPalindrome = str => {
            for (let i = 0; i < str.length; i++) {
                if (str[i] !== str[str.length - 1 - i]) {
                    return false
                }
            }
            return true
        }

        const anonymouFunction = array => array.filter(isStringPalindrome)



        // Write a function to calculate sum of n elements where n >=2

        console.log(sumOfN(1, 2, 3)) // output: 6
        console.log(sumOfN(1, 2, 3, 4)) // output: 10


        const sumOfN = (...arr) => {
            let sum = 0;
            for (let element of arr) {
                sum += element
            }
            return sum
        }





        // write a function which will take an array of "n" numbers as an argument and will return the object containing maximum number, minimum number and avg of all numbers in array.

        sample e.g. -
        console.log(getOutput([1, 2, 3, 4, 5])) // output : {max: 5, min: 1, avg: 3}

        note: do it without using any inbuilt
        function

        const getOutput = arr => {
            let maxValue = arr[1];
            let minValue = arr[1];
            let sum = 0


            arr.map(num => {

                sum += num
                if (num > maxValue) {
                    maxValue = num
                }

                if (num < minValue) {
                    minValue = num
                }
            })
            let average = sum / arr.length
            return {
                maxValue,
                minValue,
                average
            }
        }