import { Link } from 'react-router-dom'
import '../../public/css/Footer-mobile.css'
import '../../public/css/Footer-desktop.css'

function Footer() {
    return (
        <>
            <footer>
                <Link to="/">INICIO</Link>
                <Link to="/comics">COMICS</Link>
                <Link to="/">FIGURAS</Link>
                <picture>
                    <Link to='/'><img src="/public/img/logo.png" alt="Logo" /></Link>
                </picture>
            </footer>
        </>
    )
}

export default Footer