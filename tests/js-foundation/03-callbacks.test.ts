import { getUserById } from "../../src/js-foundation/03-callbacks";

describe('js-foundation/03-callbacks', () => {
    test('getUserById should return an error if user does not exist', (done) => {
        const userId = 10; // Assuming this ID does not exist
        getUserById(userId, (error, user) => {
            expect(error).toBe(`User not found with id ${userId}`);
            expect(user).toBeUndefined();
            done();
        });
    });
    test('getUserById should return user object if user exists', (done) => {
        const userId = 1; // Assuming this ID exists
        getUserById(userId, (error, user) => {
            // const { id, name } = user!;

            // expect(id).toBe(userId);
            // expect(error).toBeUndefined();
            // expect(name).toBe('Alice Smith'); // Adjust based on actual user data
            expect(error).toBeUndefined();
            expect(user).toEqual({ id: 1, name: 'Alice Smith' }); // Adjust based on actual user data
            done();
        });
    });
});