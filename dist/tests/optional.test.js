"use strict";
describe("Optional parameter", () => {
    it("Should support Optional parameter", () => {
        function sayHello(name) {
            if (name) {
                console.info(`Hello name ${name}`);
            }
            else {
                console.info("Hello");
            }
        }
        sayHello("Yahya");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
