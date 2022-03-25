import { Link } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages';

// const heroImages = require.context('../../assets/heroes', true);


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    // const imagePath = `/assets/${id}.jpg`;
    const imagePath = heroImages(`./${id}.jpg`);

    return (

        <div className="animate__animated animate__fadeIn">
            <div className="">

                <div className="justify-center flex py-3">
                    <div className="rounded-lg shadow-lg bg-yellow-50 border-2 border-black max-w-sm">
                        <div className="p-6">
                            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src={imagePath} className="" alt={superhero} />
                                </a>
                            </div>
                            <h5 className="text-gray-900 text-xl font-medium mb-2">{superhero}</h5>
                            <h5 className="text-gray-900 font-medium mb-2">{alter_ego}</h5>
                            <div>
                                {(alter_ego !== characters)
                                    && <p className="text-muted truncate w-32" >{characters}</p>}
                            </div>

                            <div className="text-gray-700 text-base mb-4">
                                <p className="text-muted text-sky-400">{first_appearance}</p>
                            </div>
                            <div className="text-right">
                                <Link to={`/hero/${id}`}>
                                    <button type="button" className="inline-block px-6 py-2.5 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver Mas</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
