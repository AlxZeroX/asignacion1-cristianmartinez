import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getProductById } from '../../selectors/getProductById';
import { gameImages } from '../../helpers/gameImages';

export const ProductScreen = () => {

    const { gameId } = useParams();
    const navigate = useNavigate()

    const game = useMemo(() => getProductById(gameId), [gameId]);

    const handleReturn = () => {
        navigate(-1);
    }

    if (!game) {
        return <Navigate to='/' />
    }

    const {
        productname,
        // rating,
        // shortdescription,
        description,
        tags,
        date,
        category
    } = game;

    const imagePath = gameImages(`./${gameId}.jpg`)

    return (
        <>
            <h1 className='bg-slate-600 text-yellow-100 px-6 py-2 rounded-sm text-xl font-medium'>{game.productname}</h1>

            <div className="flex justify-center card p-3">
                <div className="flex flex-col items-center rounded-lg bg-white shadow-2xl border-2 border-black 
                                2xl:flex-row 2xl:max-w-screen-2xl
                                xl:flex-row xl:max-w-screen-xl 
                                lg:flex-row lg:max-w-screen-lg
                                md:flex-row md:max-w-screen-md
                                sm:flex-row sm:max-w-screen-sm
                    ">
                    {/* xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 */}
                    <div className="flex flex-col rounded-lg relative
                                    2xl:flex-row 2xl:w-screen 
                                    xl:flex-row xl:w-screen 
                                    lg:flex-row lg:w-screen 
                                    md:flex-row md:w-screen 
                                    sm:flex-row sm:w-screen 
                    ">
                        <img
                            src={imagePath}
                            alt={productname}
                            className="animate__animated animate__fadeInRight" />
                    </div>
                    <div className="p-1 flex flex-col items-center">
                        <h3 className="text-gray-900 text-2xl font-extrabold card-header"> {game.productname} </h3>
                        <ul className="flex">
                            <li>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                            </li>
                            <li>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                            </li>
                            <li>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                </svg>
                            </li>
                            <li>
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                                </svg>
                            </li>
                            <li>
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                                </svg>
                            </li>
                        </ul>
                        <ul className="list-group">
                            <li className="py-4 border-b border-gray-200 w-full rounded-t-lg"><b>Descripción:</b> {description}</li>
                            <li className="py-4 border-b border-gray-200 w-full rounded-t-lg"><b>Categoria:</b> {category}</li>
                            <li className="py-4 border-b border-gray-200 w-full rounded-t-lg"><b>Publicado el:</b> {date}</li>
                            <li className="py-4 border-b border-gray-200 w-full rounded-t-lg"><b>Etiquetas:</b> {tags}</li>
                        </ul>
                        <br></br>
                        <div className="text-right">
                            <button
                                type="button"
                                className="inline-block px-6 py-2.5 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                onClick={handleReturn}
                            >Regresar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-black px-20 rounded-sm text-3xl font-extrabold'>Reviews</h1>


            </div>

            <div className='py-10 px-20 font-bold'>
                <p> REVIEW 1...</p>
                <p> REVIEW 2...</p>
                <p> REVIEW 3...</p>
                <p> REVIEW 4...</p>

            </div>
        </>
    )
}
