'use client';

import { FormEvent, useState } from 'react';
import './create-product.css';
import { useDataAPI } from '@/hooks/useDataAPI';
import { Message } from '@/components/Message';

function CreateProduct() {

    const [title, setTitle] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [saleId, setSaleId] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [quantity, setQuantity] = useState<string>('');
    const [createdAt, setCreatedAt] = useState<string>('');

    const { createProduct, categories, sales, message, status, active } = useDataAPI();

    async function handleSale(event: FormEvent) {
        event.preventDefault();
        await createProduct(saleId, title, Number(price), category, description, Number(quantity), new Date(createdAt));

    }

    return (
        <section className="create_sale__container container">
            <Message message={message} status={status} activeMessage={active} />
            <div className="create_sale">
                <h2>Cadastrar produto</h2>
                <form action="" onSubmit={handleSale}>
                    <div className="input_form">
                        <label htmlFor="sale">Venda pertencente</label>
                        <select name="sale" onChange={(e) => setSaleId(e.target.value)} id="category">
                            <option value="selecionar a venda">Selecionar venda</option>
                            {sales.map((sale) => (
                                <option key={sale.sale_id} value={sale.sale_id}>{sale.title}</option>
                            ))}
                        </select>
                    </div>

                    <div className="input_form">
                        <label htmlFor="email">Titulo</label>
                        <input type="text" id="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Titulo da venda' />
                    </div>

                    <div className="input_form">
                        <label htmlFor="price">Preço</label>
                        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Preço' />
                    </div>

                    <div className="input_form">
                        <label htmlFor="category">Categoria</label>
                        <select name="category" onChange={(e) => setCategory(e.target.value)} id="category">
                            <option value="selecionar categoria">Selecionar categoria</option>
                            {categories.map((category) => (
                                <option key={category.categoryIid} value={category.title}>{category.title}</option>
                            ))}
                        </select>
                    </div>

                    <div className="input_form">
                        <label htmlFor="description">Descrição</label>
                        <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} cols={10} rows={10} placeholder='Descrição'></textarea>
                    </div>

                    <div className="input_form">
                        <label htmlFor="quantity">Quantidade</label>
                        <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='Quantidade' />
                    </div>

                    <div className="input_form">
                        <label htmlFor="date">Data de criação</label>
                        <input type="date" id="date" value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} placeholder='Data de riação' />
                    </div>

                    <input className='btn_sale' type="submit" value="Salvar" />
                </form>
            </div>
        </section>
    );

}

export default CreateProduct;
