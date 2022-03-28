import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import { Footer } from '../ui/Footer';
import { Navbar } from '../ui/Navbar';


export const LoginScreen = () => {

    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext)

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: { name: 'Cristian Martinez' }
        }

        dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/marvel';


        navigate(lastPath, {
            replace: true
        });
    }


    // <button
    //     className="bg-neutral-700 text-white px-8 py-2 rounded-lg text-xl font-medium hover:bg-orange-600 hover:text-whit"
    //     onClick={handleLogin}
    // >
    //     Login
    // </button>


    return (
        <>
            <Navbar />
            <h1 className='bg-slate-600 text-white px-6 py-2 rounded-sm text-xl font-medium '>Login</h1><hr />

            <div className="p-20 lg:w-1/3 mx-auto rounded-lg lg:my-20 shadow-2xl bg-slate-100 border-2 border-black">
                <div className="grid">
                    <div className='text-center'>
                        <h5 className="text-yellow-500 text-4xl font-bold mb-2">Ingresar</h5>
                    </div>
                    <div className="p-10 rounded-lg max-w-6xl">
                        <button
                            className="uppercase h-20 mt-3 text-white w-full rounded bg-blue-800 hover:bg-blue-900"
                            onClick={handleLogin}
                        >
                            <i className="fa fa-facebook mr-2">
                            </i>Facebook
                        </button>
                        <button className="uppercase h-20 mt-3 text-white w-full rounded bg-red-800 hover:bg-red-900">
                            <i className="fa fa-google mr-2"></i>Google
                        </button>
                    </div>
                </div>
                </div>

        </>
    )
}
