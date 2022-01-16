const Employee = require("./Employee");

class Manager extends Employee {
    constructor (theName, id, email, officeNumber){
        super(theName, id, email);
        
        
        this.officeNumber = officeNumber;

        
    }
    getRole(){
        return Manager
    }

    
}


