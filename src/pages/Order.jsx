import '../../public/css/Order-mobile.css'
import '../../public/css/Order-tablet.css'

function Order() {
    return (
        <>
            <div className="order-container">
            <h1 className='order-title'>Productos en mi carrito</h1>
                <section className='order-section'>
                    <div className='order-section-div-1'>
                        <span>#</span><span>Precio</span><span>Cantidad</span><span>Subtotal</span>
                    </div>
                    <div className='order-section-div-2'>
                        <span>1</span><span>$3900</span><span>1</span><span>$3900</span>
                    </div>
                    <div className='order-section-div-2'>
                        <span>2</span><span>$1000</span><span>2</span><span>$2000</span>
                    </div>
                    <p className='order-total'>Total: $3900</p>
                </section>
                <section className='order-section-2'>
                    <p className='detail-order-title'>Detalles de la compra</p>
                    <div className='order-section-div'>
                        <p className='p-order'>Tispano de Envio:</p><span>Correo Argentino</span>
                        <p className='p-order'>Pago:</p><span>Efectivo</span>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Order