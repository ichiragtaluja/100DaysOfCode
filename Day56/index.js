// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    let r =  s.split(" ");
    let t = r.reverse()
    let u = t.find((el)=>el.length > 0)
    return u.length
};



// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

var plusOne = function(digits) {
    let n = Number(digits.join("")) + 1
    let r = n.toString()
    return r.split("")
    
};