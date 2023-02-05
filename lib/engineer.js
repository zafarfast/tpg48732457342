const employee = require('./employee.js')

class Engineer extends employee
{
    constructor(name1, id, email,github)
    {
        super(name1, id, email);
        this.github = github;

    }

    getGithub(){
        return this.github
    }

    getRole(){
        return "Engineer"

    }
}

module.exports = Engineer;
