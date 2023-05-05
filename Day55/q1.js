
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

var canConstruct = function(ransomNote, magazine) {
    for (let i = 0; i < magazine.length; i++){
      ransomNote = ransomNote.replace(magazine[i],"")
    }
    return (!ransomNote ? true : false)     
    
};