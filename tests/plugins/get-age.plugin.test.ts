import { getAge } from "../../src/plugins";

describe('plugins/get-age.plugin', () => {
    test('getAge() should return the age of person', () => {
        const birthdate = '1985-07-02';
        const age = getAge(birthdate);
        expect(typeof age).toBe('number');
    });
    test('getAge() should rerturn current age', () => {
        const birthdate = '1985-07-02';
        const age = getAge(birthdate);
        const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
        expect(age).toBe(calculateAge);
    });
    test('getAge should return 0 years', () => {
        // Mocking Date to always return 1995 as the current year
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
        const birthdate = '1995-07-02';
        const age = getAge(birthdate);
        expect(age).toBe(0);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    }); 
})