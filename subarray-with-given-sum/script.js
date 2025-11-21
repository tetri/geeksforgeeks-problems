function subarraySum(arr, target) {
  const n = arr.length;
  let currentSum = 0;
  let start = 0;

  for (let end = 0; end < n; end++) {
    currentSum += arr[end];

    while (currentSum > target) {
      currentSum -= arr[start];
      start++;
    }

    if (currentSum === target) {
      return [start + 1, end + 1];
    }
  }

  return [-1];
}

module.exports = subarraySum;
