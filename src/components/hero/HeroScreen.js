import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';

// import spidey from '../../assets/marvel-spider.jpg'; //estatico

// const heroImages = require.context('../../assets/heroes', true);

export const HeroScreen = () => {

    const { heroeId } = useParams();
    const navigate = useNavigate()

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

    const handleReturn = () => {
        navigate(-1);
    }

    if (!hero) {
        return <Navigate to='/' />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    // const imagePath = `/assets/${ id }.jpg`;
    // const imagePath = spidey; //import
    const imagePath = heroImages(`./${heroeId}.jpg`)

    return (
        <>
            <hr></hr>
            <div className="flex justify-center card p-20">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg border-2 border-black p-3">
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg relative">
                        <img
                            src={imagePath}
                            alt={superhero}
                            className="img-thumbnail animate__animated animate__fadeInRight" />
                    </div>
                    <div className="p-4 flex flex-col justify-start">
                        <h3 className="text-gray-900 text-xl font-extrabold card-header"> {hero.superhero} </h3>
                        <ul className="flex justify-center">
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
                            <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"><b>Alter ego:</b> {alter_ego}</li>
                            <li className="px-6 py-2 border-b border-gray-200 w-full"><b>Publisher:</b> {publisher}</li>
                            <li className="px-6 py-2 w-full rounded-b-lg"><b>First Appearance:</b> {first_appearance}</li>
                        </ul>
                        <hr></hr>
                        <h3 className="text-gray-600 font-bold">Characters</h3>
                        <p className='text-center truncate md:overflow-clip'>{characters}</p>
                        <hr></hr>
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
        </>
    )
}
