import { describe, expect, it } from "vitest";

const calcInterest = function (principle, rate, time) {
  return (principle * rate * time) / 100;
};

describe("calcInterest()", () => {
  it("should return the correct interest value", () => {
    // Arrange
    const principle = 1000;
    const rate = 5;
    const time = 3;

    // Act
    const result = calcInterest(principle, rate, time);

    // Assert
    const expected = (principle * rate * time) / 100;
    expect(result).toBe(expected);
  });

  it("should return the interest as a number", () => {
    // Arrange
    const principle = 1000;
    const rate = 5;
    const time = 3;

    // Act
    const result = calcInterest(principle, rate, time);

    // Assert
    expect(result).toBeTypeOf("number");
  });
});
