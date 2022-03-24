import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';



export const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={
                <PublicRoute>
                    <LoginScreen />
                </PublicRoute>
            } 
            />
            <Route path="/*" element={ 
                <PrivateRoute>
                    <DashboardRoutes />
                </PrivateRoute>
            } 
            />
        </Routes>
        </BrowserRouter>
    )
}




















// import { Routes, Route, BrowserRouter } from 'react-router-dom';

// import { PrivateRoute } from './PrivateRoute';
// import { PublicRoute } from './PublicRoute';

// import { LoginScreen } from '../components/login/LoginScreen';
// import { DashboardRoutes } from './DashboardRoutes';



// export const AppRouter = () => {
//     return (
//         <BrowserRouter>
            
//             <Routes>
                
//                 {/* <Route path="/login" element={<LoginScreen />} /> */}
//                 <Route path="/login" element={
//                     <PublicRoute>
//                         <LoginScreen />
//                     </PublicRoute>
//                 } 
//                 />
                

//                 <Route path="/*" element={ 
//                         <PrivateRoute>
//                             <DashboardRoutes />
//                         </PrivateRoute>
//                     } 
//                 />

//                 {/* <Route path="/*" element={ <DashboardRoutes />  } /> */}

//             </Routes>
//         </BrowserRouter>
//     )
// }


/* import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';

import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);



    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( async(user) => {

            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );
                dispatch( startLoadingNotes( user.uid ) );

            } else {
                setIsLoggedIn( false );
            }

            setChecking(false);

        });
        
    }, [ dispatch, setChecking, setIsLoggedIn ])


    if ( checking ) {
        return (
            <h1>Wait...</h1>
        )
    }

    
    return (
        <Router>
            <div>
                <Route>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ JournalScreen }
                    />

                    <Link to="/auth/login" />


                </Route>
            </div>
        </Router>
    )
} */
