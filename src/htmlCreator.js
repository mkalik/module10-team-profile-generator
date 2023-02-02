//used to create the html page
const fs = require('fs');
var htmlHead = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Team</title>
</head>
<header>My team</header>
<body>`;
var htmlFoot = ` 
<footer>
    <div>created with<a href="https://github.com/mkalik/module10-team-profile-generator">github</a></div>
</footer>
</body>
</html>`;
//this function deals with creating boxes for specific employees based on their role
async function createHtml(employeeInfo) {
    console.log(employeeInfo);
    //these lines make sure that an entirely new file is created each time this code runs
    if (fs.existsSync('./dist/index.html')) {
        fs.unlinkSync('./dist/index.html');
    }
    const file = fs.createWriteStream('./dist/index.html', { flags: 'a' });
    file.write(htmlHead);
    for (let info of employeeInfo) {
        //because all employee classes are the same save 1 class specific unique attribute, this
        //variable changes so that we can just slot that unique portion right into our template
        //without moving anything else around
        var holder;
        info.getRole() == 'manager'
            ? (holder = `Office Number: ${info.getOffice()}`)
            : info.getRole() == 'engineer'
            ? (holder = `<a href = 'https://github.com/${info.getGit()}'target="_blank" rel="noopener noreferrer"> ${info.getGit()}</a>`)
            : (holder = `School: ${info.getSchool()}`);
        //this is essentially the template for each employee box
        var html = `<div class = 'employee'>
                <h1>${info.getName()}</h1>
                <h2>${info.getRole()}</h2>
             <ul>
                <li>ID: ${info.getID()}</li>
                <li>Email: <a href ="mailto:${info.getEmail()}">${info.getEmail()}</a></li>
                <li>${holder}</li>
             </ul>
        </div>`;
        file.write(html);
    }
    file.write(htmlFoot);
    file.end();
}

module.exports = { createHtml };
