// HackerRank Day3: Throw

function isPositive(a) {
    try {
        if (a === 0)
        throw Error('Zero Error');
    if (a < 0)
        throw Error('Negative Error');
    
    return 'YES';
    } catch (error) {
        return error.message;
    }
  }
