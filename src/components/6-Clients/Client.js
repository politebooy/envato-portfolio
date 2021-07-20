import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import MyCard from '../MyCard'
import styles from './client.module.css'
import Image from 'next/image'

// const clients = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const projects = [
    { title: 'Khaticlub', desc: 'Khaticlub is an e-commerce platform which will be capable of providing every kind of goods and products.' },
    { title: 'Ridelife', desc: 'Its services include ride-hailing, food delivery, package delivery, couriers, freight transportation.' },
    { title: 'Pdpdrive', desc: 'Pdp Drive is a file storage and synchronization service developed by  Snigdhochowa' },
    { title: 'EEPB', desc: 'EEPB  is a E-commerce Association.we will Advic insight, profiles and guides for established and aspiring entrepreneurs worldwide' },
    { title: 'Itlife', desc: 'Itlife provides businesses with professional advice regarding their IT needs & Support.' },
]

export default function Client() {
    return (
        <div className={styles.container}>
            <h1 className="secTitle">MY PROJECT</h1>
            <br />
            <Typography variant="h4" align="center">SnigdhoChowa Group Of Company Ltd.</Typography>
            <br />
            <Grid container>
                {/* {clients.map(client => (
                    <Grid item md="2">
                        <MyCard>
                        </MyCard>
                        </Grid>
                    ))} */}
                <Grid container>
                    {projects.map(project => {
                        return <Grid item md="4">
                            <MyCard>
                                <Image src="/images/company1.jpg" alt="Vercel Logo" width={200} height={200} />
                                <Typography variant="h4" align="center">{project.title}</Typography>
                                <Typography variant="body1" align="center">
                                    {project.desc}
                                </Typography>
                            </MyCard>
                        </Grid>
                    })}
                </Grid>
            </Grid>
        </div>
    )
}
