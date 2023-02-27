// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:


function domainName(url){
    let newUrl = url
    if (url.includes("www.")){
      newUrl = url.slice(url.indexOf("www.") + 4, url.indexOf(".",url.indexOf("www.") + 4))
    }
    else if (url.includes("://")) {
        newUrl = url.slice(url.indexOf("://") + 3, url.indexOf(".", url.indexOf("://") + 3))
    }
    else { 
        newUrl = url.slice(0, url.indexOf("."))
    }
    return newUrl
}




// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

function narcissistic(value) {
    const newArr = value.toString().split("")
    const sumValue = newArr.reduce((sum, num)=>{
        return sum += Math.pow(Number(num), newArr.length)
    }, 0)
    
  return sumValue === value
  }




// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
    return [...word].reduce((arr, char)=>{
         let numberOfTimes = 0
         for(let element of word){
             if (element.toUpperCase() === char.toUpperCase()){
                 numberOfTimes+=1
             }
         }
          numberOfTimes > 1 ? arr.push("(") : arr.push(")")
          return arr
         
     }, [])
 }
 
 console.log(duplicateEncode("hiiii"))