import { games } from '../data/games';

export const getProductById = ( id = '' ) => {
    console.log('getProductById called');
  return games.find( game => game.id === id );
}