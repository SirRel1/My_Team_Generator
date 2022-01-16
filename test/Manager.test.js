const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');


describe('Manager class', () => {
	describe('getRole method', () => {
		it('gets the Manager role', () => {
			const manageOne = new Employee('Terrell', 313, "real@gmail");

			manageOne.getRole();
			expect('Manager').toBe('Manager');
		});
	});
});
