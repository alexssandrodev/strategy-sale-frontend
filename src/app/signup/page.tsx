'use client';

import Link from 'next/link';
import './signup.css';
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { useDataAPI } from '@/hooks/useDataAPI';
import { Message } from '@/components/Message';

function Signup() {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signup, message, status, active } = useDataAPI();

    async function handleSignup(event: FormEvent) {
        event.preventDefault();
        await signup(name, email, password);
    }

    return (
        <section className="login__container">
            <Message message={message} status={status} activeMessage={active} />
            <div className="login">
                <Image className='logo' src='/strategy-logo.png' width={200} height={200} alt='Logotipo agende já' />
                <h2>Fazer login no sistema</h2>
                <form action="" onSubmit={handleSignup}>
                    <div className="input_form">
                        <label htmlFor="name">Nome</label>
                        <input type="name" id="name" onChange={(e) => setName(e.target.value)} placeholder='name' />
                    </div>
                    <div className="input_form">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                    </div>
                    <div className="input_form">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                    </div>
                    <input className='btn_login' type="submit" value="Salvar" />
                </form>
                <p>Já tem cadastro? <Link className='link_signup' href='./login'>Fazer login</Link></p>
            </div>
            <div className="doctor_bg">
                <Image className='doctor_image' src='/schedule.jpg' width={1200} height={800} alt='Doctor bg' />
            </div>
        </section>
    );
}

export default Signup;
