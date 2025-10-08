import { getPokemonById } from "../../src/js-foundation/06-promises";

describe('js-foundation/06-promises', () => {
    test('getPokemonById should return a Pokemon', async () => {
        const pokemonId = 1; // Bulbasaur
        const pokemonName = await getPokemonById(pokemonId);
    
        expect(pokemonName).toBe('bulbasaur');
    });
    test('should return an error if pokemon does not exist', async () => {
        const invalidPokemonId = 100000000; // Assuming this ID does not exist        

        try {
            await getPokemonById(invalidPokemonId);
            
        } catch (error) {
            expect(error).toBe(`Pokemon not found with id ${invalidPokemonId}`);
        }
    });
});