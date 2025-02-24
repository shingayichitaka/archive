import { describe, expect, it, test } from "vitest";

const cmToMeters = (cm) => Number((cm / 100).toFixed(2));

describe("cmToMeters()", () => {
  it("should return the correct meter value", () => {
    const cm = 150;
    const result = cmToMeters(cm);
    const expected = 1.5;
    expect(result).toBe(expected);
  });
});
