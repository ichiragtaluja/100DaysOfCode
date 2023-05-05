
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

var canConstruct = function(ransomNote, magazine) {
    for (let i = 0; i < magazine.length; i++){
      ransomNote = ransomNote.replace(magazine[i],"")
    }
    return (!ransomNote ? true : false)     
    
};



// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.


Array.prototype.last = function() {
    return (this.length ? this[this.length-1] : -1)
}


// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

var createCounter = function(n) {
   
    let count = n 
    return function(){
        count++;
        return count - 1
    }
 };