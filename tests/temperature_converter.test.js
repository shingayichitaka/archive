import { describe, expect, it, test } from "vitest";

const celsiusToFarenheit = (celsius) =>
  Number((celsius * (9 / 5) + 32).toFixed(2));

describe("celsiusToFarenheit()", () => {
  it("should return correct farenheit value", () => {
    // Arrange
    const celsius = 26;
    // Act
    const result = celsiusToFarenheit(celsius);
    // Assert
    const expected = 78.8;
    expect(result).toBe(expected);
  });
  it("should return correct farenheit value as type: number", () => {
    // Arrange
    const celsius = 26;
    // Act
    const result = celsiusToFarenheit(celsius);
    // Assert
    expect(result).toBeTypeOf("number");
  });
  it("should return NaN if celsius input is not a number", () => {
    const celsius = "test";
    const result = celsiusToFarenheit(celsius);
    expect(result).toBeNaN();
  });
});
