class Employee {
	constructor(theName, id, email) {
		this.theName = theName;
		this.id = id;
		this.email = email;
	}
	getName() {}

	getId() {}

	getEmail() {}

	getRole() {
		return this.name;
	}
}

module.exports = Employee;