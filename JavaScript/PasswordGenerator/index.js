const passwordLength = 9999;
const includeLowerscase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(
  passwordLength,
  includeLowerscase,
  includeNumbers,
  includeSymbols) 
{
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+";

  let allowedChars = "";
  let password = "";
  allowedChars += includeLowerscase ? lowerCaseChars : "";
  allowedChars += includeUppercase ? upperCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (passwordLength < 1) {
    return "Password length must be at least 1 character";
  } 
  else if (allowedChars === "") {
    return "Must select at least one character type";
  } 
  else {
    for(let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
  }
  return `Generated password: ${password}`;

}
}
const password = generatePassword(
  passwordLength,
  includeLowerscase,
  includeNumbers,
  includeSymbols
);

console.log(password);
