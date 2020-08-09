import React from "react";
import { Link } from "react-router-dom";

// import Material UI
import { Avatar, Container } from "@material-ui/core";

// import react-click
import Slider from "react-slick";

// import style
import "../style/portfolio.css";
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
        <Container className="carousel">
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <Link to={`/portfolio/${project.id}/description`}>
                        <Avatar
                            key={index}
                            src="src/static/image/avatar/linkedin _avatar.jpeg"
                            alt={project.name}
                        />
                    </Link>
                ))}
            </Slider>
        </Container>
    );
}

export default Carousel;
