import { useNavigate } from "react-router-dom"

const LoginScreen = () => {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/marvel', { replace: true })
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
