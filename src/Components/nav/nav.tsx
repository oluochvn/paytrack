import './nav.css'

function Nav(){

    return(
        <nav>
            <h1 className='head'><span className='headp'>Pay</span>track</h1>
            <ul>
                <li><a href="">Features</a></li>
                <li><a href="">How it Works</a></li>
                <li><a href="">Pricing</a></li>
            </ul>
            <div className='div'>
            <button><a href="">Register</a></button>
            <a href=""><button className='btnlight'>login</button></a>
            </div>
        </nav>
    )
}
export default Nav;