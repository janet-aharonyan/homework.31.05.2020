// CodeSignal

function checkPalindrome(inputString) {

    let printString = inputString.slice();
    let stringLengt = Math.ceil(printString.length/2);
    let firstPartOfTheLine = printString.slice(0, stringLengt);
    let lastPartOfTheLine = printString.split("").reverse().join("").slice(0, stringLengt);
  
    return (firstPartOfTheLine === lastPartOfTheLine ) ? true : false;
  }
   console.log(checkPalindrome("aabaa"));
