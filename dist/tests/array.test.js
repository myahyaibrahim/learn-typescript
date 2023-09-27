"use strict";
describe("Array", () => {
    it("Should same with js", () => {
        const names = ["yahya", "ibrahim"];
        const values = [1, 2];
        console.info(names);
        console.info(values);
    });
    it("should support readonly array", () => {
        const hobbies = ["Baca", "Main"];
        console.info(hobbies);
        // Error
        // hobbies[0] = "Tidur";
    });
    it("Should support tupple", () => {
        const TuppleExample = ["Baca", 2];
        console.info(TuppleExample);
        // Error
        // hobbies[0] = "Tidur";
    });
});
