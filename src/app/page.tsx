'use client';

import "./page.css";
import Skeleton from "react-loading-skeleton";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import Link from "next/link";
import { IconList, IconPlus } from "@tabler/icons-react";
import { Footer } from "@/components/Footer";

export default function Home() {
  const userData = {
    token: 'erefdgdgd',
    userPayload: {
        userId: 'wewewewwew',
        name: 'wewewewwew',
        email: 'wewewewwew'
    }
}

  const router = useRouter();

  if (!userData.token) {
    router.push('/login');
  }

  return (
    <main className='main__container'>
      <div className="navegation">
        <Header />
        <div className="links container">
          <Link href='/create-sale'>
            <div className="box_link">
              <strong><IconPlus size={50} /></strong>
              <span>Cadastrar venda</span>
            </div>
          </Link>
          <Link href='/list-sales'>
            <div className="box_link">
              <strong><IconList size={50} /></strong>
              <span>Suas vendas</span>
            </div>
          </Link>
          <Link href='/create-purchase'>
            <div className="box_link">
              <strong><IconPlus size={50} /></strong>
              <span>Cadastrar compra</span>
            </div>
          </Link>
          <Link href='/list-purchases'>
            <div className="box_link">
              <strong><IconList size={50} /></strong>
              <span>Suas compras</span>
            </div>
          </Link>
          <Link href={`/create-product/${userData.userPayload.userId}`}>
            <div className="box_link">
              <strong><IconPlus size={50} /></strong>
              <span>Cadastrar produto</span>
            </div>
          </Link>
          <Link href={`/products`}>
            <div className="box_link">
              <strong><IconList size={50} /></strong>
              <span>Todos os produtos</span>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
