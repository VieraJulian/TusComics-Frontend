import '../../public/css/EditProduct-mobile.css'

function EditProduct() {
    return (
        <>
            <div className="editProduct-container">
                <h1 className='editProduct-h1'>Editar Producto</h1>
                <form className="form-editProduct" encType="multipart/form-data">
                    <label>Nombre:</label>
                    <input className='input-editProduct' type="text" />
                    <label>Descripción:</label>
                    <textarea type="text" />
                    <label>Precio</label>
                    <input className='input-editProduct' type="number" />
                    <label>Imagen</label>
                    <input className='input-editProduct' type="file" />
                    <label>Marcar:</label>
                    <input  className="check-editProduct" type="checkbox" />
                    <button className="boton-editProduct" type='submit'>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default EditProduct