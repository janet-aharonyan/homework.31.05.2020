// HackerRank Day2: Conditional Statements: If-Else

function getGrade(score) {
    let grade = [5, 10, 15, 20, 25, 30];
  
    for (let i = 0; i < grade.length; i++) {
      if (grade[i] >= score) {
        grade = grade[i];
        break;
      }
    }
    
    return (grade === 5) ? "F" : (grade === 10) 
    ? "E" : (grade === 15) ? "D" : (grade === 20) 
    ? "C" : (grade === 25) ? "B" : (grade === 30) 
    ? "A" : "Enter a number less than 0 or equal to 30";
  }
