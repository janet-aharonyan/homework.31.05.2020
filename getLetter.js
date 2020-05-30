// HackerRank Day2: Conditional Statements: Switch

function getLetter(s) {
    let letter;
for (let i = 0; i < s.length; i++) { 
    switch (s[0]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
          letter = "A";
        break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
          letter = "B";
        break;
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":     
          letter = "C";
        break;
        case "n":
        case "p":
        case "q":
        case "r":
        case "s":
        case "t": 
        case "v":
        case "w":
        case "y":
        case "z":
          letter = "D";
        break;
        default:
          console.log("This is a very tedious task ");
          break;
    }
    }
      return letter;
    }
  
