import '../../public/css/Cart-mobile.css'
import '../../public/css/Cart-tablet.css'

function Cart() {
    return (
        <>
            <div className='cart-container'>
                <h1 className='cart-title'>Productos en mi carrito</h1>
                <section className='cart-section'>
                    <div className='cart-section-div-1'>
                        <span>#</span><span>Producto</span><span>Precio</span><span>Cantidad</span><span>Subtotal</span>
                    </div>
                    <div className='cart-section-div-2'>
                        <span>1</span><span>Estado de miedo</span><span>$3900</span><span>1</span><span>$3900</span>
                    </div><button className='delete-prod'><i className="fa-solid fa-trash"></i></button>
                    <div className='cart-section-div-2'>
                        <span>1</span><span>Estado de miedo</span><span>$3900</span><span>1</span><span>$3900</span>
                    </div><button className='delete-prod'><i className="fa-solid fa-trash"></i></button>
                    <div className='cart-section-div-2'>
                        <span>1</span><span>Estado de miedo</span><span>$3900</span><span>1</span><span>$3900</span>
                    </div><button className='delete-prod'><i className="fa-solid fa-trash"></i></button>
                    <p className='p-total'>Total: $3900</p>
                </section>
                <form className='cart-form'>
                    <p>Terminar la compra</p>
                    <label>Tipo de Envio</label>
                    <select>
                        <option value="Elegir">Elegir...</option>
                        <option value="Cadete">Cadete</option>
                        <option value="Correo Argentino">Correo Argentino</option>
                        <option value="Andreani">Andreani</option>
                        <option value="DHL">DHL</option>
                    </select>
                    <label>Tipo de pago</label>
                    <select>
                        <option value="Elegir">Elegir...</option>
                        <option value="Efectivo">Efectivo</option>
                        <option value="Tarjeta Débito">Tarjeta Débito</option>
                        <option value="Tarjeta Crédito">Tarjeta Crédito</option>
                    </select>
                    <button type='submit' className='cart-button'>Comprar</button>
                </form>
            </div>
        </>
    )
}

export default Cart