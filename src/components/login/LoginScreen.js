import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { startFacebookLogin, startGoogleLogin } from "../../action/auth";

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFacebook = () => {
        dispatch(startFacebookLogin());
        navigate("/");
    }

    const handleGoogle = () => {
        dispatch(startGoogleLogin());
        navigate("/");
    }

    return (
        <>       
            <h1 className='bg-slate-600 text-white px-6 py-2 rounded-sm text-xl font-medium '>Login</h1><hr />

            <div className="p-20 lg:w-1/3 mx-auto rounded-lg lg:my-20 shadow-2xl bg-slate-100 border-2 border-black">
                <div className="grid">
                    <div className='text-center'>
                        <h5 className="text-yellow-500 text-4xl font-bold mb-2">Ingresar</h5>
                    </div>
                    <div className="p-10 rounded-lg max-w-6xl">
                        <button
                            className="h-20 mt-3 text-white w-full rounded bg-blue-800 hover:bg-blue-900"
                            onClick={handleFacebook}
                        >
                            <i className="fa fa-facebook-square mr-2">
                            </i>Facebook
                        </button>
                        <button
                            className="h-20 mt-3 text-white w-full rounded bg-red-800 hover:bg-red-900"
                            onClick={handleGoogle}
                        >
                            <i className="fa fa-google mr-2">
                            </i>
                            Google
                        </button>
                    </div>
                    <br />
                    <div className="grid text-center">
                    <Link
                        to="/"
                        className="bg-blue-800 text-white font-bold py-2 rounded cursor-pointer hover:bg-red-500 "
                    >
                        Regresar
                    </Link>
                    </div>
                </div>
            </div>

        </>
    )
}
