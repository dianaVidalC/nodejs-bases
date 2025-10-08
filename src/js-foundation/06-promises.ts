// const { http } = require('../plugins');
import { httpClient as httpClient } from '../plugins';

export const getPokemonById = async (id: string | number): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await httpClient.get(url);
    // const resp = await fetch( url );
    // const pokemon = await resp.json();

    return pokemon.name;
  } catch (error) {
    throw `Pokemon not found with id ${id}`;
  }


  // return fetch( url )
  //   .then( ( resp ) => resp.json())
  //   // .then( () => { throw new Error('Pokemon no existe') })
  //   .then( ( pokemon ) => pokemon.name );

}