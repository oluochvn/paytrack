import './login.css'


function Login(){
    return(
<div className="fill">
  <div className='mainlog'>
  <p>Welcome to Pesatrak</p>
  <h2>Sign In</h2>

  <form className="form">
    <label htmlFor="email">Email</label>
    <input id="email" name="email" type="email" required />

    <label htmlFor="password">Password</label>
    <input id="password" name="password" type="password" required />
      <p className='paras'>dont have an account <a className='sign' href="/signup">Signup</a></p>
    <button className='btnlog' type="submit">Submit</button>
  </form>
  </div>
  <div className='contentlog'>
      <h3>WELCOME BACK</h3>
  </div>
</div>

    )
}
export default Login;