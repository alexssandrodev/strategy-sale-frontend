
import './product.css';
import Link from 'next/link';
import { Format } from '@/utils/Format';
import { Product } from '@/types/Product';

interface ProductProps {
    product: Product;
}

function ProductItem({ product }: ProductProps) {
    return (
        <section className="product__container">
            <div className="product">
                <h2>{product.title}</h2>
                <div className="price">
                    <h3>{Format.formatPrice(product.price)}</h3>
                    <h4>Categoria: {product.category}</h4>
                </div>
                <p>{product.description}</p>
                <div className="date">
                    <p>Quantidade: <strong>{product.quantity}</strong></p>
                    <span>{Format.formatDate(new Date(product.created_at))}</span>
                </div>
                <Link className='detail_btn' href={`/product-detail/${product.product_id}`}>Detalhes</Link>
            </div>
        </section>
    );
}

export { ProductItem };
