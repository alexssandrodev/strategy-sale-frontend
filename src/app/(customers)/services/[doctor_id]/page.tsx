'use client';

import Image from "next/image";
import './services.css';

function Services({ params: { doctor_id }, }: { params: { doctor_id: string } }) {

    return (
        <section className="services__container container">
            <h2>Serviços</h2>
            <div className="box_services">
                <div className="services">
                    <span className="icon">
                        <Image src='/doctor-m.png' width={50} height={50} alt="Doctor" />
                    </span>
                    <h4>Dra. Nise da Silveira</h4>
                    <p>Cirurgiâ</p>
                </div>
                <div className="services_list">
                    <div className="price">
                        <h3>Consulta</h3>
                        <h5>R$ 300,00</h5>
                    </div>
                    <button className="btn_save">Agendar</button>
                </div>
            </div>
        </section>
    );
}

export default Services;
