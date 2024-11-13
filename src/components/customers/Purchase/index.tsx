

import './purchase.css';
import Link from 'next/link';
import { Format } from '@/utils/Format';
import { Purchase } from '@/types/Purchase';

interface PurchaseProps {
    purchase: Purchase;
}

function PurchaseItem({ purchase }: PurchaseProps) {
    return (
        <section className="sale__container">
            <Link href={`/sale-detail/${purchase.sale_id}`}>
                <div className="sale">
                    <h2></h2>
                    <span>{Format.formatDate(new Date(purchase.created_at))}</span>
                    {/* <Link href='/' className="btn_app">Voltar</Link> */}
                </div>
            </Link>
        </section>
    );
}

export { PurchaseItem };
