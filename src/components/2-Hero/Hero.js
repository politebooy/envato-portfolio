import { Button, Grid } from '@material-ui/core'
import React from 'react'
import styles from './hero.module.css'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa'
import Typical from 'react-typical'

export default function Hero() {
    return (
        <div className={styles.addBg}>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
                className={styles.container}
            >
                <div className={styles.heroImg}>
                <Image src="/images/png.png" alt="Vercel Logo" width={140} height={140} />
                </div>
                <h1 className={styles.heading}>Mojahid Islam</h1>
                <h2>
                    I'm a {''}
                    <Typical
                        steps={['Web Developer.', 1000, 'UI/UX Designers.', 1000, 'Freelancer.', 1000]}
                        loop={Infinity}
                        wrapper="b"
                    />
                </h2>
                <ul>
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaPinterestP /></a>
                </ul>
                <Grid className={styles.btns}>
                    <Button>Contact me</Button>
                    <Button>intro</Button>
                </Grid>
            </Grid>
        </div>
    )
}
