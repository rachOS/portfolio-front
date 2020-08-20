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
    },
    avatar: {
        boder: "5px solid",
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
