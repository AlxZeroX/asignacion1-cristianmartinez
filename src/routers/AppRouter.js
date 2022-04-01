import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { login } from "../action/auth";
import { getComments } from "../action/comment";
import { LoginScreen } from "../components/login/LoginScreen";
import { firebaseApp } from "../firebase/firebase-config";
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    
    const auth = getAuth(firebaseApp);
    dispatch(getComments());
    
    onAuthStateChanged(auth, (async(user)=>{

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
      }

    }));
  }, [dispatch])

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/login"
            element={<LoginScreen /> }
          />
          <Route
            path="/*"
            element={<DashboardRoutes />}
          />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};