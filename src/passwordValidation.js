export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
let password = ""
let removingLetters = password.replace(/[A-Za-z]/g,'').split('').sort((a,b)=>b-a)
let sortingPassword=removingLetters
export default function isValidPassword(password) {
  if (typeof password !== "string") password = String(password);
   const validPassword = /^[A-Za-z0-9]+$/.test(password)
  if(password.length !== 10){
    return 'the password should be atleast 10 characters'
  }
  else if(!validPassword){
    return "the inserted character is wrong"
  }
  // containing letters
  else if (!/^[A-Za-z]/.test(password)) {
  return "the password should contain with a letter";
}
// password should contain numbers
else if(!/[0-9]/.test(password)){
    return "password should have numbers"
  }
//password should conatin upperCase

else if(!/[A-Z]/.test(password)){
    return "the password should have uppercase value" 
  } 
  // password should ot be sorted
  else if(sortingPassword){
    return "password should not be ascending or descending order"
  }

  
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
