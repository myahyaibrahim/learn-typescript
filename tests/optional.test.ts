describe("Optional parameter", () => {
  it("Should support Optional parameter", () => {
    function sayHello(name?: string | null) {
      if (name) {
        console.info(`Hello name ${name}`);
      } else {
        console.info("Hello");
      }
    }
    sayHello("Yahya");

    const name: string | undefined = undefined;

    sayHello(name);

    sayHello(null);
  });
});
