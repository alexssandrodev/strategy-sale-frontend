'use client';

import { useDataAPI } from '@/hooks/useDataAPI';
import { Sale } from '../Sale';
import './sales.css';
import { SaleType } from '@/types/SaleType';

function Sales() {

    const { sales } = useDataAPI();

    return (
        <section className="doctors__container">
            <div className="doctors container">
                <div className="list_doctors">
                    {sales.length === 0 ?
                        <p>Você não tem nehuma venda cadastrada.</p>
                    : sales.map((sale: SaleType) => (
                        <Sale key={sale.sale_id} sale={sale} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export { Sales };
