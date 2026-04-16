/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 3
export default function findLargestNumber(values) {
  
  // sorting numbers  in descendingOrder
  let sortingNumber = values.sort((a,b)=>b-a,0)
  // returning the first element
  return sortingNumber[0]

}
