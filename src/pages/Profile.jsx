import { Link } from 'react-router-dom'
import '../../public/css/Profile-mobile.css'

function Profile() {
    return (
        <>
            <div className="profile-container">
                <h1 className='profile-h1'>Mi perfil</h1>
                <section className='profile-section'>
                    <picture>
                        <img src="../../public/img/spider_ok.jpg" alt="" />
                    </picture>
                    <p className='first-p'>Nombre:</p>
                    <p className='second-p'>Fulanito</p>
                    <p className='first-p'>E-mail:</p>
                    <p className='second-p'>fulanito@gamil.com</p>
                    <Link to="/editProfile">Editar Perfil</Link>
                </section>
                <h1 className='profile-h1'>Mis Pedidos</h1>
                <section className='pedidos-section'>
                    <div className='first-div-profile'>
                        <span>#</span><span>Fecha</span><span>Envío</span><span>Pago</span><span>Total</span>
                    </div>
                    <div className='second-div-profile'>
                        <span>1</span><span>2022/05/04 10:00</span><span>Correo Argentino</span><span>Efectivo</span><span>$1220</span>
                    </div><button><i className="fa-solid fa-eye"></i></button>
                </section>
            </div>
        </>
    )
}

export default Profile