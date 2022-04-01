import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from '../../action/productos';
import { Productlist } from '../Contenido/Productlist';
import { Carousel } from './carousel'
import { Footer } from './Footer';

export const Inicio = () => {
  const dispatch = useDispatch()

  const { productos } = useSelector((state) => state.producto);

  const [allFilter, setAllFilter] = useState([]);

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  useEffect(() => {
    setAllFilter(productos);
  }, [productos]);

  return (
    <div>
      <h1 className='bg-slate-600 text-white px-6 py-2 rounded-sm text-xl font-medium'>Inicio</h1>

      <Carousel />

      {(allFilter.length === 0) ? (
        <div
          className="bg-red-300 border-l-4 border-red-700 mb-10  text-orange-700 p-4"
          role="alert"
        >
          <p className="font-bold text-black ">Inicio</p>
          <p className="font-bold text-black">Sin Resultados, Intenta de nuevo.</p>
        </div>
      ) : (
        <Productlist
          productoFilter={allFilter} />
      )}
      <Footer />

    </div>
  )
}
