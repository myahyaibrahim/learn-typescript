import { sayHello } from "../src/say-hello";
describe("sayHello", function () {
    it("should return hello yahya", function () {
        expect(sayHello("yahya")).toBe("Hello yahya");
    });
});
