import '../../public/css/EditProduct-mobile.css'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { detail } from "../services/products"
import { useNavigate } from "react-router-dom";
import { editProduct } from '../services/products';

function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState([])
    useEffect(() => {
        detail(id).then(setProduct)
    }, [id])

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            let fileN = document.getElementById("fileN");
            let nombreN = document.getElementById("nameN").value;
            let descriptionN = document.getElementById("descriptionN").value;
            let priceN = document.getElementById("priceN").value;
            let market = document.getElementById("marketN").checked;

            let msgErrors = document.querySelectorAll(".msg-error");

            let formData = new FormData();
            formData.append("name", nombreN);
            formData.append("description", descriptionN);
            formData.append("price", priceN);
            formData.append("files", fileN.files[0]);
            formData.append("market", market);

            let result = await editProduct(id, formData);

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
                navigate(`/detail/${product.id}`)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="editProduct-container">
                <h1 className='editProduct-h1'>Editar Producto</h1>
                <form encType="multipart/form-data" method="post" className="form-editProduct" onSubmit={onSubmit}>
                    <label>Nombre:</label>
                    <input className='input-editProduct' type="text" id="nameN" defaultValue={product.name} />
                    <p className="msg-error"></p>
                    <label>Descripción:</label>
                    <textarea type="text" id="descriptionN" defaultValue={product.description} />
                    <p className="msg-error"></p>
                    <label>Precio</label>
                    <input className='input-editProduct' type="number" id="priceN" defaultValue={product.price} />
                    <p className="msg-error"></p>
                    <label>Imagen</label>
                    <input className='input-editProduct' type="file" id="fileN" />
                    <p className="msg-error"></p>
                    <label>Marcar:</label>
                    <input className="check-editProduct" type="checkbox" id="marketN" />
                    <button className="boton-editProduct" type='submit'>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default EditProduct