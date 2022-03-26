import { useMemo } from 'react';

import { getProductByCategory } from '../../selectors/getProductByCategory';
import { ProductCard } from './ProductCard';

export const Productlist = ({ category }) => {

    const games = useMemo(() => getProductByCategory(category), [category]);

    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-6 animate__animated animate__fadeIn">
            {
                games.map(game => (
                    <ProductCard
                        key={game.id}
                        {...game}
                    />
                ))
            }
        </div>
    )
}
