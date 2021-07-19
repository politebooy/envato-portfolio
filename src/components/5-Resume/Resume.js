import { Divider, Grid, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import React from 'react'
import MyCard from '../MyCard'
import styles from './resume.module.css'
import { Line, Circle } from 'rc-progress';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { SendOutlined } from '@material-ui/icons';

const knowledge = [
    "Search engine marketing",
    "iOS and android apps",
    "Spreadsheets (Excel, Google Spreadsheets, etc.)",
    "Email Communication",
    "Presentation software (PowerPoint, Keynote)",
    "Office suites (Microsoft Office, G Suite)",
    "Operating systems (Windows and MacOS)",
]

export default function Resume() {

    const percentage = 66;

    return (
        <div className={styles.container}>
            <Typography variant="h3" align="center">MY RESUME</Typography>
            <Grid container>
                {/* <Grid item md="6">
                    <MyCard className={styles.itemContainer}>
                        <Typography variant="h5">Education</Typography>
                        <Divider />
                        <Grid className={styles.item}>
                            <Typography variant="body2">2006-2008</Typography>
                            <Typography variant="h5">Envato University</Typography>
                            <Typography variant="body1">MSC in Computer Engineer</Typography>
                        </Grid>

                        <Grid className={styles.item}>
                            <Typography variant="body2">2006-2008</Typography>
                            <Typography variant="h5">Envato University</Typography>
                            <Typography variant="body1">MSC in Computer Engineer</Typography>
                        </Grid>

                        <Grid className={styles.item}>
                            <Typography variant="body2">2006-2008</Typography>
                            <Typography variant="h5">Envato University</Typography>
                            <Typography variant="body1">MSC in Computer Engineer</Typography>
                        </Grid>
                    </MyCard>
                </Grid> */}
                {/* <Grid item md="6">
                    <MyCard>
                        <Typography variant="h5">Exparience</Typography>
                        <Divider />
                        <Grid className={styles.item}>
                            <Typography variant="body2">2006-2008</Typography>
                            <Typography variant="h5">Envato University</Typography>
                            <Typography variant="body1">MSC in Computer Engineer</Typography>
                        </Grid>

                        <Grid className={styles.item}>
                            <Typography variant="body2">2006-2008</Typography>
                            <Typography variant="h5">Envato University</Typography>
                            <Typography variant="body1">MSC in Computer Engineer</Typography>
                        </Grid>

                        <Grid className={styles.item}>
                            <Typography variant="body2">2006-2008</Typography>
                            <Typography variant="h5">Envato University</Typography>
                            <Typography variant="body1">MSC in Computer Engineer</Typography>
                        </Grid>
                    </MyCard>
                </Grid> */}



                <Grid item md="6">
                    <MyCard>
                        <Typography variant="h5">Exparience</Typography>
                        <Divider />
                        <Grid className={styles.lineProgress}>
                            <Line percent="10" strokeWidth="4" trailWidth="4" strokeColor="#007bff" trailColor="#d9dde0" strokeLinecap="square" />
                        </Grid>

                        <Grid className={styles.lineProgress}>
                            <Line
                                percent="10"
                                strokeWidth="4"
                                trailWidth="4"
                                strokeColor="#007bff"
                                trailColor="#d9dde0"
                                strokeLinecap="square"
                            />
                        </Grid>

                        <Grid className={styles.lineProgress}>
                            <Line
                                percent="10"
                                strokeWidth="4"
                                trailWidth="4"
                                strokeColor="#007bff"
                                trailColor="#d9dde0"
                                strokeLinecap="square"
                            />
                        </Grid>
                    </MyCard>
                </Grid>

                <Grid item md="6">
                    <MyCard>
                        <Typography variant="h5">Exparience</Typography>
                        <Divider />
                        <Grid className={styles.lineProgress}>
                            <Line
                                percent="10"
                                strokeWidth="4"
                                trailWidth="4"
                                strokeColor="#007bff"
                                trailColor="#d9dde0"
                                strokeLinecap="square"
                            />
                            {/* <Circle percent="10" strokeWidth="4" strokeColor="#D3D3D3" /> */}
                        </Grid>

                        <Grid className={styles.lineProgress}>
                            <Line
                                percent="10"
                                strokeWidth="4"
                                trailWidth="4"
                                strokeColor="#007bff"
                                trailColor="#d9dde0"
                                strokeLinecap="square"
                            />
                        </Grid>

                        <Grid className={styles.lineProgress}>
                            <Line
                                percent="10"
                                strokeWidth="4"
                                trailWidth="4"
                                strokeColor="#007bff"
                                trailColor="#d9dde0"
                                strokeLinecap="square"
                            />
                        </Grid>
                    </MyCard>
                </Grid>
                {/* START WORK OF RADIAL PROGRESS........................................................... */}
                <Grid item container md="6">
                    <MyCard>
                        <Typography variant="h5">Exparience</Typography>
                        <Divider />
                        <br/>
                        <Grid container justifyContent="space-around" alignItems="center" className={styles.radialProgress}>
                            <Grid item md="5">
                                <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                                <h3>Web Design</h3>
                            </Grid>

                            <Grid item md="5">
                                <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                                <h3>Web Devlopment</h3>
                            </Grid>
                        </Grid>


                        <Grid container justifyContent="space-around" className={styles.radialProgress}>
                            <Grid item md="5">
                                <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                                <h3>Graphic Design</h3>
                            </Grid>

                            <Grid item md="5">
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({

                                        textSize: '16px',

                                        pathColor: '#007bff',

                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#007bff',
                                    })}
                                />;
                                <h3>Auto CAD</h3>
                            </Grid>
                        </Grid>
                    </MyCard>
                </Grid>

                <Grid item md="6">
                    <MyCard>
                        <Typography variant="h5">Exparience</Typography>
                        <Divider />
                        {knowledge.map(list => (
                            <ListItem button>
                                <ListItemIcon>
                                    <SendOutlined />
                                </ListItemIcon>
                                <ListItemText primary={list} />
                            </ListItem>
                        ))}
                        <br/>
                    </MyCard>
                </Grid>
            </Grid>
        </div>
    )
}
