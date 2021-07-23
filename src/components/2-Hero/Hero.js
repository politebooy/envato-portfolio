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
                    <a href="https://www.facebook.com/mojahid.scm"><FaFacebookF /></a>
                    <a href="https://twitter.com/mojahid_scm"><FaTwitter /></a>
                    <a href="https://www.linkedin.com/mojahid-scm?_l=en_US"><FaLinkedinIn /></a>
                    <a href="https://www.instagram.com/mojahid.scm/"><FaInstagram /></a>
                    <a href="https://www.pinterest.com/mojahid_scm/"><FaPinterestP /></a>
                    <a href="https://www.notelife.me/mojahid_scm">N</a>
                </ul>
                <Grid data-aos="fade-up" data-aos-delay="800" className={styles.btns}>
                    <Button>Contact me</Button>
                    <Button>intro</Button>
                </Grid>
            </Grid>
        </div>
    )
}
