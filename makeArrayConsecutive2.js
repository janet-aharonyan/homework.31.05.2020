// CodeSignal

function makeArrayConsecutive2(statues) {
    let result = Math.max(...statues) - Math.min(...statues) + (1 - statues.length);
      
      return result;
    }
     console.log(makeArrayConsecutive2([6, 2, 3, 8]));
