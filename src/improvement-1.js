/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, 
 * THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function CountLetterR(str) {
  // let count = 0;
  // for (let i = 0; i < str.length; i++) {
  //   if (ls[i] == "R") {
  //     cnt++;
  //   }

  // changing the string to an array
  let stringArray = str.spilt('')
  
  //filtering the letter R in the array 
  let letterR= stringArray.filter(char => char === 'R')

// return the size of R
  return letterR.length
}
