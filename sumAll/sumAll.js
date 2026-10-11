const sumAll = function (startNumber, endNumber) {
  if (
    startNumber > 0 &&
    endNumber > 0 &&
    Number.isInteger(startNumber) &&
    Number.isInteger(endNumber)
  ) {
    let result = 0;
    if (startNumber > endNumber) {
      let temp = startNumber;
      startNumber = endNumber;
      endNumber = temp;
    }
    for (let i = startNumber; i <= endNumber; i++) {
      result += i;
    }
    return result;
  } else {
    return "ERROR";
  }
};
