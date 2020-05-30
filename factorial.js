// HackerRank Day1: Functions

const factorial = num => {
    let result = 1;
    for (let i = num; i > 0; i--) {
      result *= i;
    }
  return result;
  }
