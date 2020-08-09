import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

// import components
import Carousel from "./Carousel";
import Informations from "./Informations";
import Screenshot from "./Screenshot";

// import Material UI
import { Box } from "@material-ui/core";

// import style
import "../style/portfolio.css";

function Project() {
    const { id } = useParams();

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
        const projectURL = `${process.env.REACT_APP_HOST}/projects/${idProject}`;
        Axios.get(projectURL)
            .then((response) => response.data)
            .then((data) => setProject(data[0]));
    };

    useEffect(() => {
        getOneProject(id);
    }, [id]);

    console.log("ID", id);

    return (
        <Box className="main portfolio-container" maxWidth="xl">
            <Screenshot project={project} />
            <Informations project={project} />
            <Carousel projects={projects} />
        </Box>
    );
}

export default Project;
