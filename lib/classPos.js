//constructors for various positions

class employee {
    constructor(name = 'default', id = 'default', email = 'default') {
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
    constructor(name, id, email, gh = 'null') {
        super(name, id, email);
        this.gh = gh;
        this.getGit = () => {
            return this.gh;
        };
        this.getOffice = () => {
            return this.officeNum;
        };
    }
}
class manager extends employee {
    constructor(name, id, email, officeNum = '#') {
        super(name, id, email);
        this.officeNum = officeNum;
        this.getOffice = () => {
            return this.officeNum;
        };
    }
}
class intern extends employee {
    constructor(name, id, email, school = 'none') {
        super(name, id, email);
        this.school = school;
        this.getSchool = () => {
            return this.school;
        };
    }
}

module.exports = { employee, manager, engineer, intern };
