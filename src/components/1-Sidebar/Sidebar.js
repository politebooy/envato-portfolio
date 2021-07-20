import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import styles from './sidebar.module.css'
import { FaHome, FaBlogger } from 'react-icons/fa'
import { RiDatabase2Fill } from 'react-icons/ri'
import { BusinessCenter, Description, Person } from '@material-ui/icons';
import Image from 'next/image'
import { Button, Grid } from '@material-ui/core';
import AOS from 'aos';
import "aos/dist/aos.css";


export default function PermanentDrawerLeft({ children }) {

    useEffect(() => {
        AOS.init({
            duration: 1200
        });
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.sidebarContainer}>
                <div className={styles.sidebar}>
                    <Grid container justifyContent="center" alignItems="center" className={styles.profilePic}>
                        <Image data-aos="zoom-in" src="/images/tempImg.JPG" alt="Vercel Logo" width={110} height={110} />
                        <h2 data-aos="fade-up">Mojahid Islam</h2>
                    </Grid>
                    <Divider />
                    <List className={styles.list}>
                        <Button data-aos="fade-right" data-aos-delay="500" startIcon={<FaHome />} ><a href="#hero">Home</a></Button>
                        <Button data-aos="fade-right" data-aos-delay="600" startIcon={<Person />} ><a href="#about">About</a></Button>
                        <Button data-aos="fade-right" data-aos-delay="700" startIcon={<BusinessCenter />} ><a href="#services">Services</a></Button>
                        <Button data-aos="fade-right" data-aos-delay="800" startIcon={<Description />} ><a href="#resume">Resume</a></Button>
                        <Button data-aos="fade-right" data-aos-delay="900" startIcon={<RiDatabase2Fill />} ><a href="#portfolio">Portfolio</a></Button>
                        <Button data-aos="fade-right" data-aos-delay="1000" startIcon={<FaBlogger />} ><a href="#blog">Blog</a></Button>
                    </List>
                </div>
            </div>
            <div className={styles.children}>
                {children}
            </div>
        </div>
    );
}