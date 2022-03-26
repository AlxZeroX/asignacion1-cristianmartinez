import { games } from '../data/games';

export const getProductByName = (name = '') => {

    console.log('getProductsByName called');

    if (name.length === 0) {
        return [];
    }

    return games.filter(game => game.productname.toLowerCase().includes(name));
}
