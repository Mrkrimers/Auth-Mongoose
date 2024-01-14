import Image from 'next/image'
import style from './page.module.scss'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={style.wrapperNav}>
      <h1>Hello My Friend</h1>
      <p>If you don`t have an account, please <Link href={'/reg'}> register </Link> quickly.</p>
      <p>Your account already exists, <Link href={'/auth'}>log in</Link> here </p>
    </div>
  )
}
