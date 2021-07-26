import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import MyCard from '../MyCard'

export default function About() {
    return (
        <div id="about" className={styles.container}>
            {/* <Typography variant="h3" align="center"></Typography> */}
            <h1 className="secTitle">ABOUT ME</h1>
            <br />
            <br />
            <Grid container alignItems="flex-end">
                <Grid item md="4">
                    <MyCard>
                        <Image src="/images/about.jpg" alt="Vercel Logo" width={400} height={400} />
                    </MyCard>
                </Grid>
                <Grid item md="8">
                    <MyCard>
                        <br />
                        <Typography variant="body1">Randon Text Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar as he believed.</Typography>
                        <br />
                        <Typography variant="body1">Left till here away at to whom past. Feelings laughing at no wondered repeated provided finished. It acceptance thoroughly my advantages everything as.</Typography>
                        <hr />
                        <Button>Download cv</Button>
                        <br />
                        <br />
                    </MyCard>
                </Grid>
            </Grid>
            <br />
            <Grid container>
                <MyCard>
                    <Grid container>
                        <Grid item md="6">
                            <div className={styles.info}>
                                <div className={styles.prop}>
                                    <p>City:</p>
                                    <p>Website:</p>
                                    <p>Phone:</p>
                                    <p>Degree:</p>
                                    <p>Notelife:</p>
                                </div>
                                <div>
                                    <p>Dhaka Bangladesh</p>
                                    <p>www.mojahidislam.com</p>
                                    <p>01711223405</p>
                                    <p>Master</p>
                                    <p>mojahid_scm</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md="6">
                            <div className={styles.info}>
                                <div className={styles.prop}>
                                    <p>Study:</p>
                                    <p>Interests:</p>
                                    <p>Degree:</p>
                                    <p>Mail:</p>
                                </div>
                                <div>
                                    <p>Dhaka University</p>
                                    <p>Businessman </p>
                                    <p>Master</p>
                                    <p>contact@mojahidislam.com</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </MyCard>
            </Grid>
            <br />
            <Grid container>
                <Grid item md="3" container justifyContent="center">
                    <MyCard>
                        <div style={{ textAlign: 'center' }}>
                            <Image src="/images/005-target.png" alt="Vercel Logo" width={90} height={90} />
                            <Typography variant="h5">80 K+</Typography>
                            <Typography variant="body1">Project Done</Typography>
                        </div>
                    </MyCard>
                </Grid>

                <Grid item md="3" container justifyContent="center">
                    <MyCard>
                        <div style={{ textAlign: 'center' }}>
                            <Image src="/images/045-hacker.png" alt="Vercel Logo" width={90} height={90} />
                            <Typography variant="h5">80 K+</Typography>
                            <Typography variant="body1">Project Done</Typography>
                        </div>
                    </MyCard>
                </Grid>

                <Grid item md="3" container justifyContent="center">
                    <MyCard>
                        <div style={{ textAlign: 'center' }}>
                            <Image src="/images/053-success-1.png" alt="Vercel Logo" width={90} height={90} />
                            <Typography variant="h5">80 K+</Typography>
                            <Typography variant="body1">Project Done</Typography>
                        </div>
                    </MyCard>
                </Grid>

                <Grid item md="3" container justifyContent="center">
                    <MyCard>
                        <div style={{ textAlign: 'center' }}>
                            <Image src="/images/045-hacker.png" alt="Vercel Logo" width={90} height={90} />
                            <Typography variant="h5">80 K+</Typography>
                            <Typography variant="body1">Project Done</Typography>
                        </div>
                    </MyCard>
                </Grid>
            </Grid>
        </div>
    )
}
