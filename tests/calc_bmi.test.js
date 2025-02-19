import { describe, expect, it, test } from "vitest";
// import { calcBMI } from "../projects/bmi_calc/bmi_calc.js";

const calcBMI = function (weight, height) {
  const bmi = Number((weight / height ** 2).toFixed(2));
  return bmi;
};

const getBMIRange = function (bmi) {
  if (bmi < 18.5) {
    return "Under-weight";
  } else if (bmi < 25) {
    return "Normal-weight";
  } else if (bmi < 30) {
    return "Over-weight";
  } else {
    return typeof bmi === "number" ? "Obese" : NaN;
  }
};

const createBMIResult = function (bmi) {
  const result = `${bmi} -- ${getBMIRange(bmi)}`;
  return result;
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

describe("getBMIRange()", () => {
  it("should return the correct range given the correct value", () => {
    // Arrange
    const a = 15;
    const b = 24.5;
    const c = 29;
    const d = 45;

    // Act
    const resultA = getBMIRange(a);
    const resultB = getBMIRange(b);
    const resultC = getBMIRange(c);
    const resultD = getBMIRange(d);

    // Assert
    expect(resultA).toBe("Under-weight");
    expect(resultB).toBe("Normal-weight");
    expect(resultC).toBe("Over-weight");
    expect(resultD).toBe("Obese");
  });

  it("should return a string if bmi is a number", () => {
    // Arrange
    const bmi = 45;
    // Act
    const result = getBMIRange(bmi);
    // Assert
    expect(result).toBeTypeOf("string");
  });

  it("should return NaN if the bmi provided is not a number", () => {
    // Arrange
    const bmi = "demo";
    // Act
    const result = getBMIRange(bmi);
    // Assert
    expect(result).toBeNaN();
  });
});
