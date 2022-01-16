const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(theName, id, email, github){
        super(theName, id, email)
        
        this.github = github;

        
    }
    getGithub() {
       

    }

    getRole() {
        return Engineer
    }
}

