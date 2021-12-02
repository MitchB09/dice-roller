import diceRoll from "./index";

const rollEm = (diceStr: string, expectedMin: number, expectedMax: number) => {
  for (let i = 0; i < 100; i++) {
    const roll = diceRoll(diceStr);
    expect(roll).toBeGreaterThanOrEqual(expectedMin);
    expect(roll).toBeLessThanOrEqual(expectedMax);
  }
};

describe("Rolls dice with expected results", () => {
  it("expects 1d4 to be between 1 and 4", () => {
    rollEm("1d4", 1, 4);
  });

  it("expects 1d6 to be between 1 and 4", () => {
    rollEm("1d6", 1, 6);
  });

  it("expects 1d8 to be between 1 and 4", () => {
    rollEm("1d8", 1, 8);
  });

  it("expects 1d12 to be between 1 and 4", () => {
    rollEm("1d12", 1, 12);
  });

  it("expects d4 to be between 1 and 4", () => {
    rollEm("d4", 1, 4);
  });

  it("expects d6 to be between 1 and 4", () => {
    rollEm("d6", 1, 6);
  });

  it("expects d8 to be between 1 and 4", () => {
    rollEm("d8", 1, 8);
  });

  it("expects d12 to be between 1 and 4", () => {
    rollEm("d12", 1, 12);
  });

  it("expects 1d4+1 to be between 2 and 5", () => {
    rollEm("1d4+1", 2, 5);
  });

  it("expects 1d4-1 to be between 0 and 3", () => {
    rollEm("1d4-1", 0, 3);
  });

  it("expects 3d100 to be between 3 and 300", () => {
    rollEm("3d100", 3, 300);
  });

  it("expects invalid string to throw error", () => {
    expect(() => diceRoll("Invalid+1")).toThrow("Unable to parse dice roll");
  });
});
