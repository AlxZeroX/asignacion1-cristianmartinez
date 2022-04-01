import React, { useEffect, useState } from "react";
import { Calificacion } from "./Calificacion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EliminarComment } from "../../action/comment";
const appland = require.context("../../assets/imagenes", true);

export const ProductScreen = () => {
    const navigate = useNavigate();

    const stateProducts = useSelector((state) => state.producto);

    const [activeProduct, setActiveProduct] = useState({
        calificacion: 0,
        productname: "",
        description: "",
        tags: "",
        date: "",
        img: "",
        category: "",
    });

    const { productname, description, tags, date, img, category } =
        activeProduct;

    const { calificacion } = useSelector(state => state.producto);
    console.log(calificacion)

    useEffect(() => {
        if (stateProducts?.activeproducts) {
            setActiveProduct({
                calificacion: calificacion,
                productname: stateProducts.activeproducts.productname,
                description: stateProducts.activeproducts.description,
                tags: stateProducts.activeproducts.tags,
                date: stateProducts.activeproducts.date,
                img: stateProducts.activeproducts.img,
                category: stateProducts.activeproducts.category,
            });
        }

    }, [stateProducts, calificacion]);

    const dispatch = useDispatch();

    const handleReturn = () => {
        dispatch(EliminarComment());
        navigate(-1);
    };
    return (
        <>
            <h1 className='bg-slate-600 text-yellow-100 px-6 py-2 rounded-sm text-xl font-medium'>{productname}</h1>

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
                            src={img}
                            alt={productname}
                            className="animate__animated animate__fadeInRight" />
                    </div>
                    <div className="p-1 flex flex-col items-center">
                        <h3 className="text-gray-900 text-2xl font-extrabold card-header"> {productname} </h3>
                        <div className="flex overflow-hidden mb-4">
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
            <Calificacion />
        </>
    )
}
