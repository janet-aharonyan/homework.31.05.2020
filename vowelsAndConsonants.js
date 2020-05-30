// HackerRank Day2: Loops

function vowelsAndConsonants(s) {
    let letters = 'aeiou';
    let checkingOut = '';
    for (let elem of s) {
      for (let j of letters) {
        if (elem === j) {
          console.log(j);
          checkingOut += j;
        } 
      }
    }
    let i = 0;
    for (let j of s) {
      if (j !== checkingOut[i]) {
        console.log(j);
      } else {
        i++
      }
    }
  }
