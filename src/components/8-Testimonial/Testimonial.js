import { Avatar, Box, Grid, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MyCard from '../MyCard';
import styles from './testimonial.module.css'


const testimonials = [1, 2, 3, 4, 5, 6, 7]


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

export default function Testimonial() {
    return (
        <div className={styles.container}>
            <Typography variant="h3" align="center">TESTIMONIALS</Typography>
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
                {testimonials.map(testi => (
                    <div>
                        <MyCard>
                            <br />
                            <Rating name="read-only" value={5} readOnly />
                            <br />
                            <Typography variant="body1">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </Typography>
                            <br />
                            <Grid container alignItems="center">
                                <Grid item md="3">
                                    <Avatar></Avatar>
                                </Grid>
                                <Grid item md="6">
                                    <Typography variant="h6">
                                        Client Name
                                    </Typography>
                                    <Typography variant="body1">
                                        who this client is
                                    </Typography>
                                </Grid>
                            </Grid>
                        </MyCard>
                        <br/>
                    </div>
                ))}
            </Carousel>;
        </div>
    )
}
