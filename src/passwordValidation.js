export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
let password = ""
let removingLetters = password.replace(/[A-Za-z]/g, '').split('').sort((a, b) => b - a)
let sortingPassword = removingLetters
export default function isValidPassword(password) {
  if (typeof password !== "string") password = String(password);
  const validPassword = /^[A-Za-z0-9]+$/.test(password)
  if (password.length !== 10) return false
  
 if (!validPassword) return false
  
  // containing letters
   if (!/^[A-Za-z]/.test(password)) return false
  
  // password should contain numbers
   if (!/[0-9]/.test(password)) return false
  
  //password should conatin upperCase

   if (!/[A-Z]/.test(password)) return false
  
  // password should ot be sorted
   if (sortingPassword) 
    return false
  
  //password should have lowerCase
   if (!/[a-z]/.test(password)) return false
  


  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
