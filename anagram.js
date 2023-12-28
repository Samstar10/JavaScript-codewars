// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// SOLUTION

//Parameters: This function takes in two strings
//Returns: This function should return true if the two words are anagrams and false if they're not.
//Pseudocode:
  //split both words
  //sort both words;
  //join both words
  //if sorted words are equal then return true,
  //else return false

// write the function isAnagram
const isAnagram = function(test, original) {
    const sortedTest = test.toLowerCase().split('').sort().join('')
    const sortedOriginal = original.toLowerCase().split('').sort().join('')
    
    if (sortedTest === sortedOriginal){
      return true
    }else{
      return false
    }
  };
  