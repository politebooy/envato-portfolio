import { Button, Grid } from '@material-ui/core'
import React from 'react'
import styles from './hero.module.css'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa'
import Typical from 'react-typical'

export default function Hero() {
    return (
        <div id="hero" className={styles.addBg}>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
                className={styles.container}
            >
                <div className={styles.heroImg}>
                    <Image data-aos="zoom-out" src="/images/png.png" alt="Vercel Logo" width={140} height={140} />
                </div>
                <h1 data-aos="fade-up" data-aos-delay="500" className={styles.heading}>Mojahid Islam</h1>
                <h2 data-aos="fade-up" data-aos-delay="600">
                    I'm a {''}
                    <Typical
                        steps={['Freelancer', 1000, 'writer', 1000, 'graphic designer.', 1000, ' IT Advisor', 1000,]}
                        loop={Infinity}
                        wrapper="b"
                    />
                </h2>
                <ul data-aos="fade-up" data-aos-delay="700">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaPinterestP /></a>
                </ul>
                <Grid data-aos="fade-up" data-aos-delay="800" className={styles.btns}>
                    <Button>Contact me</Button>
                    <Button>intro</Button>
                </Grid>
            </Grid>
        </div>
    )
}
