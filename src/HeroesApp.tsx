import { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import AppRouter from './routers/AppRouter';

const initState = () => {
  return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : { isAuthenticated: false }
}

const HeroesApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, initState);//

  useEffect(() => {

    if (!user) return;
    localStorage.setItem('user', JSON.stringify(user));

  }, [user])


  return (
    < AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </ AuthContext.Provider>


  )
}

export default HeroesApp;
