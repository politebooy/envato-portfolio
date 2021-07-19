import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './sidebar.module.css'
import { FaHome, FaBlogger } from 'react-icons/fa'
import { RiDatabase2Fill } from 'react-icons/ri'
import { BusinessCenter, Description, Person } from '@material-ui/icons';
import Image from 'next/image'
import { Button, Grid } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    }
}));
// "ffa3a1"
export default function PermanentDrawerLeft({ children }) {
    const classes = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.sidebarContainer}>
                <div className={styles.sidebar}>
                <Grid container justifyContent="center" alignItems="center" className={styles.profilePic}>
                    <Image src="/images/png.png" alt="Vercel Logo" width={110} height={110} />
                    <h2>Mojahid Islam</h2>
                </Grid>
                <Divider />
                <List className={styles.list}>
                    <Button startIcon={<FaHome />} >Home</Button>
                    <Button startIcon={<Person />} >About</Button>
                    <Button startIcon={<BusinessCenter />} >Services</Button>
                    <Button startIcon={<Description />} >Resume</Button>
                    <Button startIcon={<RiDatabase2Fill />} >Portfolio</Button>
                    <Button startIcon={<FaBlogger />} >Blog</Button>
                    {/* <ListItem button>
                        <ListItemIcon><FaBlogger /></ListItemIcon>
                        <ListItemText primary={`Blog`} />
                    </ListItem> */}
                </List>
                </div>
            </div>
            <div className={styles.children}>
                {children}
            </div>
        </div>
    );
}