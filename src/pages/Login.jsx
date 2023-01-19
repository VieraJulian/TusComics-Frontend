import "../../public/css/Login-mobile.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/users"

function Login() {
    const navigate = useNavigate();
    const [body, setBody] = useState({ email: null, password: null, recordame: null });

    const seting = e => {
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    }

    const recordame = e => {
        setBody({
            ...body,
            recordame: body.recordame === "on" ? undefined : e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            let result = await login(body)
            let msgErrors = document.querySelectorAll(".msg-error");

            msgErrors[0].classList.remove("invalid")
            msgErrors[1].classList.remove("invalid")

            if (Array.isArray(result)) {
                result.forEach(error => {
                    if (error.param === "email") {
                        msgErrors[0].innerText = error.msg
                        msgErrors[0].classList.add("invalid")
                    } else if (error.param === "password") {
                        msgErrors[1].innerText = error.msg
                        msgErrors[1].classList.add("invalid")
                    }
                })
            } else {
                msgErrors[0].classList.remove("invalid")
                msgErrors[1].classList.remove("invalid")
                navigate("/")
            }  
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="login-container">
                <h1 className="login-h1">Ingresá</h1>
                <form className="form-login" method="post" onSubmit={onSubmit}>
                    <label>E-mail:</label>
                    <input className="input-login" name="email" type="text" onChange={seting} />
                    <p className="msg-error"></p>
                    <label>Password:</label>
                    <input className="input-login" name="password" type="password" onChange={seting} />
                    <p className="msg-error"></p>
                    <label>Recordarme:</label>
                    <input className="recordame" name="recordame" type="checkbox" onChange={recordame} />
                    <button className="boton-login" type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}

export default Login