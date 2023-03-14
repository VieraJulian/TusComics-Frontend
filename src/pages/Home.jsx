import { Link } from 'react-router-dom'
import '../../public/css/Home-mobile.css'
import '../../public/css/Home-tablet.css'
import '../../public/css/Home-desktop.css'
import { allProducts } from '../services/products'
import { useEffect, useState } from 'react'

function Home() {
    const [products, setProducts] = useState()
    useEffect(() => {
        allProducts().then(setProducts)
    }, [])

    let market = [];
    if (products != null) {
        products.forEach(p => {
            if (p.market === true && market.length < 4) {
                market.push(p)
            }
        });
    }

    let comics = [];
    if (products != null) {
        products.filter(p => {
            if (p.category === "Comics") {
                comics.push(p)
            }
        });
    }

    let mangas = [];
    if (products != null) {
        products.filter(p => {
            if (p.category === "Mangas") {
                mangas.push(p)
            }
        });
    }

    let collectibles = [];
    if (products != null) {
        products.filter(p => {
            if (p.category === "Coleccionables") {
                collectibles.push(p)
            }
        });
    }

    return (
        <div className='home-container'>
            <h2 className='titles-home destacado'>Destacados</h2>
            <div className="featured">
                {market.map((p, i) => {
                    let urlImage = `http://localhost:3000/productImg?imagen=`
                    return  <article key={i} className='product-article'>
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
            <h2 className='titles-home collectibles-title'>Comics</h2>
            <div className="comics">
            {comics.map((p, i) => {
                    let urlImage = `http://localhost:3000/productImg?imagen=`
                    return  <article key={i} className='product-article'>
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
            <h2 className='titles-home collectibles-title'>Mangas</h2>
            <div className="comics">
            {mangas.map((p, i) => {
                    let urlImage = `http://localhost:3000/productImg?imagen=`
                    return  <article key={i} className='product-article'>
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
            <h2 className='titles-home coleccionables'>Collecionables</h2>
            <div className="collectibles">
            {collectibles.map((p, i) => {
                    let urlImage = `http://localhost:3000/productImg?imagen=`
                    return  <article key={i} className='product-article'>
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
    )
}

export default Home