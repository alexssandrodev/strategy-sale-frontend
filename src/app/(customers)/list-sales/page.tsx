
import './list-sales.css';
import { Sales } from '@/components/customers/Sales';

function ListSales() {

    return (
        <section className="list_sales__container container">
            <div className="list_sales">
                <h2>Suas vendas</h2>
                <Sales />
            </div>
        </section>
    );

}

export default ListSales;
