'use client';

import { FormEvent, useState } from 'react';
import './create-sale.css';
import { useDataAPI } from '@/hooks/useDataAPI';
import { Message } from '@/components/Message';

function CreateSale() {

    const [title, setTitle] = useState<string>('');
    const [date, setDate] = useState<string>('');

    const { createSale, message, status, active } = useDataAPI();

    async function handleSale(event: FormEvent) {
        event.preventDefault();
        await createSale(title, date);

    }

    return (
        <section className="create_sale__container container">
            <Message message={message} status={status} activeMessage={active} />
            <div className="create_sale">
                <h2>Criar uma venda</h2>
                <form action="" onSubmit={handleSale}>
                    <div className="input_form">
                        <label htmlFor="email">Titulo</label>
                        <input type="text" id="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Titulo da venda' />
                    </div>
                    <div className="input_form">
                        <label htmlFor="date">Data de criação</label>
                        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder='Titulo da venda' />
                    </div>
                    <input className='btn_sale' type="submit" value="Cadastrar venda" />
                </form>
            </div>
        </section>
    );

}

export default CreateSale;
