import { Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import MyCard from '../MyCard'
import styles from './resume.module.css'

export default function Resume() {
    return (
        <div className={styles.container}>
            <Typography variant="h3" align="center">MY RESUME</Typography>
            <Grid container>
                <Grid item md="6">
                    <MyCard>
                        <Typography variant="h5">Education</Typography>
                        <Divider/>
                    </MyCard>
                </Grid>
                <Grid item md="6">
                    <MyCard>
                        <Typography variant="h5">Exparience</Typography>
                        <Divider/>
                    </MyCard>
                </Grid>
            </Grid>
        </div>
    )
}
