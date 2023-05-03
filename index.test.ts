import { roll, diceRoller } from "./index";

const rollEm = (diceStr: string, expectedMin: number, expectedMax: number) => {
  for (let i = 0; i < 100; i++) {
    const complexRoll = diceRoller(diceStr);
    expect(complexRoll.total).toBeGreaterThanOrEqual(expectedMin);
    expect(complexRoll.total).toBeLessThanOrEqual(expectedMax);

    const simpleRoll = roll(diceStr)
    expect(simpleRoll).toBeGreaterThanOrEqual(expectedMin);
    expect(simpleRoll).toBeLessThanOrEqual(expectedMax);
  }
};

describe("Rolls dice with expected results", () => {
  it("expects 1d4 to be between 1 and 4", () => {
    rollEm("1d4", 1, 4);
  });

  it("expects 1d6 to be between 1 and 6", () => {
    rollEm("1d6", 1, 6);
  });

  it("expects 1d8 to be between 1 and 8", () => {
    rollEm("1d8", 1, 8);
  });

  it("expects 1d12 to be between 1 and 12", () => {
    rollEm("1d12", 1, 12);
  });

  it("expects d4 to be between 1 and 4", () => {
    rollEm("d4", 1, 4);
  });

  it("expects d6 to be between 1 and 6", () => {
    rollEm("d6", 1, 6);
  });

  it("expects d8 to be between 1 and 8", () => {
    rollEm("d8", 1, 8);
  });

  it("expects d12 to be between 1 and 12", () => {
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

  it("expects 4d6dl1 to be between 3 and 18", () => {
    rollEm("4d6dl1", 3, 18);
  });

  it("expects 4d6dh1 to be between 3 and 18", () => {
    rollEm("4d6dl1", 3, 18);
  });

  it("expects 4d6dl1+2 to be between 5 and 20", () => {
    rollEm("4d6dl1+2", 5, 20);
  });

  it("expects 4d6dh1-1 to be between 1 and 16", () => {
    rollEm("4d6dl1-1", 2, 17);
  });

  it("expects invalid string to throw error", () => {
    expect(() => diceRoller("Invalid+1")).toThrow("Unable to parse dice roll");
  });
});
