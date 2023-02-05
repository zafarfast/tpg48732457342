const fs = require('fs')

//generateHTML() function renders the HTML file

function generateHTML(htmlFilePath,arrayOfManagers,arrayOfEngineers,arrayOfInterns) {
    //............................Create HTML Body..................................//
    
    //Promise function ensures that code is written to the HTML file happens in sequence.
    
    new Promise((resolve, error)=>{ 
      let htmlBody = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="styles.css">
          <title>Profile Generator</title>
      </head>
      <body>
      <div id=container>
      <nav>
      <h1>TEAM PROFILE GENERATOR</h1>
      </nav>
      <div id=container>
      `
      fs.writeFile(htmlFilePath,htmlBody,(err)=>{if (err===null){resolve()}})
      
    })
    
    .then(()=>{
    
    //............................Append Managers data in HTML........................//
    
    if (arrayOfManagers != null)
    {
    
    for (i = 0; i < arrayOfManagers.length; i++) 
    {
    
      let mgrtitle = "&#9812 Manager"
      let mgrname = arrayOfManagers[i].name1
      let mgrid = arrayOfManagers[i].id
      let mgremail = arrayOfManagers[i].email
      let mgrofcnum = arrayOfManagers[i].officeNumber
    
      let managerDataHtml = `    
    
      <div id="manager-div">
      <div id="manager-div-heading">
          <p>${mgrtitle}</p>
          
      </div>
      <div id="employee-data">
          <p><b>Name:</b> ${mgrname}</p>
          <p><b>ID:</b> ${mgrid}</p>
          <p><b>Email:</b> <a href="mailto:${mgremail}">${mgremail}</a></p>
          <p><b>Offie Number:</b> ${mgrofcnum}</p>
      </div>
    
      </div>
      `
    
      fs.appendFile(htmlFilePath, managerDataHtml, (err) => {
        if (err) {
          console.log(err);
        }
      })
    
    }
    
    }
    
    //.............................Append Engineers data in HTML.......................//
    
    if (arrayOfEngineers != null)
    {
    for (i = 0; i < arrayOfEngineers.length; i++) 
    {
      let engrtitle = "&#9814 Engineer"
      let engrname = arrayOfEngineers[i].name1
      let engrid = arrayOfEngineers[i].id
      let engremail = arrayOfEngineers[i].email
      let engrgithub = arrayOfEngineers[i].github
    
      let engineerDataHtml = `    
    
        <div id="manager-div">
        <div id="manager-div-heading">
            <p>${engrtitle}</p>
            
        </div>
        <div id="employee-data">
            <p><b>Name:</b> ${engrname}</p>
            <p><b>ID:</b> ${engrid}</p>
            <p><b>Email:</b> <a href="mailto:${engremail}">${engremail}</a></p>
            <p><b>Github:</b> <a href="https://github.com/${engrgithub}">${engrgithub}</a></p>
        </div>
    
        </div>
        `
    
      fs.appendFile(htmlFilePath, engineerDataHtml, (err) => {
        if (err) {
          console.log(err);
        }
      })
    }
    
    }
    //............................Append Interns data in HTML...........................//
    
    if (arrayOfInterns != null)
    {
    
    for (i = 0; i < arrayOfInterns.length; i++) 
    {
    
      let interntitle = "&#9817 Intern"
      let internname = arrayOfInterns[i].name1
      let internid = arrayOfInterns[i].id
      let internemail = arrayOfInterns[i].email
      let internschool = arrayOfInterns[i].school
    
    
      let internDataHtml = `    
    
        <div id="manager-div">
        <div id="manager-div-heading">
        <p>${interntitle}</p>
            
        </div>
        <div id="employee-data">
            <p><b>Name:</b> ${internname}</p>
            <p><b>ID:</b> ${internid}</p>
            <p><b>Email:</b> <a href="mailto:${internemail}">${internemail}</a></p>
            <p><b>School:</b> ${internschool}</p>
        </div>
    
        </div>
        `
    
      fs.appendFile(htmlFilePath, internDataHtml, (err) => {
        if (err) {
          console.log(err);
        } })
    
    }
    }
    })
    //............................Append HTML Footer..................................//
    
    .then(()=>{
      let footer = `
    </div>
    </body>
    </html>
    `
    fs.appendFile(`./dist/index.html`, footer, (err) => {
      if (err) {
        console.log(err);
      }
    })
    })
    
    
    }
    

    module.exports = generateHTML; //exports generateHTML() function