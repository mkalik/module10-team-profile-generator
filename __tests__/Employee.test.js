const Class = require('../lib/classPos.js');

describe('Employee class constructor', () => {
    describe('Starting tests', () => {
        test('Tests to see if the class is creating an object', () => {
            const values = 'default';
            const obj = new Class.employee();
            expect(obj).toBeInstanceOf(Class.employee);
        });
        // it('it is being called with no parameters so all values should return default', () => {
        test('testing name, email, and id property values', () => {
            const obj = new Class.employee();
            const val = 'default';
            expect(obj.name).toBe(val);
            expect(obj.id).toBe(val);
            expect(obj.email).toBe(val);
        });
    });
});
// });
