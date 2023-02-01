const role = require('./lib/classPos.js');
const ask = require('inquirer');
const html = require('./src/htmlCreator.js');

var employees = [];
//questions for various roles (manager, engineer, intern)
manQs = [
    {
        type: 'input',
        name: 'Name',
        message: "Enter your team manager's name",
    },
    {
        type: 'input',
        name: 'ID',
        message: 'Enter you team managers Employee ID',
    },
    {
        type: 'input',
        name: 'Email',
        message: "Enter your team manager's email",
    },
    {
        type: 'input',
        name: 'Office',
        message: "Enter your team manager's office number",
    },
];
engQs = [
    {
        type: 'input',
        name: 'Name',
        message: "Enter your engineer's name",
    },
    {
        type: 'input',
        name: 'ID',
        message: "Enter your enigneer's id number",
    },
    {
        type: 'input',
        name: 'Email',
        message: "Enter your engineer's email",
    },
    {
        type: 'input',
        name: 'Github',
        message: "Enter your engineer's github account name",
    },
];
intQs = [
    {
        type: 'input',
        name: 'Name',
        message: "Enter your intern's name",
    },
    {
        type: 'input',
        name: 'ID',
        message: "Enter your intern's id number",
    },
    {
        type: 'input',
        name: 'Email',
        message: "Enter your intern's email",
    },
    {
        type: 'input',
        name: 'Edu',
        message: 'Enter the school your intern attends',
    },
];
//menu question that asks a user what new role they would like to add
menuQs = [
    {
        type: 'list',
        name: 'role',
        message: 'Would you like to add another member to your team?',
        choices: ['Engineer', 'Intern', 'Exit'],
    },
];
//starts the program and immediately prompts for a team manager
async function init() {
    var newHead = await ask.prompt(manQs);
    var teamHead = new role.manager(
        newHead.Name,
        newHead.ID,
        newHead.Email,
        newHead.Office
    );
    employees.push(teamHead);
    askQuestions();
}
//adds an intern to the employees array
async function addInt() {
    console.log('adding an intern');
    var int = await ask.prompt(intQs);
    var newInt = new role.intern(int.Name, int.ID, int.Email, int.Edu);
    employees.push(newInt);
    askQuestions();
}
//adds an engineer to the employees array
async function addEng() {
    console.log('adding an engineer');
    var eng = await ask.prompt(engQs);
    var newEng = new role.engineer(eng.Name, eng.ID, eng.Email, eng.Github);
    employees.push(newEng);
    askQuestions();
}
//function that continues to prompt a user with questions until they decide not
//to add another team member
async function askQuestions() {
    var newMember = await ask.prompt(menuQs);
    if (newMember.role == 'Engineer') {
        addEng();
    } else if (newMember.role == 'Intern') {
        addInt();
    } else {
        html.createHtml(employees);
        for (var i = 0; i < employees.length; i++) {
            console.log(employees[i].getRole());
        }
    }
}
init();
