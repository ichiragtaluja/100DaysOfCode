//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.reduce((acc, element)=> {
      if (typeof element !== "string"){
        acc.push(element)
      }
      return acc
    }, [])
   }





//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
   
   var uniqueInOrder = function(iterable){
    if (typeof iterable === 'string') {
      iterable = iterable.split('');
    }
    
    return iterable.reduce(
      (arr, element) => {
        if (arr.length === 0 || element !== arr[arr.length - 1]) {
          arr.push(element);
        }
        return arr;
      },
      []
    );
  }



//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {
    let [a,b] = numbers.sort((a,b) => a-b)
    return a + b
}
   
    

//You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.


function printerError(s) {
        // your code
    const lengthOfS = s.length;
    const arrayOfS = s.split("")
    const numerator = arrayOfS.reduce((acc, element)=>{
      if (element > "m"){
        acc+= 1
      }
      
      return acc},0)
    return (`${numerator}/${lengthOfS}`)
}





// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


function getMiddle(s)
{
  return s.length % 2 === 0 ? `${s[s.length/2 - 1]}${s[s.length/2]}` : s[Math.floor(s.length/2)]
}




// Given a string of words, you need to find the highest scoring word.

function high(x){
  const newArray = x.split(" ")
  const scoreArray = []
  newArray.forEach((word)=>{
    let score = 0
    for (let i = 0; i < word.length; i++){
      score += word.charCodeAt(i) - 96
    }
    scoreArray.push(score)
})

const maxValue = Math.max(...scoreArray)
const indexValue = scoreArray.findIndex(maxValue)
return newArray[indexValue]

}