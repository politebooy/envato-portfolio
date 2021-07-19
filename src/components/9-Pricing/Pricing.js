import { Button, Grid, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import { AcUnit, AddCircle, AddShoppingCart, Adjust, SendOutlined } from '@material-ui/icons'
import React from 'react'
import MyCard from '../MyCard'
import styles from './pricing.module.css'

const price = [1, 2, 3]

const knowledge = [
    "Android Application",
    "IOS Application",
    "UX/UI Designs",
    "Wordpress Develop",
    "PSD to HTML",
    "Digital Marketing",
    "Content Editing"
]

export default function Pricing() {
    return (
        <div className={styles.container}>
            <h1 className="secTitle">PRICING PACKAGES</h1>
            <br />
            <Grid container>
                {price.map(pric => (
                    <Grid item md="4">
                        <MyCard>
                            <Typography variant="h6" align="center">Basic Plan</Typography>
                            <Typography variant="body2" align="center">This is basic Service Plan</Typography>
                            <hr />
                            <Button
                                fullWidth
                                size="large"
                                variant="contained"
                                color="primary"
                                className={styles.priceBtn}
                            >$250 <br /> <small> / Mont</small></Button>
                            <br />
                            {knowledge.map(list => (
                                <ListItem button>
                                    <ListItemIcon>
                                        <AcUnit />
                                    </ListItemIcon>
                                    <ListItemText primary={list} />
                                </ListItem>
                            ))}
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                endIcon={<AddShoppingCart />}
                            >shop now</Button>
                            <br/>
                            <br/>
                        </MyCard>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
