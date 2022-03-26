import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm';
import { getProductByName } from '../../selectors/getProductByName';
import { ProductCard } from '../products/ProductCard';


export const Search = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q,
    });

    const { searchText } = formValues;

    const gamesFileted = useMemo(() => getProductByName(q), [q]);


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }


    return (
        <>
            <h1 className='bg-slate-600 text-white px-6 py-2 rounded-sm text-xl font-medium'>Búsquedas</h1>
            <hr />

            <div className="flex-auto">
                

                <div className="px-6 py-2 rounded-lg text-xl font-medium">
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Buscar un Producto"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />


                        <button
                            className="bg-slate-600 text-white px-6 py-2 rounded-lg text-xl font-medium hover:bg-orange-600"
                            type="submit">
                            Buscar...
                        </button>

                    </form>


                </div>
                <br />
                <br />
                <br />

                <h4 className='bg-red-600 text-white px-6 py-2 rounded-lg text-xl font-medium'>Resultados</h4>
                <hr />
                <div className="grid p-10 lg:grid-cols-3 md:grid-cols-2 gap-x-6 animate__animated animate__fadeIn">


                    {
                        (q === '')
                            ? <div className="alert alert-info"> Buscar un Producto </div>
                            : (gamesFileted.length === 0)
                            && <div className="alert alert-danger"> No hay resultados: {q} </div>
                    }


                    {
                        gamesFileted.map(game => (
                            <ProductCard
                                key={game.id}
                                {...game}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
