import { Link } from 'react-router-dom'
import "../../public/css/Navbar-mobile.css"
import "../../public/css/Navbar-tablet.css"
import "../../public/css/Navbar-desktop.css"

function Navbar() {
    return (
        <>
            <header>
                <div className='first-div'>
                    <Link to="/login">LOGIN</Link><span>|</span><Link to="/register">REGISTRARSE</Link>
                </div>
                <picture className='header-picture'>
                    <img src="/public/img/logo.png" alt="Logo" />
                </picture>
                <nav className='header-nav'>
                    <Link to="/">INICIO</Link>
                    <Link to="/comics">COMICS</Link>
                    <Link to="/collectibles">FIGURAS</Link>
                    <div className='cart-container'>
                        <Link to="/"><i class="fa-solid fa-cart-shopping"></i></Link><span className='cart-number'>0</span>
                    </div>
                    <Link to="/"><i class="fa-solid fa-magnifying-glass lupa"></i></Link>
                    <form action="#">
                        <input type="text" />
                        <button className="button-search" type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </nav>

            </header>
        </>
    )
}

export default Navbar