const Class = require('../lib/classPos.js');

describe('Manager class constructor', () => {
    describe('Starting tests', () => {
        test('Tests to see if the class is creating an object', () => {
            const obj = new Class.manager();
            expect(obj).toBeInstanceOf(Class.manager);
        });
        test('Testing various class methods', () => {
            const val = 'default';
            const role = 'manager';
            const chi = new Class.manager();
            expect(chi.getName()).toBe(val);
            expect(chi.getID()).toBe(val);
            expect(chi.getRole()).toBe(role);
            expect(chi.getOffice()).toBe('#');
        });
    });
});
