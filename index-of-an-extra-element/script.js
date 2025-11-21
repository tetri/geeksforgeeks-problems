function findExtra(a, b) {
  const max = Math.max(a.length, b.length);
  for (let i = 0; i < max; i++) {
    if (a[i] !== b[i]) {
      return i;
    }
  }
  return -1;
}

module.exports = findExtra;
