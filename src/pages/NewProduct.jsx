import '../../public/css/NewProduct-mobile.css'

function NewProduct() {
    return (
        <>
            <div className="newProduct-container">
                <h1 className='newProduct-h1'>Nuevo Producto</h1>
                <form className="form-newProduct" encType="multipart/form-data">
                    <label>Nombre:</label>
                    <input className='input-newProduct' type="text" />
                    <label>Descripción:</label>
                    <textarea type="text" />
                    <label>Precio</label>
                    <input className='input-newProduct' type="number" />
                    <label>Imagen</label>
                    <input className='input-newProduct' type="file" />
                    <label>Marcar:</label>
                    <input  className="check-newProduct" type="checkbox" />
                    <button className="boton-newProduct" type='submit'>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default NewProduct