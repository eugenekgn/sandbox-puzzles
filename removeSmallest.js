// remove the smallest number from each array without modifying the original array

var assert = require("assert");

const removeSmallest = numbers => {};

describe("Remove smallest number from an array", () => {
  it("Example 1", () => {
    assert.equal(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  it("Example 2", () => {
    assert.equal(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4]);
  });
  it("Example 3", () => {
    assert.equal(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1]);
  });
});
