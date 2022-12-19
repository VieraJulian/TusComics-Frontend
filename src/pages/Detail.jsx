import '../../public/css/Detail-mobile.css'
import '../../public/css/Detail-desktop.css'

function Detail() {
    return (
        <>
            <div className='detail-container'>
                <picture>
                    <img src="../../public/img/Estado de Miedo.jpg" alt="" />
                </picture>
                <div className='info-container'>
                    <p className='p-title'>Nombre:</p><p className='p-title-info'>Comic: estado de Miedo</p>
                    <p className='p-title'>Precio:</p><p className='p-title-info'>$ 3900</p>
                    <p className='p-title'>Descripción:</p>
                    <p className='p-title-info'> en una ciudad donde el miedo esta en cada esquina y en cada rincon, el heroe decide hacer algo para que la ciudad nuevamente pueda ser segura</p>
                    <button className='add-cart'>Comprar</button>
                </div>
            </div>
        </>
    )
}

export default Detail