const role = require('./lib/classPos.js');
const ask = require('inquirer');
// const questions = [(dd
console.log(role);

const int1 = new role.intern('jake', '123', 'jake@test.com', 'uc eureka');

console.log(int1);

console.log(int1.getSchool(), int1.getName(), int1.getRole(), int1.getID());

const eng1 = new role.engineer('john');

console.log(eng1.getRole());

console.log(eng1.getName());
//questions for the different types of workers
manQs = [
    {
        type: 'input',
        name: 'man',
        message: "Enter your team manager's name",
    },
    {
        type: 'input',
        name: 'manID',
        message: 'Enter you team managers Employee ID',
    },
    {
        type: 'input',
        name: 'manEmail',
        message: "Enter your team manager's email",
    },
    {
        type: 'input',
        name: 'manOffice',
        message: "Enter your team manager's office number",
    },
];
engQs = [
    {
        type: 'input',
        name: 'engName',
        message: "Enter your engineer's name",
    },
    {
        type: 'input',
        name: 'engID',
        message: "Enter your enigneer's id number",
    },
    {
        type: 'input',
        name: 'engEmail',
        message: "Enter your engineer's email",
    },
    {
        type: 'input',
        name: 'engGithub',
        message: "Enter your engineer's github account name",
    },
];
intQs = [
    {
        type: 'input',
        name: 'intName',
        message: "Enter your intern's name",
    },
    {
        type: 'input',
        name: 'intId',
        message: "Enter your intern's id number",
    },
    {
        type: 'input',
        name: 'intEmail',
        message: "Enter your intern's email",
    },
    {
        type: 'input',
        name: 'intEdu',
        message: 'Enter the school your intern attends',
    },
];

function askQuestions() {}
