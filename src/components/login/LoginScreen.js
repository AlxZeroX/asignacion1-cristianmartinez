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


    return (

        <>
            <Navbar />

            <h1 className='bg-slate-600 text-white px-6 py-2 rounded-sm text-xl font-medium '>Login</h1> <hr />

            <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
                <div className='max-w-md w-full space-y-8'>
                    <button
                        className="bg-neutral-700 text-white px-8 py-2 rounded-lg text-xl font-medium hover:bg-orange-600 hover:text-whit"
                        onClick={handleLogin}
                    >
                        Login
                    </button>

                </div>


                <div className="">
                    <p>Login with social networks</p>

                    <div
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link
                    to="/auth/register"
                    className="link"
                >
                    Create new account
                </Link>


            </div>

            <Footer />
        </>
    )
}
