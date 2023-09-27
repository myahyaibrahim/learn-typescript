describe("Array", () => {
  it("Should same with js", () => {
    const names: string[] = ["yahya", "ibrahim"];
    const values: number[] = [1, 2];

    console.info(names);
    console.info(values);
  });

  it("should support readonly array", () => {
    const hobbies: ReadonlyArray<string> = ["Baca", "Main"];

    console.info(hobbies);

    // Error
    // hobbies[0] = "Tidur";
  });

  it("Should support tupple", () => {
    const TuppleExample: readonly [string, number] = ["Baca", 2];

    console.info(TuppleExample);

    // Error
    // hobbies[0] = "Tidur";
  });
});
