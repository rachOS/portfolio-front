import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

// import components
import Carousel from "./Carousel";
import Informations from "./Informations";
import Screenshot from "./Screenshot";

// import Material UI
import { makeStyles, Paper } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        gridArea: "main",
        display: "grid",
        gridTemplateColumns: "0.5fr 0.5fr 1fr 1fr",
        gridTemplateRows: "0.5fr 1fr 1fr",
        gridTemplateAreas:
            ' "carousel carousel form form form" \
        "screenshot screenshot form form form" \
        "screenshot screenshot form form form"',
        padding: "50px",
        rowGap: "5px",
        columnGap: "5px",
        borderRadius:"0px",
        backgroundColor: "#F0F0F0",
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
            <Screenshot project={project} />
            <Informations project={project} />
            <Carousel projects={projects} />
        </Paper>
    );
}

export default Project;
