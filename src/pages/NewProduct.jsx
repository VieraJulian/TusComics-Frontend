import '../../public/css/NewProduct-mobile.css'
import { useNavigate } from "react-router-dom";
import { newProduct } from '../services/products'


function NewProduct() {
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            let file = document.getElementById("fileN");
            let name = document.getElementById("nameN").value;
            let category = document.getElementById("categoryN").value;
            let description = document.getElementById("descriptionN").value;
            let price = document.getElementById("priceN").value;
            let market = document.getElementById("marketN").checked;
            let msgErrors = document.querySelectorAll(".msg-error");

            let formData = new FormData();
            formData.append("name", name);
            formData.append("category", category);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("market", market);
            formData.append("file", file.files[0]);

            let result = await newProduct(formData)

            msgErrors[0].classList.remove("invalid")
            msgErrors[1].classList.remove("invalid")
            msgErrors[2].classList.remove("invalid")
            msgErrors[3].classList.remove("invalid")

            if (Array.isArray(result)) {
                result.forEach(error => {
                    if (error.param === "name") {
                        msgErrors[0].innerText = error.msg
                        msgErrors[0].classList.add("invalid")
                    } else if (error.param === "description") {
                        msgErrors[1].innerText = error.msg
                        msgErrors[1].classList.add("invalid")
                    } else if (error.param === "price") {
                        msgErrors[2].innerText = error.msg
                        msgErrors[2].classList.add("invalid")
                    } else if (error.param === "image") {
                        msgErrors[3].innerText = error.msg
                        msgErrors[3].classList.add("invalid")
                    }
                })
            } else {
                navigate(`/detail/${result.id}`)
            }
        } catch (error) {
            console.error(error);
        }
    }



    return (
        <>
            <div className="newProduct-container">
                <h1 className='newProduct-h1'>Nuevo Producto</h1>
                <form encType="multipart/form-data" method="post" className="form-newProduct" onSubmit={onSubmit}>
                    <label>Nombre:</label>
                    <input className='input-newProduct' id="nameN" type="text" />
                    <p className="msg-error"></p>
                    <label>Categoría:</label>
                    <select id="categoryN">
                        <option value="Comics">Comics</option>
                        <option value="Mangas">Mangas</option>
                        <option value="Coleccionables">Coleccionables</option>
                    </select>
                    <label>Descripción:</label>
                    <textarea type="text" id="descriptionN" />
                    <p className="msg-error"></p>
                    <label>Precio</label>
                    <input className='input-newProduct' type="number" id="priceN" />
                    <p className="msg-error"></p>
                    <label>Imagen</label>
                    <input className='input-newProduct' type="file" id="fileN" />
                    <p className="msg-error"></p>
                    <label>Marcar:</label>
                    <input className="check-newProduct" type="checkbox" id="marketN" />
                    <button className="boton-newProduct" type='submit'>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default NewProduct