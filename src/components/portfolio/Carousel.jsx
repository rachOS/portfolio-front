import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

// import Material UI
import { IconButton, Box, Avatar } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

// import style
import "../style/portfolio.css";

function Carousel({ projects }) {
    let { path, url } = useRouteMatch();
    const avatar = projects.map((project) => (
        <Avatar variant="square" alt={project.name} src="#">
            <Link to={`/portfolio/${project.id}/description`}>{project.name}</Link>
        </Avatar>
    ));
    console.log('URL', url);

    return (
        <Box className="carousel">
            <IconButton>
                <ArrowBackIosIcon />{" "}
            </IconButton>
            <AvatarGroup id="avatargroup1">{avatar}</AvatarGroup>
            <IconButton>
                <ArrowForwardIosIcon />
            </IconButton>
        </Box>
    );
}

export default Carousel;
