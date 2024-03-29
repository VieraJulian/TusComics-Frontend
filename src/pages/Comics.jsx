import { Link } from 'react-router-dom'
import '../../public/css/Comics-mobile.css'
import { allProducts } from '../services/products'
import { useEffect, useState } from 'react'

function Comics() {
    const [comics, setComics] = useState([])

    useEffect(() => {
        allProducts().then(setComics)
    }, [])

    let comicsAll = [];
    if (comics != null) {
        comics.filter(p => {
            if (p.category === "Comics") {
                comicsAll.push(p)
            }
        });
    }

    return (
        <>
            <div className='comics-container'>
                <h2 className='titles-home comics-title'>Comics</h2>
                <div className="comics">
                    {comicsAll.map((p, i) => {
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

export default Comics