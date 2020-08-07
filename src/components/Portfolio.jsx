import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";

// import Material UI
import { Container } from "@material-ui/core";

// import components
import Carousel from "./portfolio/Carousel";

// import style
import "../App.css";
import "./style/portfolio.css";
import Screenshot from "./portfolio/Screenshot";
import Informations from "./portfolio/Informations";
import NavBar from "./portfolio/NavBar";

function Portfolio() {
    const { id } = useParams();
    const { path, url } = useRouteMatch();

    const [projects, setProjects] = useState([{}]);
    const [project, setProject] = useState([{}]);

    const getProjects = () => {
        const projectsURL = `${process.env.REACT_APP_HOST}/projects?sort=true`;
        Axios.get(projectsURL)
            .then((response) => response.data)
            .then((data) => setProjects(data));
    };

    useEffect(() => {
        getProjects();
    }, []);

    const getOneProject = (idProject) => {
        const projectURL = `${url}/${idProject}`;
        Axios.get(projectURL)
            .then((response) => response.data)
            .then((data) => setProject(data[0]));
    };

    useEffect(() => {
        getOneProject(id);
    }, [id]);

console.log('LOG', id);

    return (
        <Container className="main portfolio-container" maxWidth="xl">
            <Carousel projects={projects}/>
            <Screenshot project={project} getOneProject={getOneProject}/>
            <Informations project={project} projects={projects}/>
        </Container>
    );
}

export default Portfolio;
