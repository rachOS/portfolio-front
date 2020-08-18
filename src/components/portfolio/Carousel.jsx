// import core
import React from "react";
import { Link } from "react-router-dom";

// import library
import Slider from "react-slick";

// import Material UI
import { Avatar, Container, makeStyles } from "@material-ui/core";

// import style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyle = makeStyles((theme) => ({
    root: {
        gridArea: "carousel",
    },
    slider: {
        top: "33%",
        left:"2%"
    },
    links: {
    },
}));
function Carousel({ projects }) {
    const classes = useStyle();
    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
    };

    return (
        <Container className={classes.root} component="fluid">
            <Slider {...settings} className={classes.slider}>
                {projects.map((project, index) => (
                    <Link
                        className={classes.links}
                        to={`/portfolio/${project.id}/description`}
                    >
                        <Avatar
                            variant="rounded"
                            key={index}
                            src={`${process.env.REACT_APP_HOST}/logos/${project.id}`}
                            alt={project.name}
                        />
                    </Link>
                ))}
            </Slider>
        </Container>
    );
}

export default Carousel;
