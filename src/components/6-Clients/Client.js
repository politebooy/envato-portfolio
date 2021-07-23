import { Grid, Link, Typography } from '@material-ui/core'
import React from 'react'
import MyCard from '../MyCard'
import styles from './client.module.css'
import Image from 'next/image'

// const clients = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const projects = [
    { title: 'Notelife', src: '/images/Untitled-1.png', link: 'http://notelife.me/', desc: 'Itlife provides businesses with professional advice regarding their IT needs & Support. and others.' },
    { title: 'Notecloud', src: '/images/Notecloud-1-Fb-Profile.jpg', link: 'https://notecloud.net/', desc: 'Khaticlub is an e-commerce platform which will be capable of providing every kind of goods and products.' },
    { title: 'Noteflix', src: '/images/Noteflix-1.png', link: 'http://noteflix.net/', desc: 'Its services include ride-hailing, food delivery, package delivery, couriers, freight transportation.' },

    { title: 'Itlife', src: '/images/company1.jpg', link: 'https://itlife.one/', desc: 'Pdp Drive is a file storage and synchronization service developed by  Snigdhochowa' },
    { title: 'Khaticlub', src: '/images/Khaticlub.png', link: 'https://khaticlub.com/', desc: 'EEPB  is a E-commerce Association.we will Advic insight, profiles and guides for established' },
    { title: 'Ridelife', src: '/images/Ridelife-logo.jpg', link: 'http://ridelife.me/', desc: 'Its services include ride-hailing, food delivery, package delivery, couriers, freight transportation.' },

    { title: 'Pdpdrive', src: '/images/Pdpdrive1.jpg', link: 'http://pdpdrive.com/', desc: 'Pdp Drive is a file storage and synchronization service developed by  Snigdhochowa' },
    { title: 'EEPB', src: '/images/EEPB-1.png', link: 'http://eepb.com.bd/', desc: 'EEPB  is a E-commerce Association.we will Advic insight, profiles and guides for established' },
    { title: 'Newsstore', src: '/images/nnnnnnn.png', link: 'https://newsstore.info/', desc: 'Its services include ride-hailing, food delivery, package delivery, couriers, freight transportation.' },
]

export default function Client() {
    return (
        <div className={styles.container}>
            <h1 className="secTitle">MY PROJECT</h1>
            <br />
            <Typography variant="h4" align="center"><a href="snigdhochowa.com">SnigdhoChowa Group Of Company Ltd.</a></Typography>
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
                            <a href={project.link} >
                                <MyCard>
                                    <Grid item container justifyContent="center">
                                        <Image src={project.src} alt="Vercel Logo" width={200} height={200} />
                                    </Grid>
                                    <Typography variant="h4" align="center">{project.title}</Typography>
                                    <Typography variant="body1" align="center">
                                        {project.desc}
                                    </Typography>
                                </MyCard>
                            </a>
                        </Grid>
                    })}
                </Grid>
            </Grid>
        </div>
    )
}
