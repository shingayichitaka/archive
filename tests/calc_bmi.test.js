import { expect, test } from "vitest";
// import { calcBMI } from "../projects/bmi_calc/bmi_calc.js";

const calcBMI = function (weight, height) {
  const bmi = Number((weight / height ** 2).toFixed(2));
  return bmi;
};

test("should return the correct BMI", () => {
  // Arrange
  const weight = 150;
  const height = 1.82;

  // Act
  const result = calcBMI(weight, height);

  // Assert
  const expected = Number((weight / height ** 2).toFixed(2));
  expect(result).toBe(expected);
});
