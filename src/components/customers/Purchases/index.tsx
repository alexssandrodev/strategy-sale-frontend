'use client';

import { useDataAPI } from '@/hooks/useDataAPI';
import { Sale } from '../Sale';
import './purchases.css';
import { SaleType } from '@/types/SaleType';
import { PurchaseItem } from '../Purchase';
import { Purchase } from '@/types/Purchase';
import { useEffect, useState } from 'react';

function Purchases() {

    const { purchases, loadSaleById, saleDetail } = useDataAPI();

    return (
        <section className="doctors__container">
            <div className="doctors container">
                <div className="list_doctors">
                    {purchases.length === 0 ?
                        <p>Você não tem nehuma compra cadastrada.</p>
                    : purchases.map((purchase: Purchase) => (
                        <div key={purchase.sale_id} className="list_purchase">
                            <PurchaseItem purchase={purchase} />
                            <h4>{saleDetail.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { Purchases };
