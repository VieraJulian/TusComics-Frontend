import '../../public/css/Collectibles-mobile.css'

function collectibles() {
    return (
        <>
            <div className='collectibles-container'>
                <h2 className='titles-home coleccionables'>Collecionables</h2>
                <div className="collectibles">
                    <article className='product-article'>
                        <picture>
                            <img src="../../public/img/Estado de Miedo.jpg" alt="" />
                        </picture>
                        <p className='product-name'>Estado de miedo</p>
                        <p className="product-price">$ 3900.00</p>
                        <button className='add-cart'>Comprar</button>
                    </article>
                    <article className='product-article'>
                        <picture>
                            <img src="../../public/img/Estado de Miedo.jpg" alt="" />
                        </picture>
                        <p className='product-name'>Estado de miedo</p>
                        <p className="product-price">$ 3900.00</p>
                        <button className='add-cart'>Comprar</button>
                    </article>
                    <article className='product-article'>
                        <picture>
                            <img src="../../public/img/Estado de Miedo.jpg" alt="" />
                        </picture>
                        <p className='product-name'>Estado de miedo</p>
                        <p className="product-price">$ 3900.00</p>
                        <button className='add-cart'>Comprar</button>
                    </article>
                    <article className='product-article'>
                        <picture>
                            <img src="../../public/img/Estado de Miedo.jpg" alt="" />
                        </picture>
                        <p className='product-name'>Estado de miedo</p>
                        <p className="product-price">$ 3900.00</p>
                        <button className='add-cart'>Comprar</button>
                    </article>
                </div>
            </div>

        </>
    )
}

export default collectibles