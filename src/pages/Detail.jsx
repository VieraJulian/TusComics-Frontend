import { Link, useParams } from "react-router-dom";
import '../../public/css/Detail-mobile.css'
import '../../public/css/Detail-desktop.css'
import { useEffect, useState } from "react";
import { detail } from "../services/products"

function Detail() {
    let userLogged = JSON.parse(sessionStorage.getItem("user"));

    const { id } = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
        detail(id).then(setProduct)
    }, [id])

    let urlImage = `http://localhost:3000/productImg?imagen=${product.img}`

    let user = userLogged && userLogged.admin === true ?
        <div>
            <button className='add-cart'>Comprar</button>
            <Link to={`/editProduct/${product.id}`} className='editProduct'>Editar</Link>
        </div> :
        <div>
            <button className='add-cart'>Comprar</button>
        </div>

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
                    {user}
                </div>
            </div>
        </>
    )
}

export default Detail