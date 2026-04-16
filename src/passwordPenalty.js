/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more
 *  are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, 
  // like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  // * * * INSERT YOUR CODE HERE * * * * * * * * * * * * * *
  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  //
const characters = [...password]
let points = 0
let count= 1
for (let i=0; i<characters.length;i++){
  if(characters[i] === characters[i+1]){
    count++
  }
  else{

    if (count === 2) {
      return points+=1
    }
    else if(count>= 3){
      return points+=2
    }
  }
  return points
}
  
}
