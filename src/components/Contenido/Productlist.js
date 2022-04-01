import React from 'react'
import { ProductCard } from './ProductCard';

export const Productlist = ({ productoFilter }) => {
    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-6 animate__animated animate__fadeIn">
            {
                (productoFilter)
                && productoFilter.map((producto) => (
                    <ProductCard key={producto.id} {...producto} />
                ))
            }
        </div>
    );
};
