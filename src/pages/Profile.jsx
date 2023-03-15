import { Link } from 'react-router-dom'
import '../../public/css/Profile-mobile.css'
import '../../public/css/Profile-tablet.css'
import '../../public/css/Profile-desktop.css'

function Profile() {
    let userLogged = JSON.parse(sessionStorage.getItem("user"));

    let urlImage = `http://localhost:3000/imagen?imagen=${userLogged.img}`

    return (
        <>
            <div className="profile-container">
                <div className='profile-container-1'>
                    <h1 className='profile-h1'>Mi perfil</h1>
                    <section className='profile-section'>
                        <picture>
                            <img src={urlImage} alt="Imagen de perfil" />
                        </picture>
                        <p className='first-p'>Nombre:</p>
                        <p className='second-p'>{userLogged.name}</p>
                        <p className='first-p'>E-mail:</p>
                        <p className='second-p'>{userLogged.email}</p>
                        <Link to="/editProfile">Editar Perfil</Link>
                    </section>
                </div>
                <div className='profile-container-2'>
                    <h1 className='profile-h1'>Mis Pedidos</h1>
                    <section className='pedidos-section'>
                        <div className='first-div-profile'>
                            <span>#</span><span>Fecha</span><span className='envio'>Envío</span><span>Pago</span><span>Total</span>
                        </div>
                        <div>
                            <div className='second-div-profile'>
                                <span>1</span><span>2022/05/04 10:00</span><span className='envio'>Correo Argentino</span><span>Efectivo</span><span>$1220</span>
                            </div>
                            <div className='viewOrderButton-container'>
                                <button><p>Ver detalle del pedido</p></button>
                            </div>
                        </div>
                        <div>
                            <div className='second-div-profile'>
                                <span>2</span><span>2022/05/04 10:00</span><span className='envio'>Correo Argentino</span><span>Efectivo</span><span>$8900</span>
                            </div>
                            <div className='viewOrderButton-container'>
                                <button><p>Ver detalle del pedido</p></button>
                            </div>
                        </div>
                        <div>
                            <div className='second-div-profile'>
                                <span>3</span><span>2022/05/04 10:00</span><span className='envio'>Correo Argentino</span><span>Efectivo</span><span>$2390</span>
                            </div>
                            <div className='viewOrderButton-container'>
                                <button><p>Ver detalle del pedido</p></button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Profile