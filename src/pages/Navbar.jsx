import { Link, useNavigate } from 'react-router-dom';
import "../../public/css/Navbar-mobile.css"
import "../../public/css/Navbar-tablet.css"
import "../../public/css/Navbar-desktop.css"

function Navbar() {
    const navigate = useNavigate();

    let userLogged = JSON.parse(sessionStorage.getItem("user"));

    let logout = () => {
        Swal.fire({
            title: 'Quieres salir?',
            showDenyButton: true,
            confirmButtonText: 'Cerrar sesión'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Sesión cerrada con éxito!', '', 'success')
                sessionStorage.removeItem("user")
                navigate("/login")
            }
        })
    }

    let headerTop = userLogged === null ? <div><Link to="/login">LOGIN</Link><span>|</span><Link to="/register">REGISTRARSE</Link></div> : <Link to="#" onClick={logout}>LOGOUT</Link>
    let notUser = <div>
        <Link to="/">INICIO</Link>
        <Link to="/comics">COMICS</Link>
        <Link to="/mangas">MANGAS</Link>
        <Link to="/collectibles">FIGURAS</Link></div>
    let userLogin = <div>
        <Link to="/">INICIO</Link>
        <Link to="/comics">COMICS</Link>
        <Link to="/mangas">MANGAS</Link>
        <Link to="/collectibles">FIGURAS</Link>
        <Link to="/profile"><i className="fa-solid fa-user"></i></Link></div>
    let userAdmin = <div>
        <Link to="/">INICIO</Link>
        <Link to="/comics">COMICS</Link>
        <Link to="/mangas">MANGAS</Link>
        <Link to="/collectibles">FIGURAS</Link>
        <Link to="/profile"><i className="fa-solid fa-user"></i></Link>
        <Link to="/newProduct"><i className="fa-solid fa-circle-plus"></i></Link>
        {/* <Link to="/editProduct"><i className="fa-solid fa-pen-to-square"></i></Link> */}</div>

    let userN;

    if (!userLogged) {
        userN = notUser
    } else if (userLogged && userLogged.admin === false) {
        userN = userLogin
    } else if (userLogged && userLogged.admin === true) {
        userN = userAdmin
    }

    return (
        <>
            <header>
                <div className='first-div'>
                    {headerTop}
                </div>
                <picture className='header-picture'>
                    <img src="/public/img/logo.png" alt="Logo" />
                </picture>
                <nav className='header-nav'>
                    <form action="#">
                        <input type="text" />
                        <button className="button-search" type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                    {userN}
                    {/* <Link to="/"><i className="fa-solid fa-magnifying-glass lupa"></i></Link> */}
                    <div className='cart-container'>
                        <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link><span className='cart-number'>0</span>
                        <div className='container-cart-products'>
                            <div className='close-cart-container'><i class="fa-solid fa-circle-xmark"></i></div>
                            <div className='row-product'>
                                <div className='cart-info'>
                                    <p>1</p>
                                    <p>OnePiece</p>
                                    <p>$ 3000</p>
                                    <div>
                                        <button className="btnQuantityMore">+</button>
                                        <button className="btnQuantityLess">-</button>
                                    </div>
                                </div>
                                <div className='cart-product-delete'>
                                    <i class="fa-solid fa-trash-can"></i>
                                </div>
                            </div>
                            <div className='row-product'>
                                <div className='cart-info'>
                                    <p>1</p>
                                    <p>OnePiece</p>
                                    <p>$ 3000</p>
                                    <div>
                                        <button className="btnQuantityMore">+</button>
                                        <button className="btnQuantityLess">-</button>
                                    </div>
                                </div>
                                <div className='cart-product-delete'>
                                    <i class="fa-solid fa-trash-can"></i>
                                </div>
                            </div>
                            <div className='row-product'>
                                <div className='cart-info'>
                                    <p>1</p>
                                    <p>OnePiece</p>
                                    <p>$ 3000</p>
                                    <div>
                                        <button className="btnQuantityMore">+</button>
                                        <button className="btnQuantityLess">-</button>
                                    </div>
                                </div>
                                <div className='cart-product-delete'>
                                    <i class="fa-solid fa-trash-can"></i>
                                </div>
                            </div>
                            <div className="cart-total">
                                <h3>Total:</h3>
                                <span className="total-pagar">$3000</span>
                            </div>
                            <div className='cart-buttons'>
                                <button className="cart-full">Pagar ahora</button>
                                <button className="btn-clear-all">Vaciar carrito</button>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>
        </>
    )
}

export default Navbar