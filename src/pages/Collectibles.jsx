import { Link } from 'react-router-dom'
import '../../public/css/Collectibles-mobile.css'
import { allProducts } from '../services/products'
import { useEffect, useState } from 'react'

function collectibles() {
    const [collectibles, setCollectibles] = useState([])

    useEffect(() => {
        allProducts().then(setCollectibles)
    }, [])

    let collectiblesAll = [];
    if (collectibles != null) {
        collectibles.forEach(p => {
            if (p.name.indexOf("Colleccionable") !== -1) {
                collectiblesAll.push(p)
            }
        });
    }

    return (
        <>
            <div className='collectibles-container'>
                <h2 className='titles-home coleccionables'>Collecionables</h2>
                <div className="collectibles">
                    {collectiblesAll.map((p, i) => {
                        let urlImage = `http://localhost:3000/productImg?imagen=`
                        return <article key={i} className='product-article'>
                            <Link to={`/detail/${p.id}`}>
                                <picture>
                                    <img src={urlImage + p.img} alt="" />
                                </picture>
                                <p className='product-name'>{p.name}</p>
                                <p className="product-price">$ {p.price}</p>
                            </Link>
                            <button className='add-cart'>Comprar</button>
                        </article>
                    })}
                </div>
            </div>

        </>
    )
}

export default collectibles