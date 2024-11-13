'use client';

import Link from 'next/link';
import './login.css';
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { useDataAPI } from '@/hooks/useDataAPI';
import { Message } from '@/components/Message';

function Login() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { login, message, status, active } = useDataAPI();

    async function handleLogin(event: FormEvent) {
        event.preventDefault();
        await login(email, password);
             
    }

    return (
        <section className="login__container">
            <Message message={message} status={status} activeMessage={active} />
            <div className="login">
                <Image className='logo' src='/strategy-logo.png' width={200} height={200} alt='Logotipo agende já' />
                <h2>Fazer login no sistema</h2>
                <form action="" onSubmit={handleLogin}>
                    <div className="input_form">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                    </div>
                    <div className="input_form">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                    </div>
                    <input className='btn_login' type="submit" value="Fazer login" />
                </form>
                <p>ainda não tem cadastro? <Link className='link_signup' href='/signup'>Cadastre-se</Link></p>
            </div>
            <div className="doctor_bg">
                <Image className='doctor_image' src='/schedule.jpg' width={1200} height={800} alt='Doctor bg' />
            </div>
        </section>
    );
}

export default Login;
