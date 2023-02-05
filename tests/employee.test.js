const employee = require('../lib/employee.js') // Import Employee class

describe("Testing employee class methods", () => {
    it("getName() should return a string", () => {
        const testObject = new employee("Robert", 1, "rober@gmail.com")
        expect(testObject.name1).toEqual("Robert");
    });
    it("getID() should return a number", () => {
        const testObject = new employee("Robert", 1, "rober@gmail.com")
        expect(testObject.getID()).toEqual(1);
    });

    it("getEmail() should return a string", () => {
        const testObject = new employee("Robert", 1, "rober@gmail.com")
        expect(testObject.getEmail()).toEqual("rober@gmail.com");
    });

    it("getRole() should return a Employee", () => {
        const testObject = new employee("Robert", 1, "rober@gmail.com")
        expect(testObject.getRole()).toEqual("Employee");
    });


})