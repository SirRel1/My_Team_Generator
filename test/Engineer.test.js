const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

describe('Engineer class', () => {
    describe('getRole method', () => {
        it('gets Engineer role', () => {
            const SirRelCode = new Employee('SirRel', 431, 'dajuanhudson33@gmail.com');
            SirRelCode.getRole();
            expect('SirRel').toBe('SirRel');
        });
    });
	
});


