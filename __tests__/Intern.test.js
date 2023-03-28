const Class = require('../lib/classPos.js');

describe('Engineer class constructor', () => {
    describe('Starting tests', () => {
        test('Tests to see if the class is creating an object', () => {
            const obj = new Class.intern();
            expect(obj).toBeInstanceOf(Class.intern);
        });
        test('Testing various class methods', () => {
            const val = 'default';
            const role = 'intern';
            const chi = new Class.intern();
            expect(chi.getName()).toBe(val);
            expect(chi.getID()).toBe(val);
            expect(chi.getRole()).toBe(role);
            expect(chi.getSchool()).toBe('none');
        });
    });
});
