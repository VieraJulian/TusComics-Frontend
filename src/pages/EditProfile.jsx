import '../../public/css/EditProfile-mobile.css'

function editProfile() {
    return (
        <>
            <div className="editProfile-container">
                <h1 className="editProfile-h1">Editar Perfil</h1>
                <form className='form-editProfile' encType="multipart/form-data">
                    <label>Nombre:</label>
                    <input type="text" />
                    <label>E-mail:</label>
                    <p className='second-p'>fulanito@gamil.com</p>
                    <label>Password:</label>
                    <input type="password"/>
                    <label>New Password:</label>
                    <input type="password"/>
                    <label>Imagen:</label>
                    <input type="file" />
                    <button className="boton-editProfile" type='submit'>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default editProfile