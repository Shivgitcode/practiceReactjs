  function randomNumber(start,end){
    return Math.floor(Math.random()*(end-start))+start
  }

  function randomLowerCaseLetter(){
    const str=randomNumber(97,122);
    // const value=
    return String.fromCharCode(str)
  }

  function randomUpperCaseLetter(){
    const str=randomNumber(65,90)
    return String.fromCharCode(str)
  }

  function randomNums(){
    const str=randomNumber(48,50)
    return String.fromCharCode(str)
  } 


  console.log(randomLowerCaseLetter())
  console.log(randomUpperCaseLetter())
  console.log(randomNums())

  const functions=[randomNums,randomLowerCaseLetter,randomUpperCaseLetter]
  console.log(functions)
  // console.log(functions[0]())

  function generateRandomPassword() {
    let passwd = "";
    for (let i = 0; i <= functions.length; i++) {
      let randomNumber = functions[i]();
      passwd += randomNumber;
    }
    return passwd;
  }

export default generateRandomPassword