import "../../public/css/Register-mobile.css"
import { useNavigate } from "react-router-dom";
import { register } from "../services/users";

function Register() {
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            let fileN = document.getElementById("fileN");
            let nombreN = document.getElementById("nombreN").value;
            let emailN = document.getElementById("emailN").value;
            let passwordN = document.getElementById("passwordN").value;
            let msgErrors = document.querySelectorAll(".msg-error");
            let formData = new FormData();
            formData.append("name", nombreN);
            formData.append("email", emailN);
            formData.append("password", passwordN);
            formData.append("files", fileN.files[0]);

            let result = await register(formData)

            msgErrors[0].classList.remove("invalid")
            msgErrors[1].classList.remove("invalid")
            msgErrors[2].classList.remove("invalid")
            msgErrors[3].classList.remove("invalid")

            if (Array.isArray(result)) {
                result.forEach(error => {
                    if (error.param === "name") {
                        msgErrors[0].innerText = error.msg
                        msgErrors[0].classList.add("invalid")
                    } else if (error.param === "email") {
                        msgErrors[1].innerText = error.msg
                        msgErrors[1].classList.add("invalid")
                    } else if (error.param === "password") {
                        msgErrors[2].innerText = error.msg
                        msgErrors[2].classList.add("invalid")
                    } else if (error.param === "image") {
                        msgErrors[3].innerText = error.msg
                        msgErrors[3].classList.add("invalid")
                    }
                })
            } else {
                msgErrors[0].classList.remove("invalid")
                msgErrors[1].classList.remove("invalid")
                msgErrors[2].classList.remove("invalid")
                msgErrors[3].classList.remove("invalid")
                navigate("/login")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="register-container">
                <h1 className="register-h1">Regístrate</h1>
                <form encType="multipart/form-data" method="post" className="form-register" onSubmit={onSubmit}>
                    <label>Nombre:</label>
                    <input type="text" name="name" id="nombreN" placeholder="Tu Nombre..." />
                    <p className="msg-error"></p>
                    <label>E-mail:</label>
                    <input type="text" name="email" id="emailN" placeholder="Tu E-mail..." />
                    <p className="msg-error"></p>
                    <label>Password:</label>
                    <input type="password" name="password" id="passwordN" placeholder="Contraseña..." />
                    <p className="msg-error"></p>
                    <label>Foto de perfil:</label>
                    <input type="file" name="file" id="fileN" />
                    <p className="msg-error"></p>
                    <button className="boton-register" type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}

export default Register