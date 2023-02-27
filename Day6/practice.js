// 1. You will be given an array of numbers and a target number, two numbers from the given array add up to the target number. find the indices of the two numbers and return them as a string.

const targetNumber = [11];

const twoSum = (arrName, target) => {
 //your code here;
for (let i = 0; i < arrName.length; i ++) {
     for (let j = 0; j < arrName.length; j ++) {
         if (arrName[i] + arrName[j] === 11) {
             return `${i}th and ${j}th index add up to ${target}`
         }
     }
 }
}

console.log(twoSum(arrGiven, targetNumber));
// "3rd and 4th index add up to 11"





// 2. You are given a string that contains consecutive words that are same, return a string will all the repeating consecutive words removed.


const strInput = "hey hey you you have a a nice day day hey"

const removeRepeatingWords = strInput => {
	//your code here
let newArr = [];
    const oldArray = strInput.split(" ")
    
    
    oldArray.forEach((word) => {
        if (newArr[newArr.length - 1] !== word || newArr.length === 0) {
            newArr.push(word)
        }
    })
    
    return newArr
}

console.log(removeRepeatingWords(strInput));
//"hey you have a nice day hey"



// You are given an lower case string and an array of numbers, capitalize the characters that lie on the indices determined by the numbers in the array.

const strGiven = "abcdefgh";
const arrGiven = [2,4,5];

const indexedCapitalizer = (str, arr) => {
    let conArr = [...str]
   arr.forEach((num)=>{
       conArr[num] = conArr[num].toUpperCase()
   })
   let newStr = conArr.join("")
   return newStr
    
}

console.log(indexedCapitalizer(strGiven,arrGiven));
//"abCdEFgh"






// 4. Your are giving a sring that has uppercase and lowercase characters, change the string completely to upper or lover case, based on what would take the least amoun of changes.


strOne = "onE";
strTwo = "OnE";


const upperOrLower = (str) => {
 //your code here
 let numOfCapitalLetters = 0
 for (let letter of str) {
     if (letter === letter.toLocaleUpperCase()) {
         numOfCapitalLetters += 1;
     }
 }
 return str.length - numOfCapitalLetters > numOfCapitalLetters ? str.toLowerCase(): str.toUpperCase()
}


console.log(upperOrLower(strOne));
//"one"
console.log(upperOrLower(strTwo));
//"ONE"
