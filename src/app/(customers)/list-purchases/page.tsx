
import { Purchases } from '@/components/customers/Purchases';
import './list-purchases.css';
import { Sales } from '@/components/customers/Sales';

function ListPurchases() {

    return (
        <section className="list_sales__container container">
            <div className="list_sales">
                <h2>Suas compras</h2>
                <Purchases />
            </div>
        </section>
    );

}

export default ListPurchases;
