'use client';

import './product-detail.css';
import Link from 'next/link';
import { Format } from '@/utils/Format';
import { Product } from '@/types/Product';
import { useDataAPI } from '@/hooks/useDataAPI';
import { useEffect } from 'react';

interface ProductProps {
    product: Product;
}

function ProductDetail({ params: { product_id } }: { params: { product_id: string } }) {

    const { loadProductById, productDetail } = useDataAPI();

    useEffect(() => {
        loadProductById(product_id);
    }, [loadProductById, product_id]);

    return (
        <section className="product_detail__container container">
            <h3>Detalhes do produto</h3>
            <div className="product_detail">
                <h2>{productDetail.title}</h2>
                <div className="price">
                    <h3>{Format.formatPrice(productDetail.price)}</h3>
                    <h4>Categoria: {productDetail.category}</h4>
                </div>
                <p>{productDetail.description}</p>
                <div className="date">
                    <p>Quantidade: <strong>{productDetail.quantity}</strong></p>
                    <span>{Format.formatDate(productDetail.created_at)}</span>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;
