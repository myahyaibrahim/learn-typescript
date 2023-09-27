"use strict";
describe("Loop", () => {
    it("It should suport for loop", function () {
        const names = ["Mohammad", "Yahya", "Ibrahim"];
        for (let i = 0; i < names.length; i++) {
            console.info(names[i]);
        }
        for (const name of names) {
            console.info(name);
        }
        for (const index in names) {
            console.info(names[index]);
        }
    });
    //   While loop
    it("It should suport while loop", function () {
        let counter = 0;
        while (counter < 10) {
            console.info(counter);
            counter++;
        }
    });
    //   Do-While loop
    it("It should suport do-while loop", function () {
        let counter = 0;
        do {
            console.info(counter);
            counter++;
        } while (counter < 10);
    });
});
