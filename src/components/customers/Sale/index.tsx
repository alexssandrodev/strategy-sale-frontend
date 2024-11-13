

import { SaleType } from '@/types/SaleType';
import './sale.css';
import Link from 'next/link';
import { Format } from '@/utils/Format';

interface SaleProps {
    sale: SaleType;
}

function Sale({ sale }: SaleProps) {
    return (
        <section className="sale__container">
            <Link href={`/sale-detail/${sale.sale_id}`}>
                <div className="sale">
                    <h2>{sale.title}</h2>
                    <span>{Format.formatDate(new Date(sale.created_at))}</span>
                    {/* <Link href='/' className="btn_app">Voltar</Link> */}
                </div>
            </Link>
        </section>
    );
}

export { Sale };
