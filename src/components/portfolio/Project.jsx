import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

// import components
import Informations from "./Informations";

// import Material UI
import { makeStyles, Paper } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        gridArea: "main",
        padding: "12px",
        borderRadius: "0px",
        backgroundColor: "#fbfbfb",
    },
}));

function Project({ projects }) {
    const classes = useStyle();

    const { id } = useParams();
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

    console.log("ID", id);

    return (
        <Paper className={`main ${classes.root}`} maxWidth="fluid">
            <Informations projects={projects} project={project} />
        </Paper>
    );
}

export default Project;
