import '../../public/css/Login-mobile.css'

function Login() {
    return (
        <>
            <div className="login-container">
                <h1 className='login-h1'>Ingresá</h1>
                <form className="form-login">
                    <label>E-mail:</label>
                    <input type="text" />
                    <label>Password:</label>
                    <input type="password" />
                    <button className="boton-login" type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}

export default Login