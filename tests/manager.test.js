const manager = require('../lib/manager.js') // Import Manager class


describe("Testing Manager class methods", () => {
    
    it("getName() should return a string", () => {
        const testObject = new manager("Peter", 4, "peter@gmail.com",9999)
        expect(testObject.name1).toEqual("Peter");
    });

    it("getID() should return a number", () => {
        const testObject = new manager("Peter", 4, "peter@gmail.com",9999)
        expect(testObject.getID()).toEqual(4);
    });

    it("getEmail() should return a string", () => {
        const testObject = new manager("Peter", 4, "peter@gmail.com",9999)
        expect(testObject.getEmail()).toEqual("peter@gmail.com");
    });

    it("getOfcNum() should return a number", () => {
        const testObject = new manager("Peter", 4, "peter@gmail.com",9999)
        expect(testObject.getOfcNum()).toEqual(9999);
    });

    it("getRole() should return Manager", () => {
        const testObject = new manager("Peter", 4, "peter@gmail.com",9999)
        expect(testObject.getRole()).toEqual("Manager");
    });


})