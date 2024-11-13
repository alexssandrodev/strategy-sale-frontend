'use client';

import { FormEvent, useEffect, useState } from 'react';
import './create-purchase.css';
import { useDataAPI } from '@/hooks/useDataAPI';
import { Message } from '@/components/Message';
import { ProductItem } from '@/components/customers/ProductItem';

function CreatePurchase() {

    const [saleId, setSaleId] = useState<string>('');
    const [productIdSelect, setProductIdSelect] = useState<string>('');
    const [productsIdsList, setProductsIdsList] = useState<string[]>([]);

    const { createPurchase, loadProductById, productDetail, products, sales, message, status, active } = useDataAPI();
    
    async function handlePurchase(event: FormEvent) {
        event.preventDefault();
        await createPurchase(saleId, productsIdsList);
    }

    function addSelect(id: string) {
        setProductsIdsList([...productsIdsList, id]);
        setProductIdSelect(id);
    }
    
    useEffect(() => {
        loadProductById(productIdSelect);
    }, [productsIdsList, loadProductById, productIdSelect]);

    return (
        <section className="create_sale__container container">
            <Message message={message} status={status} activeMessage={active} />
            <div className="create_sale">
                <h2>Pedido de venda</h2>
                <form action="" onSubmit={handlePurchase}>
                    <div className="input_form">
                        <label htmlFor="sale">Venda pertencente</label>
                        <select name="sale" onChange={(e) => setSaleId(e.target.value)} id="category">
                            <option value="selecionar a venda">Selecionar venda</option>
                            {sales.map((sale) => (
                                <option key={sale.sale_id} value={sale.sale_id}>{sale.title}</option>
                            ))}
                        </select>
                    </div>

                    <input className='btn_sale' type="submit" value="Salvar" />
                </form>
                <div className="list_products">
                    {products.map((product) => (
                        <>
                            <h4 key={product.product_id}>
                                {product.title}
                                <button className="add_id" onClick={() => addSelect(product.product_id)}>Adicionar produto</button>
                            </h4>
                        </>
                    ))}
                </div>
                

                <div className="adds_products">
                    {productsIdsList.map((list) => (
                        <p>{list}</p>
                    ))}
                </div>
            </div>
        </section>
    );

}

export default CreatePurchase;
