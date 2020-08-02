import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams, useRouteMatch } from "react-router-dom";
import { Box, Avatar, Paper } from "@material-ui/core";

// import components

// import data

// import style
import "../style/portfolio.css";

function Screenshot() {
    const { id } = useParams();
    const [project, setProject] = useState([{}]);
    const [screenshot, setScreenShot] = useState([{}]);

    const getOneProject = (idProject) => {
        const projectURL = `${process.env.REACT_APP_HOST}/projects/${idProject}`;
        Axios.get(projectURL)
            .then((response) => response.data)
            .then((data) => setProject(data[0]));
    };

    useEffect(() => {
        getOneProject(id);
    }, [id]);

    const getScreenshot = (idProject) => {
        const screenshotURL = `${process.env.REACT_APP_HOST}/projects/${idProject}/screenshot`;
        Axios.get(screenshotURL).then((response) => setScreenShot(response));
        // .then((data) => setScreenShot(data[0]));
    };

    useEffect(() => {
        getScreenshot(id);
    }, [id]);

    return <img src={screenshot.screenshot} alt={project.name} />;
}

export default Screenshot;
