const Employee = require("./Employee");

class Intern extends Employee {
    constructor (theName, id, email, school) {
        super(theName, id, email)
        
        this.school = school;

        
    }

    getSchool() {
        

    }

    getRole() {
        return Intern;
    }
}

