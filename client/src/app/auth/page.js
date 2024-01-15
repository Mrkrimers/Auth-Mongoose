'use client'

import style from './style.module.scss'
import { Button, TextField } from "@mui/material"
import axios from 'axios'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Auth() {
    const [inp, setInp] = useState({})
    const route = useRouter();
    const getData = (e) => {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }

    const sendData = async () => {
        try {
            const data = await axios.post('http://localhost:3001/user/auth', inp, {
                withCredentials: true
            });

            if (!data.data) throw new Error('UUPS')

            route.push('/home')
        } catch (err) {
            alert(err.message);
            return [];
        }
    }

    return (
        <div className={style.wrapperAuth}>
            <h1>Login</h1>

            <p>If you don`t have an account register</p>
            <p>You can <Link href={'/reg'}> Register here ! </Link> </p>

            <div className={style.inputForm}>
                <TextField id="standard-basic" label="Email" variant="standard" onChange={getData} name='email' />
                <TextField id="standard-basic" label="Password" variant="standard" onChange={getData} name='password' />

                <Button variant="contained" onClick={sendData}>Continue</Button>
            </div>
        </div>
    )
}