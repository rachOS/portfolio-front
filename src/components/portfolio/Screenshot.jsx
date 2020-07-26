import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";

// import components

// import data

// import style

function Screenshot() {
    const { id } = useParams();
    const [project, setProject] = useState([{}]);
    const getOneProject = (idProject) => {
        const url = `${process.env.REACT_APP_HOST}/projects/${idProject}`;
        Axios.get(url)
            .then((response) => response.data)
            .then((data) => setProject(data[0]));
    };

    useEffect(() => {
        getOneProject(id);
    }, [id]);
    console.log('screen', project);

    return (
        <Container>
            <h1>Projet : {project.name}</h1>
        </Container>
    );
}

export default Screenshot;
