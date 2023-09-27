describe("Object", () => {
  it("Should support Object", () => {
    const person: { id: string; name: string; hobbies?: string[] } = {
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
