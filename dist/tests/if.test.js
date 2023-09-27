"use strict";
describe("IF statement", () => {
    it("Should support IF function", () => {
        const examValue = 90;
        if (examValue > 80) {
            console.info("Good");
        }
        else if (examValue > 60) {
            console.info("Not Bad");
        }
        else {
            console.info("Try again");
        }
    });
    it("Should support Ternary operator", () => {
        const value = 80;
        const say = value >= 75 ? "Congrats" : "Try again";
        console.info(say);
    });
    it("Should support Switch statement", () => {
        function sayHello(name) {
            switch (name) {
                case "Eko":
                    return "Hi Eko";
                case "Budi":
                    return "Hi Budi";
                default:
                    return "Hello";
            }
        }
        expect(sayHello("Eko")).toBe("Hi Eko");
    });
});
