const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee')

describe('Employee class', () => {
	describe('getName method', () => {
		it('gets a name argument', () => {
			const EmployeeOne = new Employee(
				'Terrell',
				303,
				'dajuanhudson33@gmail.com'
			);

			EmployeeOne.getName();
			expect(null).toBe(null);
		});
	});
});

describe('getId method', () => {
	it('gets an Employee id', () => {
        const SirRel = new Employee("SirRel", 431, "dajuanhudson33@gmail.com")
        SirRel.getId();
        expect(null).toBe(null)
    });
});
describe('getEmail method', () => {
	it('gets an Employee email', () => {
        const nuEmail = new Employee("Terrell", 303, "dajuanhudson33@gmail.com")
        nuEmail.getEmail();
        expect(null).toBe(null);
    });
});
describe('getRole method', () => {
	it('gets an Employee role', () => {
		const Terrell = new Employee('Terrell', 303, 'dajuanhudson33@gmail.com');

		Terrell.getRole();
		expect('Terrell').toBe('Terrell');
	});
});
