const findExtra = require("./script");

// Input: a[] = [2,4,6,8,9,10,12], b[] = [2,4,6,8,10,12]
// Output: 4
// Explanation: In the first array, 9 is extra added and it's index is 4.

// Input: a[] = [3,5,7,8,11,13], b[] = [3,5,7,11,13]
// Output: 3
// Explanation: In the first array, 8 is extra and it's index is 3.

// Input: a[] = [3,5], b[] = [3]
// Output: 1
// Explanation: In the first array, 5 is extra and it's index is 1.

test("findExtra 1", () => {
  expect(findExtra([2, 4, 6, 8, 9, 10, 12], [2, 4, 6, 8, 10, 12])).toEqual(4);
});

test("findExtra 2", () => {
  expect(findExtra([3, 5, 7, 8, 11, 13], [3, 5, 7, 11, 13])).toEqual(3);
});

test("findExtra 3", () => {
  expect(findExtra([3, 5], [3])).toEqual(1);
});
