// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

// SOLUTION

//Parameters: The function takes in two integers, a and b
//Returns: It returns the sum of integers in between and including a and b.
//Pseudocode: 
  //Initialize count
  //Loop through the numbers using a as a start point and b as the end point and add to the count.
  //if the two numbers are equal return a or b
  //Else return count


  function getSum(a, b)
  {
    if (a > b) {
      [a, b] = [b, a]
    }
    
    let count = 0
    
    for (let i = a; i <= b; i++){
      count += i
    }
    
    return count
  }