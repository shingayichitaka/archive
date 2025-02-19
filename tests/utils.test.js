import { describe, expect, it } from "vitest";
import { cleanProjectName, cleanProjectURL } from "../utils";

describe("cleanProjectName()", function () {
  it("should return the correctly mutated string", () => {
    // Arrange
    const example = "bmi calc";

    // Act
    const result = cleanProjectName(example);

    // Assert
    const expected = "Bmi Calc";
    expect(result).toBe(expected);
  });
});

describe("cleanProjectURL()", function () {
  it("should return the correctly mutated string", () => {
    // Arrange
    const example = "bmi calc";

    // Act
    const result = cleanProjectURL(example);

    // Assert
    const expected = `/frontend/projects/bmi_calc/bmi_calc.html`;
    expect(result).toBe(expected);
  });
});
