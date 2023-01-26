import '../../public/css/EditProfile-mobile.css';
import { profileEdit } from '../services/users'
import { useNavigate } from "react-router-dom";

function editProfile() {
    const navigate = useNavigate();
    let userLogged = JSON.parse(sessionStorage.getItem("user"));
    
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            let fileN = document.getElementById("fileN");
            let nombreN = document.getElementById("nombreN").value;
            let passwordN = document.getElementById("passwordN").value;
            let newPasswordN = document.getElementById("newPasswordN").value;
            let msgErrors = document.querySelectorAll(".msg-error");
            let formData = new FormData();
            formData.append("name", nombreN);
            formData.append("password", passwordN);
            formData.append("newPassword", newPasswordN);
            formData.append("files", fileN.files[0]);
            formData.append("email", userLogged.email);

            let result = await profileEdit(formData);

            msgErrors[0].classList.remove("invalid")
            msgErrors[1].classList.remove("invalid")
            msgErrors[2].classList.remove("invalid")
            msgErrors[3].classList.remove("invalid")

            if (Array.isArray(result)) {
                result.forEach(error => {
                    if (error.param === "name") {
                        msgErrors[0].innerText = error.msg
                        msgErrors[0].classList.add("invalid")
                    } else if (error.param === "password") {
                        msgErrors[1].innerText = error.msg
                        msgErrors[1].classList.add("invalid")
                    } else if (error.param === "newPassword") {
                        msgErrors[2].innerText = error.msg
                        msgErrors[2].classList.add("invalid")
                    } else if (error.param === "image") {
                        msgErrors[3].innerText = error.msg
                        msgErrors[3].classList.add("invalid")
                    }
                })
            } else {

                let userUpdated = {
                    id: userLogged.id,
                    name: result.name,
                    email: userLogged.email,
                    img: result.img,
                    admin: userLogged.admin
                }

                sessionStorage.setItem("user", JSON.stringify(userUpdated))

                navigate("/profile")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="editProfile-container">
                <h1 className="editProfile-h1">Editar Perfil</h1>
                <form encType="multipart/form-data" method="post" className='form-editProfile' onSubmit={onSubmit}>
                    <label>Nombre:</label>
                    <input type="text" name="name" id="nombreN" defaultValue={userLogged.name}/>
                    <p className="msg-error"></p>
                    <label>E-mail:</label>
                    <p className='second-p' name="email">{userLogged.email}</p>
                    <label>Password:</label>
                    <input type="password" name="password" id="passwordN"/>
                    <p className="msg-error"></p>
                    <label>New Password:</label>
                    <input type="password" name="rePassword" id="newPasswordN"/>
                    <p className="msg-error"></p>
                    <label>Imagen:</label>
                    <input type="file" name="file" id="fileN"/>
                    <p className="msg-error"></p>
                    <button className="boton-editProfile" type='submit'>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default editProfile