function randomNumber(start, end) {
  return Math.floor(Math.random() * (end - start)) + start;
}

function randomLowerCaseLetter() {
  const str = randomNumber(97, 122);
  // const value=
  return String.fromCharCode(str);
}

function randomUpperCaseLetter() {
  const str = randomNumber(65, 90);
  return String.fromCharCode(str);
}

function randomNums() {
  const str = randomNumber(48, 50);
  return String.fromCharCode(str);
}

console.log(randomLowerCaseLetter());
console.log(randomUpperCaseLetter());
console.log(randomNums());

const functions = [randomNums, randomLowerCaseLetter, randomUpperCaseLetter];
console.log(functions);
// console.log(functions[0]())

function generateRandomPassword() {
  let passwd = "";
  const f = 1;
  // console.log(functions);
  for (let q = 0; q < functions.length; q++) {
    let randomNumber = functions[q]();
    passwd += randomNumber;
  }

  for (let q = 0; q < 8 - functions.length; q++) {
    var c = randomNumber(0, 2);
    let random = functions[c]();
    passwd += random;
  }

  return passwd;
}

function shufflePassword() {
  var oldPass = generateRandomPassword();
  var newPass = "";
  for (let i = 0; i < oldPass.length; i++) {
    var rnd = randomNumber(0, oldPass.length - 1);
    newPass += oldPass[rnd];
  }
  return newPass;
}

export default shufflePassword;
