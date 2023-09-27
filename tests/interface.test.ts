import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe("Interfacce", () => {
  // Interface
  it("Should support Interface", () => {
    const seller: Seller = {
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
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  // Indexable interface
  it("Should support Indexable Interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Mohammad", "Yahya", "Ibrahim"];

    console.info(names[0]);
    console.info(names[1]);
    console.info(names[2]);
  });

  it("Should support Indexable Interface with Object", () => {
    interface StringDictionary {
      [key: string]: string;
    }

    const dict: StringDictionary = {
      name: "Yahya",
      address: "Ciomas",
    };

    console.info(dict);

    expect(dict["name"]).toBe("Yahya");
  });

  it("Should support extend interface", () => {
    const employee: Employee = {
      id: "1",
      name: "Yahya",
      division: "IT",
    };

    console.info(employee);

    const manager: Manager = {
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

    const person: Person = {
      name: " Yahya",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("yahya"));
  });

  // Intersection Types
  it("Should support Intersection types", () => {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: "1",
      name: "Yahya",
    };

    console.info(domain);
  });

  // Assertion types
  it("Should support Assertion types", () => {
    const person: any = {
      name: "Yahya",
      age: 30,
    };

    const person2: Person = person as Person;

    // Harus hati2 karena dipaksa attributenya

    console.info(person2);
  });
});
