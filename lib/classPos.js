//constructors for various positions

class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        if (this.name) {
            return this.name;
        }
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.constructor.name;
    }
}

class engineer extends employee {
    constructor(
        name = 'not provided',
        id = '#',
        email = 'not provided',
        gh = 'null'
    ) {
        super(name, id, email);
        this.gh = gh;
        this.getGit = () => {
            return this.gh;
        };
        this.getOffice = () => {
            return this.officeNum;
        };
        this.getName();
        this.getID();
        this.getRole();
        this.getEmail();
    }
}
class manager extends employee {
    constructor(name, id = '#', email = 'not provided', officeNum = '#') {
        super(name, id, email);
        this.officeNum = officeNum;
        this.getOffice = () => {
            return this.officeNum;
        };
        this.getName();
        this.getID();
        this.getRole();
    }
}
class intern extends employee {
    constructor(
        name = 'not provided',
        id = '#',
        email = 'not provided',
        school = 'not provided'
    ) {
        super(name, id, email);
        this.school = school;
        this.getSchool = () => {
            return this.school;
        };
        this.getName();
        this.getID();
        this.getRole();
    }
}

module.exports = { employee, manager, engineer, intern };
