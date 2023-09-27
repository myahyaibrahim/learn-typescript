"use strict";
describe("Union", () => {
    it("Should support Union in ts", () => {
        let sample = "Yahya";
        console.info(sample);
        sample = 100;
        console.info(sample);
        sample = true;
        console.info(sample);
        // Error
        // sample = [];
    });
    it("Should support typeof operator", () => {
        function process(value) {
            if (typeof value == "string") {
                return value.toUpperCase();
            }
            else if (typeof value == "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        }
        expect(process("eko")).toBe("EKO");
        expect(process(12)).toBe(14);
    });
});
