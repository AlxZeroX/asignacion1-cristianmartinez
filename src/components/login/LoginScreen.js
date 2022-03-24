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
            <div className="container mt-5">
                <h1>Login</h1>
                <hr />

                <button
                    className="btn btn-primary"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>


            <div className="auth__social-networks">
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



            <Footer />
        </>
    )
}
