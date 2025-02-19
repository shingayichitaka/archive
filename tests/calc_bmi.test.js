import { expect, test } from "vitest";
// import { calcBMI } from "../projects/bmi_calc/bmi_calc.js";

const calcBMI = function (weight, height) {
  const bmi = Number((weight / height ** 2).toFixed(2));
  return bmi;
};

test("should return the correct BMI", () => {
  const result = calcBMI(150, 1.82);
  const expected = 45.28;
  expect(result).toBe(expected);
});
