const Class = require('../lib/classPos.js');

describe('Engineer class constructor', () => {
    describe('Starting tests', () => {
        test('Tests to see if the class is creating an object', () => {
            const obj = new Class.engineer();
            expect(obj).toBeInstanceOf(Class.engineer);
        });
        test('Testing various class methods', () => {
            const val = 'default';
            const role = 'engineer';
            const chi = new Class.engineer();
            expect(chi.getName()).toBe(val);
            expect(chi.getID()).toBe(val);
            expect(chi.getRole()).toBe(role);
            expect(chi.getGit()).toBe('null');
        });
    });
});
