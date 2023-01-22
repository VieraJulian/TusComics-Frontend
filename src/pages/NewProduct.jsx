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
            let description = document.getElementById("descriptionN").value;
            let price = document.getElementById("priceN").value;
            let market = document.getElementById("marketN").checked;
            
            let formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("market", market);
            formData.append("file", file.files[0]);
            
            let result = await newProduct(formData)
            console.log(result);

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
                    <label>Descripción:</label>
                    <textarea type="text" id="descriptionN"/>
                    <label>Precio</label>
                    <input className='input-newProduct' type="number" id="priceN"/>
                    <label>Imagen</label>
                    <input className='input-newProduct' type="file" id="fileN"/>
                    <label>Marcar:</label>
                    <input  className="check-newProduct" type="checkbox" id="marketN"/>
                    <button className="boton-newProduct" type='submit'>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default NewProduct