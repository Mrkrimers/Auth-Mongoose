'use client'

import style from './style.module.scss'
import { Button, TextField } from "@mui/material"
import axios from 'axios'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Reg() {
    const [inpData, setInpData] = useState({})
    const router = useRouter();

    const arr = [{ label: "Name", name: "name" }, { label: "Surname", name: "surname" }, { label: "Email", name: "email" }, { label: "Password", name: "password" }, { label: "Age", name: "age" }]

    const getInputData = (e) => {
        setInpData({ ...inpData, [e.target.name]: e.target.value })
    }

    const sendData = async () => {
        try {
            const data = await axios.post('http://localhost:3001/user', inpData, {
                withCredentials: true
            });

            if (!data.data) throw new Error('УПС');
            router.push('/home');
        } catch (err) {
            alert(err.message);
            return []
        }
    }


    return (

        <div className={style.wrapperReg}>
            <h1>Registration</h1>

            <p>If you already have an account register</p>
            <p>You can <Link href={'/auth'}> Login here ! </Link> </p>

            <div className={style.inputForm}>
                {arr.map((el, i) =>
                    <TextField key={i}
                        id="standard-basic"
                        label={el.label}
                        variant="standard"
                        name={el.name}
                        onChange={getInputData}
                    />
                )}

                <Button variant="contained" onClick={sendData}>Register</Button>
            </div>
        </div>

    )
}