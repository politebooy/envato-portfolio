// import { Grid, Typography } from '@material-ui/core'

// export default function Portfolio() {
//     return (
//         <div>
//             <Typography variant="h3" align="center">MY PORTFOLIO</Typography>
//             <Grid container>

//             </Grid>
//         </div>
//     )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import itemData from './itemData';
import styles from './portfolio.module.css'
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
}));

export default function Portfolio() {
    const classes = useStyles();

    return (
        <div id="portfolio" className={styles.container}>
            <h1 className="secTitle">MY PORTFOLIO</h1>
            <br/>
            <Grid container justifyContent="center">
                <ImageList rowHeight={200} className={styles.imageList} cols={3} gap={10}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} className={styles.imgContainer}>
                            {/* <div className={styles.overlay}>banglasedh</div> */}
                            <img src={item.src} alt={item.title} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Grid>
        </div>
    );
}