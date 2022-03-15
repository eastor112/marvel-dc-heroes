import { useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/authContext"
import { types } from '../../types/types';


const LoginScreen = () => {

  const navigate = useNavigate()

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {

    dispatch({
      type: types.login,
      payload: {
        name: 'Emerson',
      }
    })
    const path = localStorage.getItem('lastPath')

    navigate(path || '/marvel', { replace: true })
  }

  return (
    <div className="container mt-5">
      <h3>LoginScreen</h3>
      <hr />
      <button
        className="btn btn-primary btn-block"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}

export default LoginScreen;
