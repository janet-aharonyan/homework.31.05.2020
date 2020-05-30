// HackerRank Day0: Hello, World!

function greeting(parameterVariable) {
    let i = 2;
    let counter = 0;
    while (i > 0) {
      if (counter === 0) {
        console.log('Hello, World!');
        console.log("Welcome to 10 Days of JavaScript!");
        counter++;
      } else {
        console.log('Hello, World!');
        console.log(parameterVariable);
      }
      i--;
    }
  }
