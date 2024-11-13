'use client';

import Link from 'next/link';
import './header.css';
import Image from 'next/image';
import { IconMenuDeep, IconX } from '@tabler/icons-react';
import { useState } from 'react'

function Header() {

    const [open, setOpen] = useState<boolean>(false);
    const userData = {
        token: 'erefdgdgd',
        userPayload: {
            userId: 'wewewewwew',
            name: 'wewewewwew',
            email: 'wewewewwew'
        }
    }

    return (
        <header className="header__container">
            <div className="header">
                <Link href='/'>
                    <Image className='logo_white' src='/strategy-logo-white.png' width={240} height={40} alt='Logotipo Strategy' />
                </Link>
                <nav className="menu">
                    <ul className={`${open ? 'open' : 'close'}`}>
                        <span onClick={() => setOpen(false)} className='icon_x'><IconX /></span>
                        <Link href='/'><li>Home</li></Link>
                        <Link href='/profile'><li>Meu perfil</li></Link>
                    </ul>
                    <div className="user">
                        <h3>{userData.userPayload.name}</h3>
                        <button className="logout">Sair</button>
                        <span onClick={() => setOpen((state) => !state)} className='icon_menu'><IconMenuDeep /></span>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export { Header };
