// HackerRank Day3: Arrays

function getSecondLargest(nums) {
    let el = nums[0];
    let result;
    for (leti of nums) {
      if (el < i) {
        el = i;
      }
    }
    for (let i of nums) {
      if (el - i === 1) {
        result = i
      }
    }
  
    return result;
  
  }
