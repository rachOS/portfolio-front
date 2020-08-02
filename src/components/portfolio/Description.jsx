import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, useRouteMatch } from "react-router-dom";
import {
    Box,
    Avatar,
    Paper,
    Typography,
    Card,
    Container,
} from "@material-ui/core";

// import components

// import data

// import style
import "../style/portfolio.css";

function Description({ project }) {
    return (
        <Typography>
            {project.description
                ? project.description
                : "Description du projet"}
        </Typography>
    );
}

export default Description;
