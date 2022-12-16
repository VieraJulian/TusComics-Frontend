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
                    <p className='second-p last-p'>fulanito@gamil.com</p>
                </section>
            </div>
        </>
    )
}

export default Profile