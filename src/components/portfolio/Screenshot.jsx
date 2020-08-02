import React from "react";
import { Box, Avatar, Paper, Card } from "@material-ui/core";

// import components

// import data

// import style
import "../style/portfolio.css";

function Screenshot({ project }) {
    return (
        <Card>
            Projet:
            <img src={project.screenshot} alt={project.name} />
        </Card>
    );
}

export default Screenshot;
