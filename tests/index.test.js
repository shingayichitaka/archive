import { describe, expect, test } from "vitest";
import { greet } from "../index.js";

describe("DEMO tests for index.js", () => {
  test("unit test -- greet", () => {
    const expected = "Hello John!";
    const response = greet("John");
    expect(response).toBe(expected);
  });
});
