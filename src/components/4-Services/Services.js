import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import MyCard from '../MyCard'
import styles from './services.module.css'
import Image from 'next/image'

export default function Services() {
    return (
        <div id="services" className={styles.container}>
            <br />
            <Typography variant="h3" align="center"></Typography>
            <h1 className="secTitle">MY SERVICES</h1>
            <br />
            <Grid container>
                <Grid item md="4">
                    <MyCard>
                        <div style={{ textAlign: 'center', padding: '10px 15px' }}>
                            <Image src="/images/024-server.png" alt="Vercel Logo" width={90} height={90} />
                            <br />
                            <br />
                            <Typography variant="h5">Amazon AWS</Typography>
                            {/* <br /> */}
                            <Typography variant="body1" color="textSecondary">Randon Text Received shutters expenses ye he pleasant. Drift as blind above at up.</Typography>
                        </div>
                    </MyCard>
                </Grid>

                <Grid item md="4">
                    <MyCard>
                        <div style={{ textAlign: 'center', margin: '10px 15px' }}>
                            <Image src="/images/062-code-1.png" alt="Vercel Logo" width={90} height={90} />
                            <br />
                            <br />
                            <Typography variant="h5">Web Development</Typography>
                            {/* <br /> */}
                            <Typography variant="body1" color="textSecondary">Randon Text Received shutters expenses ye he pleasant. Drift as blind above at up.</Typography>
                        </div>
                    </MyCard>
                </Grid>

                <Grid item md="4">
                    <MyCard>
                        <div style={{ textAlign: 'center', margin: '10px 15px' }}>
                            <Image src="/images/064-vector.png" alt="Vercel Logo" width={90} height={90} />
                            <br />
                            <br />
                            <Typography variant="h5">Web Development</Typography>
                            {/* <br /> */}
                            <Typography variant="body1" color="textSecondary">Randon Text Received shutters expenses ye he pleasant. Drift as blind above at up.</Typography>
                        </div>
                    </MyCard>
                </Grid>

                <Grid item md="4">
                    <MyCard>
                        <div style={{ textAlign: 'center', margin: '10px 15px' }}>
                            <Image src="/images/043-analytics.png" alt="Vercel Logo" width={90} height={90} />
                            <br />
                            <br />
                            <Typography variant="h5">Web Development</Typography>
                            {/* <br /> */}
                            <Typography variant="body1" color="textSecondary">Randon Text Received shutters expenses ye he pleasant. Drift as blind above at up.</Typography>
                        </div>
                    </MyCard>
                </Grid>

                <Grid item md="4">
                    <MyCard>
                        <div style={{ textAlign: 'center', margin: '10px 15px' }}>
                            <Image src="/images/033-rocket.png" alt="Vercel Logo" width={90} height={90} />
                            <br />
                            <br />
                            <Typography variant="h5">Web Development</Typography>
                            {/* <br /> */}
                            <Typography variant="body1" color="textSecondary">Randon Text Received shutters expenses ye he pleasant. Drift as blind above at up.</Typography>
                        </div>
                    </MyCard>
                </Grid>

                <Grid item md="4">
                    <MyCard>
                        <div style={{ textAlign: 'center', margin: '10px 15px' }}>
                            <Image src="/images/054-puzzle.png" alt="Vercel Logo" width={90} height={90} />
                            <br />
                            <br />
                            <Typography variant="h5">Web Development</Typography>
                            {/* <br /> */}
                            <Typography variant="body1" color="textSecondary">Randon Text Received shutters expenses ye he pleasant. Drift as blind above at up.</Typography>
                        </div>
                    </MyCard>
                </Grid>
            </Grid>
        </div>
    )
}
