import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import { Card } from "@material-ui/core";

// import components

// import data

// import style
import "../style/portfolio.css";

function Screenshot() {
    const { id } = useParams();
    const { path, url } = useRouteMatch();
    const [project, setProject] = useState([{}]);

    const getOneProject = (idProject) => {
        const projectURL = `${process.env.REACT_APP_HOST}/projects/${idProject}`;
        Axios.get(projectURL)
            .then((response) => response.data)
            .then((data) => setProject(data[0]));
    };

    useEffect(() => {
        getOneProject(id);
    }, [id]);
    return (
        <Card>
            Projet:
            <img src={project.screenshot} alt={project.name} />
        </Card>
    );
}

export default Screenshot;
