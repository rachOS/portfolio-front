// import core
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

// import Material UI
import { Box, makeStyles, Link, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    content: {
        width: "auto",
        margin: "5px",
        display: "flex",
    },
    description: {
        textAlign: "justify",
        color: "#2e2e33",
        fontSize: "unset",
        fontFamily: "'Sora', sans-serif",
        width: "52%",
    },
    screenshot: {
        width: "30%",
        float: "right",
        alignSelf: "center",
        position: "absolute",
        right: "2%",
        top: "23.5%",
    },
    link: {
        alignSelf: "center",
        position: "absolute",
        bottom: "12%",
    },
}));

function Description({ project, projectName, url }) {
    const classes = useStyles();

    const { id } = useParams();
    const [description, SetDescription] = useState(null);

    const getDescription = (idProject) => {
        const projectURL = `${process.env.REACT_APP_HOST}/projects/${idProject}/description`;
        Axios.get(projectURL)
            .then((response) => response.data)
            .then((data) => SetDescription(data));
    };
    useEffect(() => {
        getDescription(id);
    }, [id]);

    const checkDescription = description
        ? description
        : "Description du projet";
    return (
        <Box className={classes.content}>
            <Typography
                className={classes.description}
                dangerouslySetInnerHTML={{ __html: checkDescription }}
            />
            <div className={classes.link}>
                {url ? (
                    <Link href={url}> Lien du site</Link>
                ) : (
                    "site en cours de déploiement"
                )}
            </div>
            <img
                className={classes.screenshot}
                src={`${process.env.REACT_APP_HOST}/latest/${project.id}`}
                alt={`screenshot ${project.name} : ${project.id} `}
            />
        </Box>
    );
}

export default Description;
