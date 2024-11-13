'use client';

import { ProductItem } from '@/components/customers/ProductItem';
import './products.css';
import { useDataAPI } from '@/hooks/useDataAPI';
import { Format } from '@/utils/Format';

function Produts() {

    const { products } = useDataAPI();

    const getTotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <section className="products__container container">
            <div className="products">
                <div className="total">
                    <h2>Seus produtos</h2>
                    <h4>Total em produtos: {Format.formatPrice(getTotal)}</h4>
                </div>
                <div className="product_list">
                    {products.length === 0
                        ? (<p>Nenhum producto cadastrado</p>)
                        : products.map((product) => (
                            <ProductItem key={product.product_id} product={product} />
                        ))}
                </div>
            </div>
        </section>
    );

}

export default Produts;
