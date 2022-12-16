import '../../public/css/Register-mobile.css'

function Register() {
    return (
        <>
            <div className='register-container'>
                <h1 className='register-h1'>Regístrate</h1>
                <form className='form-register' encType="multipart/form-data">
                    <label>Nombre:</label>
                    <input type="text" />
                    <label>E-mail:</label>
                    <input type="text" />
                    <label>Password:</label>
                    <input type="password" />
                    <label>Foto de perfil:</label>
                    <input type="file" />
                    <button className="boton-register" type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}

export default Register