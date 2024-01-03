// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// SOLUTION

//Parameters:Takes in a string of integers
//Returns: It is supposed to return the highest number and the lowest number
//Pseudocode:
  //split the string of integers eliminating the space
  //sort the split string of integers
  //return the number in the first and last index.

  function highAndLow(numbers){
    // ...
    numsSplit = numbers.split(' ').sort((a,b) => a - b)
    
    firstNum = numsSplit[0]
    lastNum = numsSplit[numsSplit.length - 1]
    result = [lastNum, firstNum].join(' ')
    
    return result
  }