// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// Pseudocode 

// Input: array
// Output: a shuffled subset of the array minus the first item in the original array 

// Process: Remove the first item in the array (use splice or shift)  and make a variable that holds the resulting array.
// Randomize mixing up the remaining array. Apparently there is a shuffle method.
// Or try this: const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
// not totally random. Try this:
// https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj#:~:text=The%20first%20and%20simplest%20way,)%20%3D%3E%200.5%20%2D%20Math.


// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe ('shuffleArray', () => {
  it ('takes in an array, removes the first item from the array and shuffles the remaining content', () => {
expect(shuffleArray(colors1)).toContain("yellow") 
expect(shuffleArray(colors1)).toContain("blue")
expect(shuffleArray(colors1)).toContain("pink")
expect(shuffleArray(colors1)).toContain("green")
expect(shuffleArray(colors1)).not.toEqual(colors1)
expect(shuffleArray(colors2)).toContain("periwinkle") 
expect(shuffleArray(colors2)).toContain("indigo")
expect(shuffleArray(colors2)).toContain("ochre")
expect(shuffleArray(colors2)).toContain("aquamarine")
expect(shuffleArray(colors2)).toContain("saffron")
expect(shuffleArray(colors2)).not.toEqual(colors2)   
  })
})

// RED Fail ---
// FAIL  ./code-challenges.test.js
// ● shuffleArray › takes in an array, removes the first item from the array and shuffles the remaining content
//   ReferenceError: shuffleArray is not defined


const shuffleArray = (array) => {
  //.shift will remove the first element of the array
  array.shift();
  // The shuffle used here is the Fisher-Yates shuffle
  // A loop is set up to iterate over the elements of the array
  // the iteration starts at the last element of the array (array.length - 1)
  // it continues as long as i is greater than zero 
  // And i will be decremented by 1 on each iteration (i--)
  for (let i = array.length - 1; i > 0; i--) {
      //apparently, this generates a random number between 0 and i (inclusive)
      //and assigns it to the j variable
      const j = Math.floor(Math.random() * (i + 1));
      //this will destructure the arrays and swap elements at the i and j indexes
      [array[i], array[j]] = [array[j], array[i]];
  }
      // array.sort(() => Math.random() - 0.5); <-- I tried this method. It works, too. I'm not sure which is the most random shuffle method.
  return array
}

// b) Create the function that makes the test pass.
// JEST TEST - Passed the first time. I'm not sure how to write the test to take in each succeeding shift and then shuffle. It is failing now because the function is taking out the first element each time and test expects that element to be in. 


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// Pseudocode
// Input: object with upvote/downvote values.
// Output: number that is the difference of the first value in an object and the second value in the object. 

// Process: create a function called tallyVotes that accesses two values in an object 
// votes is the parameter
// return votes.upVotes minus votes.downVotes;
// subtracts the second value from the first value. Have it return the difference.


const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31


describe ('tallyVotes', (votes) => {
  it ('takes in an object that contains up votes and down votes and returns the end tally', () => {
expect(tallyVotes(votes1)).toEqual(11) 
expect(tallyVotes(votes2)).toEqual(-31)   
  })
})

// RED FAIL - 
// FAIL  ./code-challenges.test.js
//   ReferenceError: tallyVotes is not defined

// b) Create the function that makes the test pass.

const tallyVotes = (votes) => {
  return votes.upVotes - votes.downVotes
}

// GREEN PASS - 
// PASS  ./code-challenges.test.js
// tallyVotes
//   ✓ takes in an object that contains up votes and down votes and returns the end tally (1 ms)


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// Pseudocode
// Input: two arrays 
// Output: combined array without duplicate values 
// Process: Apparently there are a few ways to solve this problem, but I'm choosing this one - destructure the arrays into a new set (sets do not allow duplicates) (see link below for source).
// Create a function called removeDups. 
// Create a set to store unique values in called uniqValues that takes two arrays as arguments. let uniqValues = new Set(array1, array2). 
// Iterate through array 1 and and use .add to add each element to the new set. 
// Then iterate through the second array and add each element to the set the same way. Duplicates will be skipped and not added to a set.
// Then use .from which creates an array from an array-like object (the set) to create the final array with no duplicates

// Here is where I learned about sets: https://codeburst.io/how-to-merge-arrays-without-duplicates-in-javascript-91c66e7b74cf

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe('removeDups', () => {
  it ('should return one array with no duplicate values from two arrays - array1 and array2', () =>  {
   expect (removeDups (dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"]) 
  });
});

// RED FAIL:  FAIL  ./code-challenges.test.js

// b) Create the function that makes the test pass.

const removeDups = (array1, array2) => {
  let uniqValues = new Set()
  //iterate through array1
   for (let i = 0; i < array1.length; i++) {
     //add the values of array1 to the set called uniqValues
    uniqValues.add(array1[i])
   }
   for (let i = 0; i < array2.length; i++) {
    //iterate through array2
     //add the values of array2 to the set called uniqValues. No duplicate values will be added, because it is a set (and sets don't allow duplicate values).
     uniqValues.add(array2[i])
   }
    //  return the set as an array using .from to create it
    //Array should to be capitalized because Array.from is a constructor function used to create the array.
    return Array.from (uniqValues)
}
  
// GREEN ---PASS  ./code-challenges.test.js

