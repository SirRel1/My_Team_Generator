const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern class', () => {
    describe('getRole method', () => {
        it('gets an Intern role', () => {
            const Terrell = new Employee('Terrell', 303, 'dajuanhudson33@gmail.com');
    
            Terrell.getRole();
            expect('Intern').toBe('Intern');
        });
    });
})
	


