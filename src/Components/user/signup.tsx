import { Link } from 'react-router-dom'
import './signup.css'

function Login() {
  return (
    <div className="fill">
      <p>Welcome to Pesatrak</p>
      <h2>Sign In</h2>

      <form className="form">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />

        <p className="paras">
          Don’t have an account?{" "}
          <Link className="sign" to="/signup">Sign up</Link>
        </p>

        <button className="btnlog" type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
