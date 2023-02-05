const manager = require('./lib/manager.js') //Import Manager class
const engineer = require('./lib/engineer.js') // Imports Engineer class
const intern = require('./lib/intern.js') // Imports Intern class
const inquirer = require('inquirer') //Prompt the user for input
const chalk = require('chalk') // Colors the interface text
const emailValidator = require('email-validator'); // Validates email addresses
const generatehtml = require('./lib/generatehtml.js') // Renders HTML
const welcome = require('./lib/welcome') //Displays welcome banner at app start
const fs = require('fs') //File system module


//Global Variables
let arrayOfManagers = []; //Stores Managers profiles
let arrayOfEngineers = []; //Stores Engineers profiles
let arrayOfInterns = []; //Stores Inters profiles
const htmlFilePath = `./dist/index.html`; //File path of HTML file

//Welcome banner

welcome();

// getManagerData() prompts user to enter Manager's data and store it in arrayOfManagers array

function getManagerData() {

  inquirer
    .prompt([
      {
        name: "mgrName",
        type: "input",
        message: "Enter Team Manager's name",
      },

      {
        name: "mgrID",
        type: "input",
        message: "Enter Team Manager's Employee ID",
        //Validate Manager's user ID
        validate: (input) => {

          input = parseInt(input);
          if (input * 1 !== input) {
            console.log(chalk.yellow(" < ID can only be a number"))
            return false
          }
          else { return true }
        }

      },

      {
        name: "mgrEmail",
        type: "input",
        message: "Enter Team Manager's Email address",

        //Validate Manager's email address
        validate: (input) => {

          if (!emailValidator.validate(input)) {
            console.log(chalk.yellow(" < Enter valid email address"))
            return false
          }
          else { return true }
        }
      },
      {
        name: "mgrNumber",
        type: "input",
        message: "Enter Team Manager's Office number",

        //Validate manager's phone number
        validate: (input) => {

          input = parseInt(input);
          if (input * 1 !== input) {
            console.log(chalk.yellow(" < Office number can contain only numbers"))
            return false
          }
          else { return true }
        }

      },
      {
        name: "addTeamMember",
        type: "list",
        message: "Add team member",
        choices: ["Intern", "Engineer", "I don't want to add more team members"]
      }


    ]).then((response) => {
      // Create new object from Manager class
      const mgr = new manager(response.mgrName, response.mgrID, response.mgrEmail, response.mgrNumber)
      // Push the new object in arrayOfManagers Array
      arrayOfManagers.push(mgr);
      // Check whether to continue the prompts or end it
      if (response.addTeamMember == "I don't want to add more team members") {
        //generateHTML();
        generatehtml(htmlFilePath, arrayOfManagers, arrayOfEngineers, arrayOfInterns);

        }
      else if (response.addTeamMember == "Intern") {
           getInternData()
      }
      else if (response.addTeamMember == "Engineer") {
           getEngrData()
      }

    });

}


// getEngrData() prompts user to enter Engineer's data and store it in arrayOfEngineers array

function getEngrData() {
  continuePrompt = false
  inquirer
    .prompt([
      {
        name: "engrName",
        type: "input",
        message: "Enter Engineer's name",
      },

      {
        name: "engrID",
        type: "input",
        message: "Enter Engineer's Employee ID",

        // Validate user input for numbers 

        validate: (input) => {

          input = parseInt(input);
          if (input * 1 !== input) {
            console.log(chalk.yellow(" < ID can only be a number"))
            return false
          }
          else { return true }
        }

      },

      {
        name: "engrEmail",
        type: "input",
        message: "Enter Engineer's Email address",

        //Validates user email address

        validate: (input) => {

          if (!emailValidator.validate(input)) {
            console.log(chalk.yellow(" < Enter valid email address"))
            return false
          }
          else { return true }
        }

      },
      {
        name: "engrGithub",
        type: "input",
        message: "Enter Github ID",

      },
      {
        name: "addTeamMember",
        type: "list",
        message: "Add team member",
        choices: ["Intern", "Engineer", "I don't want to add more team members"]
      }

    ]).then((response) => {
      const engr = new engineer(response.engrName, response.engrID, response.engrEmail, response.engrGithub);
      arrayOfEngineers.push(engr)

      // Check whether to continue the prompts or end it

      if (response.addTeamMember == "I don't want to add more team members") {
 
        //generateHTML();
        generatehtml(htmlFilePath, arrayOfManagers, arrayOfEngineers, arrayOfInterns);
  
      }
      else if (response.addTeamMember == "Intern") {
           getInternData()
      }
      else if (response.addTeamMember == "Engineer") {
           getEngrData()
      }

    })

}


//getInternData() prompts user to enter Intern's data and store it in arrayOfInterns array

function getInternData() {
  continuePrompt = false
  inquirer
    .prompt([
      {
        name: "internName",
        type: "input",
        message: "Enter Intern's name",
      },

      {
        name: "internID",
        type: "input",
        message: "Enter Intern's Employee ID",

        // Validates Inter's ID

        validate: (input) => {

          input = parseInt(input);
          if (input * 1 !== input) {
            console.log(chalk.yellow(" < ID can only be a number"))
            return false
          }
          else { return true }
        }

      },

      {
        name: "internEmail",
        type: "input",
        message: "Enter Intern's Email address",

        //Validates Intern's email address 

        validate: (input) => {

          if (!emailValidator.validate(input)) {
            console.log(chalk.yellow(" < Enter valid email address"))
            return false
          }
          else { return true }
        }

      },
      {
        name: "internSchool",
        type: "input",
        message: "Enter Intern's school name",

      },
      {
        name: "addTeamMember",
        type: "list",
        message: "Add team member",
        choices: ["Intern", "Engineer", "I don't want to add more team members"]
      }

    ]).then((response) => {

      // Create a new object from 'Intern' class
      const int = new intern(response.internName, response.internID, response.internEmail, response.internSchool);
      //Push the new opject in arrayOfInterns Array
      arrayOfInterns.push(int)

      // Check whether to continue the prompts or end it
      if (response.addTeamMember == "I don't want to add more team members") {
 
        //generateHTML();
        generatehtml(htmlFilePath, arrayOfManagers, arrayOfEngineers, arrayOfInterns);

        }
      else if (response.addTeamMember == "Intern") {
           getInternData()
      }
      else if (response.addTeamMember == "Engineer") {
           getEngrData()
      }

    })

}

// Application starts here
getManagerData();
