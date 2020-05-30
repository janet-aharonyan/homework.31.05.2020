// CodeSignal

function adjacentElementsProduct(inputArray) {
    let productElements = 1;
    let myArray = [];
  
    for (let i = 0; i < inputArray.length - 1; i++) {
     productElements *= inputArray[i] * inputArray[i + 1];
      myArray.push(productElements);
      productElements = 1;
    }
  
    let newArray = myArray[0];
    for (let j = 0; j < myArray.length; j++) {
      if (myArray[j] > newArray) {
        newArray = myArray[j];
      }
    }
    
    return newArray;
  }
  
  console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
