import { Customer, CustomerType } from "../src/enum";

describe("Enum", () => {
  it("Should support Enum", () => {
    const customer: Customer = {
      id: 1,
      name: "yahya",
      type: CustomerType.GOLD,
    };

    // Type-nya number
    console.info(customer);
  });
});
