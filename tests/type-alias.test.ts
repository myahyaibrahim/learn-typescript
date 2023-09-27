import { Category, Product, ID } from "../src/type-alias";

describe("Type Alias", () => {
  it("Should support alias", () => {
    const category: Category = {
      id: 1,
      name: "Handphone",
    };

    const product: Product = {
      id: "12",
      name: "samsung s20",
      price: 20000,
      category: category,
    };

    console.info(category);
    console.info(product);
  });
});
