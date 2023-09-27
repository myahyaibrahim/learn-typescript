describe("Type Alias", () => {
    it("Should support alias", () => {
        const category = {
            id: 1,
            name: "Handphone",
        };
        const product = {
            id: "12",
            name: "samsung s20",
            price: 20000,
            category: category,
        };
        console.info(category);
        console.info(product);
    });
});
export {};
