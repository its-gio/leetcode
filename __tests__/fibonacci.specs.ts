import { fibonacci } from "../src";

describe("Fibonacci Sequence", () => {
  it("should return 0 for n = 0", () => {
    const n = 0;
    expect(fibonacci(n, [0, 1, 1])).toEqual(0);
  });

  it("should return 1 for n = 1", () => {
    const n = 1;
    expect(fibonacci(n, [0, 1, 1])).toEqual(1);
  });

  it("should return 13 for n = 7", () => {
    const n = 7;
    expect(fibonacci(n, [0, 1, 1])).toEqual(13);
  });

  it("should return 21 for n = 8", () => {
    const n = 8;
    expect(fibonacci(n, [0, 1, 1])).toEqual(21);
  });
});
