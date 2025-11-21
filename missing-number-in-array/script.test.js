const missingNum = require("./script");

// Input: arr[] = [1, 2, 3, 5]
// Output: 4
// Explanation: All the numbers from 1 to 5 are present except 4.

// Input: arr[] = [8, 2, 4, 5, 3, 7, 1]
// Output: 6
// Explanation: All the numbers from 1 to 8 are present except 6.

// Input: arr[] = [1]
// Output: 2
// Explanation: Only 1 is present so the missing element is 2.

test("missingNum 1", () => {
  expect(missingNum([1, 2, 3, 5])).toEqual(4);
});

test("missingNum 2", () => {
  expect(missingNum([8, 2, 4, 5, 3, 7, 1])).toEqual(6);
});

test("missingNum 3", () => {
  expect(missingNum([1])).toEqual(2);
});

test("missinNum 4", () => {
  expect(missingNum([2, 3])).toEqual(1);
});
