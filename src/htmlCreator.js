//used to create the html page
const fs = require('fs');
// var intBox =
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
async function populateHtml(info) {
    var holder;
    info.getRole() == 'manager'
        ? (holder = `Office Number: ${info.getOffice()}`)
        : info.getRole() == 'engineer'
        ? (holder = `<a href = 'https://github.com/${info.getGit()}'target="_blank" rel="noopener noreferrer"> ${info.getGit()}</a>`)
        : (holder = `School: ${info.getSchool()}`);
    var html = `<h1>${info.getName()}</h1>\n
                <h2>${info.getRole()}</h2>\n
            <ul>\n
                <li>ID: ${info.getID()}</li>\n
                <li>Email: <a href ="mailto:${info.getEmail()}">${info.getEmail()}</a></li>\n
                <li>${holder}</li>\n
            </ul>\n`;
    return await fs.appendFile('./dist/index.html', html, (err) => {
        if (err) throw err;
        console.log('file updated');
    });
}

function createHtml(employeeInfo) {
    console.log(employeeInfo);

    if (fs.existsSync('./dist/index.html')) {
        fs.unlink('./dist/index.html', function (err) {
            if (err) console.log(err);
            console.log('previous file deleted');
        });
    }
    fs.appendFile('./dist/index.html', htmlHead, (err) => {
        if (err) throw err;
    });
    for (let x of employeeInfo) {
        populateHtml(x);
    }
    fs.appendFile('./dist/index.html', htmlFoot, (err) => {
        if (err) throw err;
    });
    fs.readFile('./dist/index.html', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}

module.exports = { parseInfo };
