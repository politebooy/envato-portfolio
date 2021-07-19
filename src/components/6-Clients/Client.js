import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import MyCard from '../MyCard'
import styles from './client.module.css'
import Image from 'next/image'

const clients = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function Client() {
    return (
        <div className={styles.container}>
            <h1 className="secTitle">MY CLIENTS</h1>
            <Grid container>
                {clients.map(client => (
                    <Grid item md="2">
                        <MyCard>
                            <Image src="/images/1.png" alt="Vercel Logo" width={100} height={50} />
                        </MyCard>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
