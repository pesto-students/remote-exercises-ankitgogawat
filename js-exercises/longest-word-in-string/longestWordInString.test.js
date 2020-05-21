import { longestWordInString } from "./longestWordInString";

describe("longestWordInString", () => {
  // write your own test cases
  it("should return the longest word from the string", () => {
    expect(
      longestWordInString(
        "This ia a test string data to check the longest word which is automatically"
      )
    ).toBe("automatically");
  });
});
