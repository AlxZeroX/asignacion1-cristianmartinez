import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPC } from '../../action/productos';
import { Productlist } from '../Contenido/Productlist';

export const Pc = () => {
  const dispatch = useDispatch()

  const { productos } = useSelector((state) => state.producto);

  const [pcFilter, setPcFilter] = useState([]);

  useEffect(() => {
    dispatch(getPC());
  }, [dispatch]);

  useEffect(() => {
    setPcFilter(productos);
  }, [productos]);

  return (
    <>
      <h1 className='bg-slate-600 text-white px-6 py-2 rounded-sm text-xl font-medium'>PC</h1>
      <div>
        {(pcFilter.length === 0) ? (
          <div
            className="bg-red-300 border-l-4 border-red-700 mb-10  text-orange-700 p-4"
            role="alert"
          >
            <p className="font-bold text-black ">PC</p>
            <p className="font-bold text-black">Sin Resultados, Intenta de nuevo.</p>
          </div>
        ) : (
          <Productlist
            productoFilter={pcFilter}
          />
        )}
      </div>
    </>
  )
}