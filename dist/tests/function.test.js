"use strict";
describe("Function", () => {
    it("Should support Function", () => {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("Yahya")).toBe("Hello Yahya");
        function printHello(name) {
            console.info(`Hello ${name}`);
        }
        printHello("Ibrahim");
    });
    //   Function parameter
    it("Should support Function Parameter", () => {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest");
    });
    //   Rest parameter
    it("Should support Rest Parameter", () => {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    //   Function overloading
    it("Should support Function overloading", () => {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe("Yahya")).toBe("YAHYA");
        expect(callMe(10)).toBe(100);
    });
    it("Should support Function as parameter", () => {
        function sayHello(name, filter) {
            return `Hello ${filter(name)}`;
        }
        function toUpper(name) {
            return name.toUpperCase();
        }
        expect(sayHello("yahya", toUpper)).toBe("Hello YAHYA");
        expect(sayHello("yahya", function (name) {
            return name.toUpperCase();
        })).toBe("Hello YAHYA");
        // Arrow function
        expect(sayHello("yahya", (name) => name.toUpperCase())).toBe("Hello YAHYA");
    });
});
