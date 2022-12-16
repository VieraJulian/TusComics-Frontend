import '../../public/css/Login-mobile.css'

function Login() {
    return (
        <>
            <div className="login-container">
                <h1 className='login-h1'>Ingresá</h1>
                <form className="form-login">
                    <label>E-mail:</label>
                    <input className='input-login' type="text" />
                    <label>Password:</label>
                    <input className='input-login' type="password" />
                    <label>Recordarme:</label>
                    <input className='recordame' type="checkbox"/>
                    <button className="boton-login" type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}

export default Login