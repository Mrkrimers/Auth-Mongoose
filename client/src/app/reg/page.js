'use client'

import style from './style.module.scss'
import { Button, TextField } from "@mui/material"
import Link from "next/link"
import { useState } from 'react'

export default function Reg() {
    const [inpData, setInpData] = useState({})

    const arr = [{ label: "Name" }, { label: "Surname" }, { label: "Email" }, { label: "Password" }, { label: "Age" }]

    const getData = (e) => {
        setInpData({ ...inpData, [e.target.name]: e.target.value })
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
                        name={el.label}
                        onChange={getData}
                    />
                )}

                <Button variant="contained" onClick={() => console.log(inpData)}>Register</Button>
            </div>
        </div>

    )
}