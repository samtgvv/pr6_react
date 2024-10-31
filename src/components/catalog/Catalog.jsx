import { Card } from '../card/Card';
import s from './Catalog.module.css';
import { products } from '../../data/data'

export function Catalog() {
    return (
        <section className={`container ${s.catalog}`}>
            <h2>Каталог</h2>
            <div className={s.cat}>
                <p>Категории:</p>
                <div className={s.btns}>
                    <buttton className='btn'>Все товары</buttton>
                    <buttton className='btn'>Шины/колеса</buttton>
                    <buttton className='btn'>Масла</buttton>
                    <buttton className='btn'>Ароматизаторы</buttton>
                </div>
            </div>
            <div className={s.cards}>
                {
                    products.map((product) => {
                        return (
                            <Card id={product.id} img={product.img} name={product.name} price={product.price} />
                        )
                    })
                }
            </div>
            <a href="#">Загрузить еще товары</a>
        </section>
    )
}