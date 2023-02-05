const engineer = require('../lib/engineer.js') // Import Engineer class

describe("Testing engineer class methods", () => {

    it("getName() should return a string", () => {
        const testObject = new engineer("Alex", 2, "Alex@gmail.com","alexgithub")
        expect(testObject.name1).toEqual("Alex");
    });

    it("getID() should return a number", () => {
        const testObject = new engineer("Alex", 2, "Alex@gmail.com","alexgithub")
        expect(testObject.getID()).toEqual(2);
    });

    it("getEmail() should return a string", () => {
        const testObject = new engineer("Alex", 2, "Alex@gmail.com","alexgithub")
        expect(testObject.getEmail()).toEqual("Alex@gmail.com");
    });

    it("getGithub() should return a String", () => {
        const testObject = new engineer("Alex", 2, "Alex@gmail.com","alexgithub")
        expect(testObject.getGithub()).toEqual("alexgithub");
    });

    it("getRole() should return Engineer", () => {
        const testObject = new engineer("Alex", 2, "Alex@gmail.com","alexgithub")
        expect(testObject.getRole()).toEqual("Engineer");
    });


})