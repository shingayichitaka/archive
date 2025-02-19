import { describe, expect, it } from "vitest";

const calcWordLength = function (word) {
  return word.length;
};

describe("word_length_calc()", () => {
  it("should return the correct word length", () => {
    // Arrange
    const word = "Hello";
    // Act
    const result = calcWordLength(word);
    // Assert
    const expected = word.split("").length;
    expect(result).toBe(expected);
  });
});
