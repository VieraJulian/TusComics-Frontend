import { useParams } from "react-router-dom";
import '../../public/css/Detail-mobile.css'
import '../../public/css/Detail-desktop.css'
import { useEffect, useState } from "react";
import { detail } from "../services/products"

function Detail() {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
        detail(id).then(setProduct)
    }, [id])

    let urlImage = `http://localhost:3000/productImg?imagen=${product.img}`

    return (
        <>
            <div className='detail-container'>
                <picture>
                    <img src={urlImage} alt="" />
                </picture>
                <div className='info-container'>
                    <p className='p-title'>Nombre:</p><p className='p-title-info'>{product.name}</p>
                    <p className='p-title'>Precio:</p><p className='p-title-info'>$ {product.price}</p>
                    <p className='p-title'>Descripción:</p>
                    <p className='p-title-info'>{product.description}</p>
                    <button className='add-cart'>Comprar</button>
                </div>
            </div>
        </>
    )
}

export default Detail