import { games } from '../data/games';

export const getProductByCategory = ( category ) => {

    const validCategory = [ 'ps4', 'pc', 'xbox'];
    if( !validCategory.includes( category ) ) {
        throw new Error( `${ category } is not a valid category` );
    }
  
    return games.filter( game => game.category === category )
}
