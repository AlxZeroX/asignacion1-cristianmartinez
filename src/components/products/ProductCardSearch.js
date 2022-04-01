import { Link } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { DatoActivo } from "../../action/productos";
import { getCommentsImg } from "../../action/comment";
import { gameImages } from "../../helpers/gameImages";
const appland = require.context("../../assets/imagenes", true);

export const ProductCardSearch = ({
    calificacion,
    id,
    productname,
    description,
    shortdescription,
    tags,
    date,
    img,
    category,
    rating
}) => {
    const dispatch = useDispatch();

    const handleactivo = () => {
        dispatch(
            DatoActivo({
                calificacion,
                id,
                productname,
                description,
                shortdescription,
                tags,
                date,
                img,
                category,
                rating
            })
        );
        dispatch(getCommentsImg(id));
    };

    // const imagePath = `/assets/${id}.jpg`;
    const imagePath = gameImages(`./${id}.jpg`);

    return (
        <div className="animate__animated animate__fadeIn">
            <div className="">

                <div className="justify-center flex py-3">
                    <div className="rounded-lg shadow-lg bg-slate-50 border-2 border-black max-w-sm">
                        <div className="p-6">
                            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img src={imagePath} className="" alt={productname} />
                                </a>
                            </div>
                            <h5 className="text-gray-900 text-xl font-medium mb-2">{productname}</h5>
                            <h5 className="text-gray-900 font-medium mb-2 truncate">{shortdescription}</h5>
                            <div className="flex overflow-hidden mt-5 ">
                                <img
                                    src={appland(
                                        calificacion < 1 ? "./star-empty.jpg" : "./FilledStar.jpg"
                                    )}
                                    className="h-6 w-6 "
                                    alt=""
                                />
                                <img
                                    src={appland(
                                        calificacion < 2 ? "./star-empty.jpg" : "./FilledStar.jpg"
                                    )}
                                    className="h-6 w-6 "
                                    alt=""
                                />
                                <img
                                    src={appland(
                                        calificacion < 3 ? "./star-empty.jpg" : "./FilledStar.jpg"
                                    )}
                                    className="h-6 w-6 "
                                    alt=""
                                />
                                <img
                                    src={appland(
                                        calificacion < 4 ? "./star-empty.jpg" : "./FilledStar.jpg"
                                    )}
                                    className="h-6 w-6 "
                                    alt=""
                                />
                                <img
                                    src={appland(
                                        calificacion < 5 ? "./star-empty.jpg" : "./FilledStar.jpg"
                                    )}
                                    className="h-6 w-6 "
                                    alt=""
                                />
                            </div>
                            <div className="text-right">
                            <Link to={`/item/${rating}`}>
                                        <button
                                            type="button"
                                            className="inline-block px-6 py-2.5 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                            onClick={handleactivo}
                                        >
                                            Ver Mas
                                        </button>
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}