// import { Typography } from '@material-ui/core'
// import React from 'react'

// export default function Blog() {
//     return (
//         <div className={styles.container}>
//             <Typography variant="h3" align="center">MY BLOGS</Typography>
//         </div>
//     )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './blog.module.css'
import { Grid } from '@material-ui/core';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 170,
    },
});

const blog = [1, 2, 3, 4, 5]

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function MediaCard() {
    const classes = useStyles();

    return (
        <div className={styles.container}>
            <h1 className="secTitle">MY BLOGS</h1>
            <Carousel
                // swipeable={false}
                // draggable={false}
                showDots={true}
                arrows={false}
                responsive={responsive}
                // ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3500}
                keyBoardControl={true}
                customTransition="1s"
                // transitionDuration={3500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"

            >
                {blog.map(blg => (
                    <>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://material-ui.com/static/images/image-list/honey.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                        <br />
                    </>
                ))}
            </Carousel>;
        </div>
    );
}