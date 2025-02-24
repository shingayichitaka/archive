import { describe, expect, it, test } from "vitest";

const kgsToLbs = (kgs) => Number((kgs * 2.205).toFixed(2));

describe("kgsToLbs()", () => {
  it("should return the correct lbs value", () => {
    const kgs = 100;
    const result = kgsToLbs(kgs);
    const expected = 220.5;
    expect(result).toBe(expected);
  });
});
