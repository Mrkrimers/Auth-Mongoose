'use client'

import style from './style.module.scss'
import { Button, TextField } from "@mui/material"
import Link from "next/link"
import { useState } from 'react'

export default function Auth() {
    const [inp, setInp] = useState({})

    const getData = (e) => {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }

    return (
        <div className={style.wrapperAuth}>
            <h1>Login</h1>

            <p>If you don`t have an account register</p>
            <p>You can <Link href={'/reg'}> Register here ! </Link> </p>

            <div className={style.inputForm}>
                <TextField id="standard-basic" label="Email" variant="standard" onChange={getData} name='Email' />
                <TextField id="standard-basic" label="Password" variant="standard" onChange={getData} name='Password' />

                <Button variant="contained" onClick={() => console.log(inp)}>Continue</Button>
            </div>
        </div>
    )
}