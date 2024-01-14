"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link";
import style from './style.module.scss';

export default function Header() {
    const pathname = usePathname();

    return (
        <header className={style.header}>

            <Link href={'/'}><p className={pathname === '/' ? style.active : null}>Home Page</p></Link>
            <Link href={'/auth'}><p className={pathname === '/auth' ? style.active : null}>Login</p></Link>
            <Link href={'/reg'}><p className={pathname === '/reg' ? style.active : null}>Register</p></Link>

        </header>
    )
}