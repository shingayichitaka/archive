import { describe, expect, it, test } from "vitest";
// import { calcBMI } from "../projects/bmi_calc/bmi_calc.js";

const calcBMI = function (weight, height) {
  const bmi = Number((weight / height ** 2).toFixed(2));
  return bmi;
};

describe("calcBMI()", () => {
  it("should return the correct BMI", () => {
    // Arrange
    const weight = 150;
    const height = 1.82;

    // Act
    const result = calcBMI(weight, height);

    // Assert
    const expected = Number((weight / height ** 2).toFixed(2));
    expect(result).toBe(expected);
  });

  it("should return NaN if either weight or height is not a valid number", () => {
    // Arrange
    const scenarios = {
      first: {
        weight: 1000,
        height: "demo",
      },
      second: {
        weight: "demo",
        height: 100,
      },
    };

    // Act
    const resultA = calcBMI(scenarios.first.weight, scenarios.first.height);
    const resultB = calcBMI(scenarios.second.weight, scenarios.second.height);

    // Assert
    expect(resultA).toBeNaN();
    expect(resultB).toBeNaN();
  });

  it("should not throw an error if it weight and height are numbers", () => {
    // Arrange
    const weight = 150;
    const height = 1.82;

    // Act
    const result = function () {
      return calcBMI(weight, height);
    };

    // Assert
    expect(result).not.toThrowError();
  });

  it("should return BMI as a number", () => {
    // Arrange
    const weight = 150;
    const height = 1.82;

    // Act
    const result = calcBMI(weight, height);

    // Assert
    expect(result).toBeTypeOf("number");
  });
});
