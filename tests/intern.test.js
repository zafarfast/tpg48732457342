const intern = require('../lib/intern.js') // Import Intern class

describe("Testing Intern class methods", () => {
    
    it("getName() should return a string", () => {
        const testObject = new intern("Bob", 3, "bob@gmail.com","School")
        expect(testObject.name1).toEqual("Bob");
    });

    it("getID() should return a number", () => {
        const testObject = new intern("Bob", 3, "bob@gmail.com","School")
        expect(testObject.getID()).toEqual(3);
    });

    it("getEmail() should return a string", () => {
        const testObject = new intern("Bob", 3, "bob@gmail.com","School")
        expect(testObject.getEmail()).toEqual("bob@gmail.com");
    });

    it("getSchool() should return a String", () => {
        const testObject = new intern("Bob", 3, "bob@gmail.com","School")
        expect(testObject.getSchool()).toEqual("School");
    });

    it("getRole() should return Intern", () => {
        const testObject = new intern("Bob", 3, "bob@gmail.com","School")
        expect(testObject.getRole()).toEqual("Intern");
    });


})