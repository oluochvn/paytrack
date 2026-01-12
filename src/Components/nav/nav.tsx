import './nav.css'
import { Link } from 'react-router-dom';

function Nav(){

    return(
        <nav className='nav'>
            <h1 className='head'><span className='headp'>Pay</span>track</h1>
            <ul>
                <li><a href="">Features</a></li>
                <li><a href="">How it Works</a></li>
                <li><a href="">Pricing</a></li>
            </ul>
            <div className='div'>
            <button className='btnnav'><Link to="/login">Login</Link></button>
            <button className='btnlight'><Link to="/signup">Signup</Link></button>
            </div>
        </nav>
    )
}
export default Nav;