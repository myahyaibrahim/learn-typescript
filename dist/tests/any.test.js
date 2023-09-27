"use strict";
describe("Any", () => {
    it("Should support any in ts", () => {
        const person = {
            id: 1,
            name: "Yahya Ibrahim",
            age: 21,
        };
        person.age = "31";
        person.address = "Ciomas";
        console.info(person);
    });
});
