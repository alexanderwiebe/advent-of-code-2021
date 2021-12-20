import calc from "./day04";
describe("Calc", () => {
  it("should return 10 for add(6, 4)", () => {
    expect(calc.add(6, 4)).toBe(10);
  });
  it("should return 9 for add(10, -1)", () => {
    expect(calc.add(10, -1)).toBe(9);
  });
});
