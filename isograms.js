// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


//Parameter: Takes in a string
// Returns true or false
  //if there are no repeating letters returns true
  //if there are repeating letters returns false.

//Pseudocode:
  //A for loop that goes through the string twice
  //if the first loop encounters a value similar to it return false, if it doesn't return true
  //Should I split the string? We'll find out.

  function isIsogram(str){
    const lowerStr = str.toLowerCase()
    const letters = []
    
    for (let letter of lowerStr){
      if(letters.includes(letter)){
        return false
      }
      letters.push(letter)
    }
    return true
  }