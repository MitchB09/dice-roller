import { sum, removeHighest, removeLowest } from "./utils";

describe("sum returns the total sum of the given array", () => {
  it("returns sum of multiple values", () => {
    const result = sum([1, 2, 3, 4]);
    expect(result).toBe(10)
  });

  it("return number when single value", () => {
    const result = sum([4]);
    expect(result).toBe(4)
  });

  it("return zero when emptry array", () => {
    const result = sum([]);
    expect(result).toBe(0)
  });
});

describe("removeLowest removes one instance of the lowest value", () => {
  it("removes lowest of all unique values", () => {
    const result = removeLowest([1, 2, 3, 4]);
    expect(result).toHaveLength(3)
    expect(result).toContain(2);
    expect(result).toContain(3);
    expect(result).toContain(4);
  });

  it("removes one of lowest when duplicate values", () => {
    const result = removeLowest([1, 2, 1, 4]);
    expect(result).toHaveLength(3)
    expect(result).toContain(1);
    expect(result).toContain(2);
    expect(result).toContain(4);
  });

  it("removes one when all duplicate values", () => {
    const result = removeLowest([6, 6, 6, 6]);
    expect(result).toHaveLength(3)
    expect(result).toContain(6);
    expect(result).toContain(6);
    expect(result).toContain(6);
  });
});

describe("removeHighest removes one instance of the highest value", () => {
  it("removes highest of all unique values", () => {
    const result = removeHighest([1, 2, 3, 4]);
    expect(result).toHaveLength(3)
    expect(result).toContain(1);
    expect(result).toContain(2);
    expect(result).toContain(3);
  });

  it("removes one of highest when duplicate values", () => {
    const result = removeHighest([1, 2, 4, 4]);
    expect(result).toHaveLength(3)
    expect(result).toContain(1);
    expect(result).toContain(2);
    expect(result).toContain(4);
  });

  it("removes one when all duplicate values", () => {
    const result = removeHighest([6, 6, 6, 6]);
    expect(result).toHaveLength(3)
    expect(result).toContain(6);
    expect(result).toContain(6);
    expect(result).toContain(6);
  });
});