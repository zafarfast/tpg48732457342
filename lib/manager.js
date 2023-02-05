const employee = require('./employee.js')

class Manager extends employee
{
    constructor(name1, id, email, officeNumber)
    {
        super(name1, id, email);
        this.officeNumber = officeNumber;
    }

    getOfcNum(){
        return this.officeNumber
     }

    getRole(){
        return "Manager"
     }
}

module.exports = Manager;