import React, { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import Axios from "axios";

// import components

// import data

// import Material UI
import { Container } from "@material-ui/core";

// import style
import "../style/portfolio.css";

function Project() {
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

    console.log('ID',id);

    return (
        <Container className="">
        {/* importer le carousel screenshot ici et faire passer projet en props */}
            <h1>{project.name}</h1>
        </Container>
    );
}

export default Project;
