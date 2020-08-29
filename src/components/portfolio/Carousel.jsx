// import core
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

// import library
import Slider from "react-slick";

// import style
import "../style/carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ projects }) {
    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {projects.map((project, index) => (
                <NavLink
                    className="links"
                    to={`/portfolio/${project.id}/description`}
                >
                    <p>{project.name}</p>
                </NavLink>
            ))}
        </Slider>
    );
}

export default Carousel;
