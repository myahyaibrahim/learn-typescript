"use strict";
describe("Object", () => {
    it("Should support Object", () => {
        const person = {
            id: "1",
            name: "Yahya Ibrahim",
        };
        console.info(person);
        person.id = "2";
        person.name = "Ibrahim";
        console.info(person);
        // Error
        // person.description = "Contoh desc";
    });
});
