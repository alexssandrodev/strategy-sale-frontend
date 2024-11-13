'use client';

import { useDataAPI } from '@/hooks/useDataAPI';
import './sale-detail.css';
import { useContext, useEffect, useState } from 'react';
import { Format } from '@/utils/Format';

function SaleDatail({ params: { sale_id } }: { params: { sale_id: string } }) {

    const { saleDetail, loadSaleById } = useDataAPI();
    const userData = {
        token: 'erefdgdgd',
        userPayload: {
            userId: 'wewewewwew',
            name: 'wewewewwew',
            email: 'wewewewwew'
        }
    }

    useEffect(() => {
        loadSaleById(sale_id);
    }, [loadSaleById, sale_id]);

    return (
        <section className="sale_detail__container container">
            <div className="sale_detail">
                <h2>Detalhes da venda</h2>
                <div className="details">
                    <h3>Titulo da venda: {saleDetail.title}</h3>
                    <h3>Data de criação: {Format.formatDate(saleDetail.created_at)}</h3>
                    <p>Venda de: {userData.userPayload.name}</p>
                </div>
            </div>
        </section>
    );

}

export default SaleDatail;
