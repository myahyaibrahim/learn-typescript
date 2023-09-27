describe("Interfacce", () => {
    // Interface
    it("Should support Interface", () => {
        const seller = {
            id: 1,
            name: "Toko Yahya",
            nib: "NIB123",
            npwp: "NPWP123",
        };
        console.info(seller);
        seller.name = "Toko Ibrahim";
        console.info(seller);
        // error - Readonly
        // seller.nib = "Ubah NIB";
    });
    // Function interface
    it("Should support Function Interface", () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    // Indexable interface
    it("Should support Indexable Interface", () => {
        const names = ["Mohammad", "Yahya", "Ibrahim"];
        console.info(names[0]);
        console.info(names[1]);
        console.info(names[2]);
    });
    it("Should support Indexable Interface with Object", () => {
        const dict = {
            name: "Yahya",
            address: "Ciomas",
        };
        console.info(dict);
        expect(dict["name"]).toBe("Yahya");
    });
    it("Should support extend interface", () => {
        const employee = {
            id: "1",
            name: "Yahya",
            division: "IT",
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Yahya",
            division: "IT",
            numberOfEmployees: 10,
        };
        console.info(manager);
    });
    // Function di interface
    it("Should support function in interface", () => {
        // interface Person {
        //   name: string;
        //   sayHello(name: string): String;
        // }
        const person = {
            name: " Yahya",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.info(person.sayHello("yahya"));
    });
    // Intersection Types
    it("Should support Intersection types", () => {
        const domain = {
            id: "1",
            name: "Yahya",
        };
        console.info(domain);
    });
    // Assertion types
    it("Should support Assertion types", () => {
        const person = {
            name: "Yahya",
            age: 30,
        };
        const person2 = person;
        // Harus hati2 karena dipaksa attributenya
        console.info(person2);
    });
});
export {};
