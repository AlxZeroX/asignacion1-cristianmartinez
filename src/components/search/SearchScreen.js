import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from '../../action/productos';
import { Productlist } from '../Contenido/Productlist';

export const SearchScreen = () => {
  const dispatch = useDispatch()

  const [formvalues, setFormValues] = useState({ search: "" });
  const { search } = formvalues;

  const { productos } = useSelector((state) => state.producto);

  const [allFilter, setAllFilter] = useState([]);

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  useEffect(() => {
    setAllFilter(productos);
  }, [productos]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...search,
      [target.productname]: target.value,
    });

    let filtrado = [];

    if (search === "") {
      setAllFilter(productos);
    } else {
      filtrado = productos.filter(function (item) {
        return item.productname.toLowerCase().match(target.value.toLowerCase());
      });

      setAllFilter(filtrado);
    }
  };

  return (
    <div>
      <h1 className='bg-slate-600 text-white px-6 py-2 rounded-sm text-xl font-medium'>Búsquedas</h1>

      <div className="px-6 py-2 rounded-lg text-xl font-medium">
        <input
          placeholder="Buscar..."
          onChange={handleInputChange}
          name="search"
          autoComplete="off"
          value={search}
          maxLength="25"
          className="shadow appearance-none border rounded pr-64 py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {(allFilter.length === 0) ? (
        <div
          className="bg-red-300 border-l-4 border-red-700 mb-10  text-orange-700 p-4"
          role="alert"
        >
          <p className="font-bold text-black">Sin Resultados, Intenta de nuevo.</p>
        </div>
      ) : (
        <Productlist
          productoFilter={allFilter} />
      )}
    </div>
  )
}


