function missingNum(arr) {
  arr.sort((a, b) => a - b);
  if (arr[0] != 1) return 1;
  else arr.push(1);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
}

module.exports = missingNum;
