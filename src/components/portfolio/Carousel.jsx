// import core
import React from "react";
import { NavLink } from "react-router-dom";

// import library
import Slider from "react-slick";

// import Material UI
import { Avatar, Container, makeStyles } from "@material-ui/core";

// import style
import "../style/carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyle = makeStyles((theme) => ({
    root: {
        gridArea: "carousel",
    },
    slider: {
        top: "33%",
        left: "2%",
        display:"flex",
        width:"100%"
    },
    avatar: {
        width:"64px",
        height:"64px",
        borderRadius:"0",
        boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), \
        0px 1px 1px 0px rgba(0,0,0,0.14), \
        0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
}));
function Carousel({ projects }) {
    const classes = useStyle();
    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Container className={classes.root} component="fluid">
            <Slider {...settings} className={classes.slider}>
                {projects.map((project, index) => (
                    <NavLink
                        className="links"
                        to={`/portfolio/${project.id}/description`}
                    >
                        <Avatar
                            className={classes.avatar}
                            variant="rounded"
                            key={index}
                            src={`${process.env.REACT_APP_HOST}/logos/${project.id}`}
                            alt={project.name}
                        />
                    </NavLink>
                ))}
            </Slider>
        </Container>
    );
}

export default Carousel;
