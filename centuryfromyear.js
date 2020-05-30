// CodeSignal

function centuryFromYear(year) {
    return ((year - 1) - ((year - 1) % 100)) / 100 + 1;
  }
  console.log(centuryFromYear(1905));
