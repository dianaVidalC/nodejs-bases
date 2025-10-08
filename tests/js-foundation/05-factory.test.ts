import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('js-foundation/05-factory', () => {
    const getUUID = () => '1234';
    const getAge = () => 40;

    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({ getUUID, getAge });
        expect(typeof makePerson).toBe('function');
    });
    test('makePerson should return a person', () => {
        const makePerson = buildMakePerson({ getUUID, getAge });
        const person = makePerson({ name: 'Erika Vidal', birthdate: '1985-07-02' });
        expect(person).toEqual({ id: '1234', name: 'Erika Vidal', birthdate: '1985-07-02', age: 40 });
    });
});